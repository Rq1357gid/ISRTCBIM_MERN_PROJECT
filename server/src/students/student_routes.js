const express   = require('express');
const studentRouters=express.Router();
const studentControllers=require('./student_controller');


studentRouters.get("/all",studentControllers.studentData);
studentRouters.get("/byemail",studentControllers.findbyemail);
studentRouters.get("/latebloomersapp",studentControllers.latebloomersapp);
studentRouters.get("/latebloomers/practicals", studentControllers.latebloomersp);
studentRouters.get("/latebloomers/contentws", studentControllers.latebloomersc);
studentRouters.get("/latebloomers/non_working", studentControllers.latebloomersn);
studentRouters.get("/excel",studentControllers.studentExcel);




module.exports = studentRouters;