const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const product = require("./model/product");

const app = express();
app.use(cors());

mongoose.connect("mongodb+srv://admin:admin@miniprojectdb.nzphu.mongodb.net/02-rjs-8am?retryWrites=true&w=majority");


app.get("/api/products",async (req,res)=>{
    const records = await product.find();
    res.send(records);
});

app.listen(8080,()=>{
    console.log("server listening the port no.8080");
});
