require('dotenv/config')

const multer  = require("multer");
const express = require('express');
const sharp   = require('sharp')

const router = express.Router();
const User   = require('../models/user');
const Order  = require('../models/order');

const { authSeller, authUser, authN} = require('../middleware/auth');

const API = process.env.API_URL;



// READ PROFILE : USER


router.get(`${API}/me`, authN, async(req, res) => {
    res.status(200).json(req.user.toJSON());
})

// UPDATE PROFILE


router.put(`${API}/me`, authN, async (req,res)=>{

    try{    
        const user = await User.findByIdAndUpdate(
            req.user.id,
            {
                ...req.body,
            },
            { new: true});

        await user.save()
        res.status(200).json({
            "message" : "Details profile mis à jour avec succés",
            user
        })
    }catch(e){
        console.log(e)
    }
})


//SELLER

router.get(`${API}/seller`, authSeller, async(req,res) => {  
    try {
        const orders = await Order.find().populate({ path : 'carts.cart' });

        orderReceived = orders.filter(order => {
            return order.status == "pending"
        });

        orderShipped = orders.filter(order => order.status == "OK");

        

        const OShip = [];
        const ORec = [];
        let userIncome = 0

        orderShipped.forEach(order => {
            const {carts : [cart]} = order
            const {cart : {cartList}} = cart
            



            cartList.forEach(product => {

                const { cartOwner } = product
                if(cartOwner == req.user._id.toString()){
                    userIncome += product.amount
                    OShip.push(product)
                    // console.log(product)
                }
                
            })
            
            
        }) 

        orderReceived.forEach(order => {
            const {carts : [cart]} = order
            const {cart : {cartList}} = cart
            

            
            cartList.forEach(product => {
                const { cartOwner } = product
                if(cartOwner == req.user._id.toString()){
                    ORec.push(order)
                }
            })
        }) 
        

        res.status(200).json({
            "sales"  : OShip.length,
            "income" : userIncome,
            "order"  : ORec.length
        })
    } catch (error) {
        console.log(error)
    }
})


// PROFILE 

const upload = multer({
    limits :{
        fileSize : 1000000
    },
    fileFilter(req,file,cb){
        // console.log(file)
        if(!file.originalname.match(/\.(jpg|png|jpeg)$/)){
            return cb(new Error('Veuillez entrer une image !'))
        }
        cb(undefined, true)
    }
})

router.post(`${API}/profile`, authN, upload.single('profile'), async (req,res) => {
    const buffer = await sharp(req.file.buffer).png().resize({width : 250, height : 250}).toBuffer()

    const user = req.user;
    user.profile = buffer;
    await req.user.save()
    res.send({
        user,
        "message" : "profile added"
    });
},(error, req, res, next)=>{
    res.status(400).send({
        error : error.message
    })
})

router.delete(`${API}/profile`, authN, async (req, res) => {
    const user = req.user;
    user.profile = undefined;
    await user.save();
    res.send({user ,"message" : "profile deleted"})
})

router.get(`${API}/:id/profile`, async (req,res) => {
    
    try{
        const user = await User.findById(req.params.id);

        if(!user || !user.profile){
            throw new Error("Not found")
        }

        res.set('Content-Type', 'image/png');
        res.send(user.profile);
    }catch(e){
        res.status(400).send(e)
    }
})

router.get(`${API}/test`, async(req,res) => {
    const user = await User.findOne();


    res.send(user);
})



module.exports = router;