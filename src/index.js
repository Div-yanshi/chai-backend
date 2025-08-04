//require('dotenv').config({path: './env'})
import dotenv from 'dotenv'
import path from 'path';
import connectDB from "./db/index.js";


dotenv.config({
    path: path.resolve(process.cwd(), '.env')
});


console.log("MONGODB_URI:", process.env.MONGODB_URI);

connectDB();


















/*

import express from "express"
const app=express()


(async() => {
    try{
       await mongoose.connect(`${process.env.MONGODB_URI}`)
       app.on("error", ()=>{
        console.log("ERR:",error);
        throw error
       })
       app.listen(process.env.PORT, () => {
        console.log(`App is listening on port ${process.env.PORT}`);
       })
    }
    catch(error){
        console.error("ERROR: ",error)
        throw error
    }
})()
    */