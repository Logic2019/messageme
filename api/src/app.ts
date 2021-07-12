import express from 'express';
import { router } from './routes/user';
import helmet = require('helmet');
import dotenv = require("dotenv");

const app = express();;
const mongoose = require("mongoose");
const morgan = require("morgan");

 dotenv.config();
                                                                                                                                     
 mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true},()=>{
   console.log("Connected correctly to MongoDB")
 });

 
app.use(express.json());
app.use(express.json)
app.use(express.urlencoded({extended: false}));
app.use(helmet());
app.use(morgan("common"));


app.get("/" , (req , res)=>{
  res.send('Welcome Home ')
})


app.listen(3000,() => {
 
  return console.log("server is listening");
});