const express = require("express");
const router=express.Router();

const{login,signUp}=require("../controllers/Auth");
router.get("/login",login);
router.post("/signup",signUp);
module.exports=router;



