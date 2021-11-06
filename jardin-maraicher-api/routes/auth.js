require('dotenv/config');

const express = require('express');
const router  = express.Router(); 

const API = process.env.API_URL;

const User = require('../models/user');
const { authSeller, authUser, authN } = require('../middleware/auth');


// SIGN IN

router.post(`${API}/signin`, async(req,res) => {
    const user = new User(req.body)

    try {
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).json({
            "users" : user.toJSON(),
            "token" : token,
            "message" : "Utilisateur connecté"
        });
    }catch(e){
        res.send(500).send(e)
    }
})

// LOG IN

router.post(`${API}/login`, async(req,res) => {
    try {

        const user = await User.findByCredentials(req.body.email, req.body.password);
        const token = await user.generateAuthToken();
        res.status(200).json({
            "users" : user.toJSON(),
            "token" : token,
            "message" : "Utilisateur connecté"
        })
    }catch(e){
        res.send(500).send(e)
    }
})

// LOG OUT

router.post(`${API}/logout`, authN, async(req,res)=>{
    try{
        const user = req.user;

        user.tokens = user.tokens.filter((token)=>{
            return token.token !== req.token
        });

        await user.save();

        res.json({
            "message" : "Utilisateur déconnecté"
        })
    }catch(e){
        console.log(e)
    }
})


// LOG OUT EVERYWHERE

router.post(`${API}/logoutall`, authN, async(req,res)=>{
    try{
        const user = req.user

        user.tokens = []

        await user.save()

        res.status(200).json({
            "message" : "Vous êtes déconnecté de tous les appareils"
        })

    }catch(e){
        console.log(e);
    }
})


module.exports = router;