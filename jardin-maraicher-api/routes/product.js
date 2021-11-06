require("dotenv/config");

const multer  = require("multer");
const express = require('express');
const sharp   = require('sharp');

const router  = express.Router();
const Product = require('../models/product');
const { authSeller, authUser} = require('../middleware/auth');

const API = process.env.API_URL;

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




router.post(`${API}/products`, authSeller, upload.single('image'), async (req, res) => {
  const buffer = await sharp(req.file.buffer).png().resize({width : 500, height : 500}).toBuffer()

    try {
      const product = new Product({
        ...req.body,
        "image" : buffer,
        "owner" : req.user._id
      });

      await product.save();

      res.status(201).json({
        message : "Produit ajouté !",
        product
      });
    }catch(e){
      console.log(e)
    }
  });


// READ PRODUCTS

router.get(`${API}/products`, async(req,res) => {
    
    let match = {}

    if(req.query){
        match = req.query
    }

    console.log(req.query)

    try{
        const products = await Product.find(match).populate({path: 'owner', select: 'username'})
        res.status(200).json(products)
    }catch(e){
        console.log(e)
    }
})

// READ PRODUCT - ID

router.get(`${API}/products/:id`, async(req,res) => {
    const id = req.params.id
    try{
        const product = await Product.findOne({_id : id}).populate({path : 'owner'})
        res.status(200).json(product.toJSON())
    }catch(e){
        res.status(500).json({
            error : e
        })
    }
})

// READ SELLER PRODUCT

router.get(`${API}/me/products`, authSeller, async(req,res) => {

    try {
      const products = await Product.find({owner : req.user._id});
  
      res.status(200).json({
        productList : products
      });

    }catch(e){
      console.log(e);
    }
})

// DELETE A  PRODUCT

router.delete(`${API}/products/:id`, authSeller, async(req,res)=>{
    const id = req.params.id
    try{
      await Product.findOneAndRemove({_id : id, owner : req.user._id})

      res.status(200).json({
        message : "Produit retiré !"
      })

    }catch(e){
      console.log(e)
    }
})
  
// UPDATE A PRODUCT
  
router.put(`${API}/products/:id`, authSeller, async(req,res) => {
    const id = req.params.id
    const updates = Object.keys(req.body)

    try {
        const product = await Product.findOne({ _id : id, owner : req.user._id })

        if(!product){
            return res.status(400).send("No record found")
        }

        updates.forEach(update => product[update] = req.body[update])
        await product.save()

        res.status(200).json({
            message : "Details produit à jour",
            product
        })
    }catch(e){
        console.log(e)
    }
})
// PRODUCT IMAGE


router.put(`${API}/products/:id/image`, authSeller, upload.single('image'), async (req,res) => {
  const buffer = await sharp(req.file.buffer).png().resize({width : 500, height : 500}).toBuffer()

  const product = await Product.findById(req.params.id);

      if(!product){
          throw new Error("Not found")
      }

  product.image = buffer;

  await product.save()

  res.send({
    "message" : "Image updated"
  });
},(error, req, res, next)=>{
  res.status(400).send({
      error : error.message
  })
})

router.delete(`${API}/products/:id/image`, authSeller, async (req, res) => {
  const product = await Product.findById(req.params.id);

  if(!product){
      throw new Error("Not found")
  }

  product.image = undefined;
  await product.save();

  res.send({"message" : "Image supprimée"})
})

router.get(`${API}/image/:id/product`, async (req,res) => {
  try{
      const product = await Product.findById(req.params.id);

      if(!product || !product.image){
          throw new Error("Not found")
      }

      res.set('Content-Type', 'image/png');
      res.send(product.image);
  }catch(e){
    res.status(400).send(e.message)
  }
})



module.exports = router;
