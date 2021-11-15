const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    carts : [{
        cart : {
            type: mongoose.Schema.Types.ObjectID,
            ref : 'cart',
            required : true
        }
    }],
    amount : {
        type : Number
    },
    shipping_adress1 : { 
        type : String,
        required : true
    },
    shipping_adress2: {
        type : String,
        required : false
    },
    city : {
        type : String,
        required : true
    },
    country : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    }, 
    status : {
        type : String,
        required : true
    }
},{
    timestamps : true
})


const Order = mongoose.model('order', orderSchema);

module.exports = Order;