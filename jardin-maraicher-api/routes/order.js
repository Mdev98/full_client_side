require("dotenv/config");

const express = require('express');

const router = express.Router();
const Cart   = require('../models/cart');
const Order  = require('../models/order');

const { authSeller, authUser} = require('../middleware/auth');

const API = process.env.API_URL;

// MAKE ORDER 

router.post(`${API}/order`, authUser, async(req,res) => {
    try {
        

        const cart = new Cart({
            customer : req.user._id,
            cartList : req.body.cartList,
        })
        await cart.save();
        
       
        const order = new Order({
            "carts.0.cart" : cart,
            "shipping_adress1" : req.body.shipping_adress1,
            "city" : req.body.city,
            "country" : req.body.country,
            "phone" : req.body.phone,
            "status" : "pending",
        })

        await order.save();

        res.status(201).json(order)
    }catch(e){
        console.log(e);
    }
})

// GET USER ORDERS

router.get(`${API}/order/me`, authUser,async(req,res) => {
    try {
        const orders = await Order.find().populate({path : 'carts.cart',populate : {path : 'customer'}})
                                         .populate({ path : 'carts.cart', populate : {path : 'cartList.productId'}})

        
        let userOrder = []

        orders.forEach(order => {
            const {carts : [tab]} = order;
            const { cart : {customer, cartList} } = tab;

            let amount = 0
            let product = []

            cartList.forEach(cart => {
                p = {
                    "productName" : cart.productId.name,
                    "productPrice" : cart.productId.price,
                    "quantity" : cart.quantity,
                    "amount" : cart.amount
                }  
                
                product.push(p);
                amount += cart.amount 
            })


            const data = {
                "customer" : {
                    "customerName" : customer.name,
                    "firstName" : customer.first_name,
                    "lastName" : customer.last_name,
                    "shippingAdress" : order.shipping_adress1,
                    "city" : order.city,
                    "country" : order.country,
                },
                "productItems" : product,
                "amount" : amount,
                "id" : order._id
            }

            if(customer._id == req.user._id.toString()){
                userOrder.push(data); 
            }
            
        })

        res.send(userOrder);

    }catch(e){
        console.log(e);
    }
})


// GET ORDER ORDER- ID 

router.get(`${API}/order/:id`, async(req,res) => {
    const id = req.params.id
    try {
        const order = await Order.findById(id).populate({path : 'carts.cart',populate : {path : 'customer'}})
                                         .populate({ path : 'carts.cart', populate : {path : 'cartList.productId'}})
        let userOrder 

        const {carts : [tab]} = order;
        const { cart : {customer, cartList} } = tab;

        let amount = 0
        let product = []

        cartList.forEach(cart => {
            p = {
                "productName" : cart.productId.name,
                "productPrice" : cart.productId.price,
                "quantity" : cart.quantity,
                "amount" : cart.amount
            }  
            
            product.push(p);
            amount += cart.amount 
        })


        const data = {
            "customer" : {
                "customerName" : customer.name,
                "firstName" : customer.first_name,
                "lastName" : customer.last_name,
                "shippingAdress" : order.shipping_adress1,
                "city" : order.city,
                "country" : order.country,
            },
            "productItems" : product,
            "amount" : amount,
            "id" : order._id
        }

        
        userOrder = data; 
            
            

        res.send(userOrder);
    }catch(e){
        console.log(e);
    }
})

// GET SELLER'S ORDER

router.get(`${API}/seller/order`, authSeller, async(req,res) => {  
    try {
        const orders = await Order.find({ status : "pending" }).populate({path : 'carts.cart',populate : {path : 'customer'}})
                                                              .populate({ path : 'carts.cart', populate : {path : 'cartList.productId'}});


        let commandes = [];

        let amount = 0
        let cartDetails = {}

        orders.forEach(order => {
            const {createdAt, ...other} = order._doc;

            const {carts : [cart] } = other 

            const {cart : {customer, cartList}} = cart

            
            
            
            // cartDetails.profile = customer.profile

            let i = 1;

            
            cartList.forEach(product => {
                const { cartOwner } = product
                if(cartOwner == req.user._id.toString()){
                    let cartDetails = {
                        "id" : i,
                        customerId : customer._id,
                        orderId : order._id,
                        customerName : customer.username,
                        customerEmail : customer.email,
                        customerShippingAdress : order.shipping_adress1,
                        customerCity : order.city,
                        customerCountry : order.country,
                        productName : product.productId.name,
                        productPrice : product.productId.price,
                        quantity : product.quantity,
                        amount : product.amount,

                    }

                    commandes.push(cartDetails)
                    i++;
                    // console.log(cartDetails)
                }
            }); 
            
        })

        


        res.status(200).json(commandes)

    } catch (error) {
        console.log(error)
    }
})


// GET SELLER ORDERS STATS

router.get(`${API}/user/stats`, authSeller, async(req,res) => {  
    try {
        const orders = await Order.find({ status : "OK" }).populate({ path : 'carts.cart', populate : {path : 'cartList.productId'}});

        let P = []
        let stats = []
        let income = 0;

        const months = ['Jan', 'Fev', 'Mars', 'Avr', 'Mai' , 'Juin', 'Juil', 'Aout', 'Sept', 'Oct', 'Nov', 'Dec'];
    
        for(let i = 0; i < 12; i++){

            orders.forEach(order => {
                const {createdAt, ...other} = order._doc;
                const {carts : [cart] } = other 

                const {cart : {cartList}} = cart
                
                const date = createdAt.getMonth();

                
                cartList.forEach(product => {

                    

                    const { cartOwner } = product
                    if(cartOwner == req.user._id.toString() && date == i){
                        income += product.amount
                        P.push(product)

                    }

                });                
            })
            stats.push({
                "month" : months[i],
                "sale" : P.length,
                "income" : income
            });

            P = [];
            income = 0
        }

        res.status(200).json(stats)
        

    } catch (error) {
        console.log(error)
    }
})


// UPDATE ORDER STATUS ---> auth with seller admin only

router.patch(`${API}/order/:id`, async(req,res) => {
    const id = req.params.id;
    try {
        const order = await Order.findById(id);
        order["status"] = "OK";
        order.save();
        res.status(200).json({message : "Mise à jour effectuée"});
    }catch(e){
        console.log(e);
    }
})






















// DELETE ORDER ---> auth with seller admin only

router.delete(`${API}/order/:id`, async(req,res) => {
    const id = req.params.id
    try {
        const order = await Order.findOne({ _id : id})

        await order.remove()

        if(!order){
            return res.status(400).json({message : "No record found"})
        }
        res.status(200).json({order, message: "Commande retiré"})
    } catch (error) {
        console.log(error)
    }
})

// GET ALL ORDERS 

router.get(`${API}/order`, async(req,res) => {
    try {
        const orders = await Order.find().populate({path : 'carts.cart',populate : {path : 'customer'}})
                                         .populate({ path : 'carts.cart', populate : {path : 'cartList.productId'}})
        res.status(200).send(orders)
    }catch(e){
        console.log(e);
    }
})

// GET TOTAL SALE

router.get(`${API}/totalSale`, async(req,res) => {
    try{
        const totalSale = await Order.aggregate([
            { $group : { _id : null, totalSale : { $sum : '$amount' } } }
        ])
        res.status(200).json(totalSale)
    }catch(e){
        console.log(e)
    }
})






module.exports = router;