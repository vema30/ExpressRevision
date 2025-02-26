const user = require("../models/user");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const login = async(req,res)=>{
       try{
              const{email,password}=req.body;
              const User = await user.findOne({email});
              
             if(await bcrypt.compare(password, User.password)){
                 return res.status(200).json({
                    message:"login success"
                 })
             }
             else{

                return res.status(200).json({
                    message:"login failed "
                 })
             }

       }   
       catch(e){
        return res.status(500).json({
            message:"i am error",
            error:e
        })
       }
}

const signUp = async(req,res)=>{
    try{
        const {name,email,password,role}=req.body;
      
       const hassedpassword =  bcrypt.hashSync(password, saltRounds);
       const newUser=await user.create({
        name,email,password:hassedpassword,role
       })
         // newUser.password=hassedpassword;
       console.log(newUser);
        return res.status(201).json({
            message:"i am signuped",
            user:newUser
        })
    }
    catch(e){
        return res.status(500).json({
            message:"i am error",
            error:e
        })
    }
}
module.exports={
    login,signUp
}