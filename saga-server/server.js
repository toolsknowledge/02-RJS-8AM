const express = require("express");
const mongodb = require("mongodb");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const ashokIT = mongodb.MongoClient;

app.get("/products",(req,res)=>{
    ashokIT.connect("mongodb+srv://admin:admin@cluster0.jgnmk.mongodb.net/02-rjs-8am?retryWrites=true&w=majority",(err,connection)=>{   
        if(err) throw err;
        else{
            const db = connection.db("02-rjs-8am");
            db.collection("products").find().toArray((err,array)=>{
                if(err) throw err;
                else{
                    res.send(array);
                }
            })
        }
    })
});


app.post("/insert",(req,res)=>{
    ashokIT.connect("mongodb+srv://admin:admin@cluster0.jgnmk.mongodb.net/02-rjs-8am?retryWrites=true&w=majority",(err,connection)=>{
        if(err) throw err;
        else{
           const db = connection.db("02-rjs-8am"); 
           db.collection("products").insertOne({"p_id":req.body.p_id,"p_name":req.body.p_name,"p_cost":req.body.p_cost},(err,result)=>{
                if(err) throw err;
                else{
                    res.send({"insert":"success"});
                }
           })
        }
    });
});


app.put("/update",(req,res)=>{
    ashokIT.connect(`mongodb+srv://admin:admin@cluster0.jgnmk.mongodb.net/02-rjs-8am?retryWrites=true&w=majority`,(err,connection)=>{
        if(err) throw err;
        else{
            const db = connection.db("02-rjs-8am");
            db.collection("products").updateOne({"p_id":req.body.p_id},{$set:{"p_name":req.body.p_name,"p_cost":req.body.p_cost}},(err,result)=>{
                if(err) throw err;
                else{
                    res.send({"update":"success"});
                }
            });
        }
    })
});

app.delete("/delete",(req,res)=>{
    ashokIT.connect(`mongodb+srv://admin:admin@cluster0.jgnmk.mongodb.net/02-rjs-8am?retryWrites=true&w=majority`,(err,connection)=>{
        if(err) throw err;
        else{
            const db = connection.db("02-rjs-8am");
            db.collection("products").deleteOne({"p_id":req.body.p_id},(err,result)=>{
                if(err) throw err;
                else{
                    res.send({"delete":"success"});
                }
            })
        }
    })
})











app.listen(8080,()=>{
    console.log("server listenig the port no.8080");
});
