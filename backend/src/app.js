const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const path=require("path");
const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

const hbs=require("hbs")

require("./db/conn");
const Register= require("./models/registers");

const port = process.env.PORT || 8000;

const static_path=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../templates/views");
const partial_path=path.join(__dirname,"../templates/partials");

app.use(express.static(static_path));
app.set("view engine",'hbs');
app.set("views",template_path);
hbs.registerPartials(partial_path);
// Configure body-parser
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/",(req, res)=>{
    return res.render("index")
});


  
// Registration Route
app.post('/index', async (req, res) => {
    
    const { name, email, phone, city, password } = req.body;
    //check email validity
    if (!email || !name || !phone || !city || !password) {
        return res.status(422).json({ error: "Please fill all the fields" });
    }
    // validate email exists or not 
    const EmailExist = await Register.findOne({ email: email });
    if (EmailExist) {
        return res.status(422).json({ error: "Email already exists" });
    }
            
    // Create a new user
    const newUser = new Register(req.body);

    // Save the user in the database

    try {
        const savedData = await newUser.save();
        console.log("User registered successfully");
        res.status(200).json({Message: "User registered successfully", savedData});
        
    } catch (err) {
        return res.status(500).json({Error:'Error registering user.'});``
    }
});


app.listen(port,()=>{
    console.log(`Server is running at port number ${port}`);
})





