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


    //LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("user not found");

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    !validPassword && res.status(400).json("wrong password")

    res.status(200).json(user)
  } catch (err) {
    res.status(500).json(err)
  }
});
 
});


export {router as userRouter}
