import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js';
dotenv.config();
const app=express();
app.use(cors());
app.use(express.json({limit:'50mb'}));
app.use('/',async(req,res)=>{
    res.send('Hello From Pic Magic...!');
})
const startServer=async()=>{
    try{
        connectDB(process.env.MONGODB_URL);
        app.listen(8000,()=>console.log('Sever Running on port 8000'));
    }
    catch(error){
        console.log(error);
    }
 }
startServer();