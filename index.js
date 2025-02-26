const express = require("express");
const app=express();
const user = require('./routes/user');
require('dotenv').config();
const dbConnect=require("./config/db");
dbConnect();
const PORT=process.env.PORT;
app.use(express.json());
app.use("/api/v1",user);
app.listen(PORT,()=>{
    console.log(`server running at ${PORT}`);
})