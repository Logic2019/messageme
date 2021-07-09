import express, { Request , Response } from "express";
import { User } from "../module/User";




const router = express.Router();


router.post('/users', async(req:Request, res:Response)=>{
    const {username,email,password} =req.body;
        const item = User.set({username,email,password});

        await item.save();

        return res.status(200).json({
            data: item,
        });
});



export {router}