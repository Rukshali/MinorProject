const express = require("express");
const path=require("path");
const app=express();
const hbs=require("hbs")

require("./db/conn");
const Register= require("./models/registers");
const {json}=require("express");

const port = process.env.PORT || 5000;

const static_path=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../templates/views");
const partial_path=path.join(__dirname,"../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine",'hbs');
app.set("views",template_path);
hbs.registerPartials(partial_path);


app.get("/",(req, res)=>{
    res.render("index")
});

app.get("/index",(req,res)=>{
    res.render("index");
})
//create a new user in our database
app.post("/index",async(req,res)=>{
    try {
        const password=req.body.password;
        const cpassword= req.body.confirmpassword;
        // console.log(req.body); 
        if(password===cpassword){
            const registerEmployee=new Register({
                name:req.body.name,
                email:req.body.email,
                phone:req.body.phone,
                city:req.body.city,
                password:password,
                confirmpassword:cpassword
            })
            await registerEmployee.save().then(()=>{ console.log("success")}).catch((e)=>{console.log("error")});
            res.status(201).render("index");
        }else{
            res.send("Password are not matching")
        }
        
    } catch (error) {
        res.status(400).send(error);
    }
})














app.listen(port,()=>{
    console.log(`Server is running at port number ${port}`);
})