const mongoose = require("mongoose");
const YoutubeRegistration = new mongoose.Schema({
    name: {
        type: "string",
        required:true
      },
    email: {
        type: "string",
        required:true,
        unique:true
      },
    phone: {
        type: Number,
        required:true,
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

const Register = new mongoose.model("Registeration",YoutubeRegistration);
module.exports= Register;
