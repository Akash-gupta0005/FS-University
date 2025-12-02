require('dotenv').config()
const express=require('express');
const cors=require('cors');
const router=require('./Routes/router');
const app=express();
const port=process.env.PORT||3002;
require('./db/connection');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(router);

app.get('/',(req,res)=>{
    res.send({
        activeStatus:true,
        error:false
    })
})


app.listen(port,()=>{
    console.log(`server listening to the port no. ${port}`);
})