const mongoose = require("mongoose");
const validator = require("validator");

const UserRegistration = new mongoose.Schema({
    name: {
        type: "string",
        required:true
      },
    email: {
        type: "string",
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
        min:10,
        unique:true
      },
    city: {
        type: "string",
        required:true
      },
    password: {
        type: "string",
        required:true
      },
    confirmpassword: {
        type: "string",
        required:true
      }
})
//creating collection

const Register = new mongoose.model('Registeration', UserRegistration);
module.exports = Register;