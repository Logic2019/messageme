const router = require("express").Router();
const User = require("../module/User");
const bcrypt = require("bcrypt");
import  express,{Request, Response}  from "express";

//REGISTER
router.get("/register", async (req:Request, res:Response) => {

    //create new user
    const user = await new User({
      username: "joe",
      email: "joe@gmail.com",
      password: "112233"
    });

    //save user and respond
   await user.save();
    res.send("ok");
 
});


export {router as userRouter}
