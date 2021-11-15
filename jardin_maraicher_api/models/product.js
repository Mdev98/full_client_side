const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true,
    },

    description : {
        type : String
    },

    stock : {
        type: Number,
        min : 0,
        max : 255,
        required: true
    },

    price : {
        type: Number,
        required: true
    },

    category : {
        type : String,
        required: true
    },

    image : {
        type: Buffer
    },
     
    owner : {
        type : mongoose.Schema.Types.ObjectID,
        ref : 'user',
        required : true
    }
    
})

productSchema.methods.toJSON = function () {
    const product = this;
    const prodObj = product.toObject();

    delete prodObj.image;

    return prodObj;
}

const Product = mongoose.model("product", productSchema);

module.exports = Product;