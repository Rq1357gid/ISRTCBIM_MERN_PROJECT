const bcrypt = require('bcrypt');
const Student = require('../students/student_schema');
const Teacher = require('../teachers/teacher_schema');
const jwt = require('jsonwebtoken');




const login = async (req, res) => {
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
        res.status(400).send({ message: "Enter all Credientials" })
    }
    else {

        if (role == "Student") {
            const student = await Student.findOne({ email: email })
            if (student) {
               const login= await ispassword(password, student.password);
               if(login){
                var data = { "name": student.name, "email": student.email }
        let token = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30m' })
        res.status(200).send({ message: "Login Successfully", token: token })
               }
               else{
                res.status(400).send({ message: "Password Incorrect" })
               }
            }else{
                res.status(400).send({ message: "Student does not exist" })
            }
        }
        else if (role == "Teacher") {
            const teacher = await Teacher.findOne({ email: email })
            if (teacher) {
               const login=await ispassword(password, teacher.password);
                if(login){
                    var data = { "name": teacher.name, "email": teacher.email }
            let token = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30m' })
            res.status(200).send({ message: "Login Successfully", token: token })
                   }
                   else{
                    res.status(400).send({ message: "Password Incorrect" })
                   }
            }else{
                res.status(400).send({ message: "Teacher does not exist" })
            }
        }
        else{
            res.status(400).send({ message: "Invalid Role" })
        }
    }
}

const ispassword = async (user_password, db_password) => {
    const ispassword = await bcrypt.compare(user_password, db_password);
    if (ispassword) {
        return true;
    }
    else {
        return false;
    }
}
module.exports = { login }