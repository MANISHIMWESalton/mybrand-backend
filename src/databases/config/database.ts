import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://joseph:Urwanda28@cluster0.tbuska2.mongodb.net/mybrand").then(()=>{
    console.log("Connected")
}).catch(err=>{
    console.log("Connectiong to database error: ", err)
})