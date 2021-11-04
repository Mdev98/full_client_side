const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    customer : {
        type: mongoose.Schema.Types.ObjectID,
        ref : 'user',
        required: true
    },
    
    cartList : [
        {
            productId : {
                type: mongoose.Schema.Types.ObjectID,
                ref : 'product'
            },
            quantity: {
                type: Number,
                default:1
            },
            amount : {
                type: Number
            },
            cartOwner : {
                type: mongoose.Schema.Types.ObjectID,
                ref : 'user',
                required : true
            }
        }
    ]
},{
    timestamps : true
})

const Cart = mongoose.model('cart', cartSchema);

module.exports = Cart;