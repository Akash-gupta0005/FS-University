require('dotenv').config;
const express=require('express');
const cors=require('cors');
const app=express();
const port=8002;
require('./db/connection')

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Server started");
})

app.listen(port,()=>{
    console.log(`server listening to the port no. ${port}`);
})