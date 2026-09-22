const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User.js");


const registerUser= async(req,res)=>{
    try{
        const{
            name,
            email,
            password,
            
        }=req.body

        if(!name||!email||!password){
            return res.status(200).json({
                success: false,
                message:"Name,email and password are required"
            })
        }

        const existingUser = await User.findOne({
            email
        });

        if(existingUser){
            return res.status(400).json({
                success: false,
                message:" User already registered"
            })
        }

        const hashedPasword = await bcrypt.hash(
            password,
            10

        )
        const user = await User.create({
            name,
            email,
            password: hashedPasword,
            role :"operation"
        })

        res.status(201).json({
            success: true,
            message:"User registerd",
            user:{
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        })
    }catch(error){
        res.status(500).json({
            success: false,
            message:"Failed to register User",
            error: error.message
        })
    }
}

const loginUser = async(req,res)=>{
    try{
        const {
        email,
        password
        }=req.body

        if(!email||!password){
            return res.status(400).json({
                success: false,
                message: "Email and Password are required"
            })
        }
        const user =await User.findOne({
            email
        });

        if(!user){
            return res.status(400).json({
                success: false,
                message: " Invalid email or password"
            })
        }

        const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
        )

        if(!isPasswordCorrect){
            return res.status(401).json({
                success: false,
                message:"Invalid email or password"
            })
        }

        const token = jwt.sign(
            {
                id: user._id,
                role: user.role
            },

            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        )

        res.status(200).json({
            success: true,
            message: "Login successfully",
            token,
            user:{
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            
        }
        });


    }catch(error){
        return res.status(500).json({
            success: false,
            message: "Failed to login user",
            error: error.message
        })
    }
    
}

module.exports= {
    registerUser,
    loginUser
}
