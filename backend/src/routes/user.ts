import express from "express"
import bcrypt from "bcrypt"
import {z} from "zod";
import { signInBody } from "../types/user.js";
import { signUpBody } from "../types/user.js";

const router = express.Router();

router.post("signup",(req,res)=>{

    
    try{
        const {success} = signUpBody.safeParse(req.body);
        if(!success){
            res.status(400).json("Incorrect Inputs");
        }
        
    }
    catch{
        
    }
})
export default router;