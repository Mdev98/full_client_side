require("dotenv/config");
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required: true,
        unique : true,
    },

    first_name : {
        type : String,
    },

    last_name : {
        type : String,
    },

    sexe : {
        type : String,
    },

    profile : {
        type : Buffer,
    },

    email : {
        type : String,
        required: true,
        unique : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('email is not valid')
            }
        },
    },

    password : {
        type : String,
        required: true,
        minLength : 7,
        trim: true
    },

    isSeller : {
        type : Boolean,
        default: false,
        required : true
    },

    tokens : [{
        token : {
            type : String,
            required : true
        }
    }]

},{
    timestamps : true
})

userSchema.methods.toJSON = function () {
    const user = this;
    const userObj = user.toObject();

    delete userObj.password;
    delete userObj.tokens;
    delete userObj.profile;

    return userObj;
}

userSchema.methods.generateAuthToken = async function () { 
    const user = this;

    const token = jwt.sign({ _id : user._id.toString() } , process.env.JWT_SECRET_TOKEN);

    user.tokens = user.tokens.concat({ token });

    await user.save();
    
    return token
}



userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({email})

    if(!user){
        throw new Error("Unable to login");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch){
        throw new Error("Unable to login");
    }

    return user
}

userSchema.pre('save', async function (next){
    const user = this;

    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8);
    }

    if(user.isSeller == true){
        const userObj = user.toObject();

        userObj.income = 0
    }

    next()
})



const User = mongoose.model("user", userSchema);

module.exports = User;