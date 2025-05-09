const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name Field is Mendatory"]
    },
    username:{
        type:String,
        unique:true,
        required:[true,"Username Field is Mendatory and Must be Unique"]
    },
    email:{
        type:String,
        unique:true,
        required:[true,"Email Field is Mendatory"]
    },
    phone:{
        type:Number,
        required:[true,"Phone Field is Mendatory"]
    },
    password:{
        type:String,
        required:[true,"Password Field is Mendatory"]
    },
    opt:{
        type:String,
    },
    role:{
        type:String,
        default:"User"
    }
})

const User = new mongoose.model("User",userSchema)

module.exports = User