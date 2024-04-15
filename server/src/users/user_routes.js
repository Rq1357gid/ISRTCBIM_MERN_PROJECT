const express   = require('express');
const userRouters=express.Router();
const userControllers=require('./user_controller')

userRouters.post("/login",userControllers.login);
//userRouters.delete("/logout", userControllers.delete);


module.exports=userRouters;