const mongoose = require("mongoose");
const validator = require("validator");

const UserRegistration = new mongoose.Schema({
    name: {
        type: String,
        required:true
      },
    email: {
        type: String,
        required:true,
        unique:[true, "Email already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
      },
    phone: {
        type: Number,
        required:true,
        minlength: 10,
        unique:true
      },
    city: {
        type: String,
        required:true
      },
    password: {
        type: String,
        required:true
      }
})
//creating collection

const User = new mongoose.model('User', UserRegistration);
module.exports = User;