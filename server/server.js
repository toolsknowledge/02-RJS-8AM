//import the node modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//import model
const product = require("./model/product");


//create the rest object
const app = express();

//enable the cors policy
app.use(cors());

//connect to mongodb database
mongoose.connect("mongodb+srv://admin:admin@miniprojectdb.nzphu.mongodb.net/02-rjs-8am?retryWrites=true&w=majority");


//create the get request
app.get("/api/products",async (req,res)=>{
    const products = await product.find();
    res.send(products);
});


//assign the port number
app.listen(8080,()=>{
    console.log("server listening the port no.8080");
});
