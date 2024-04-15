const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const userRouter = require('./src/users/user_routes');
const studentRouter = require('./src/students/student_routes');
const uploadRouter = require('./src/uploadapi/upload_routes');
const cors = require('cors');
app.use(express.json());
const jwt = require('jsonwebtoken')
//const {userLogger} = require('./winston');


mongoose.connect(process.env.MONGO_URL).then((res) => {
  console.log("DB Connected");
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  }
  );
}
);


function authendicateToken(req, res, next){

  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if(token == null) return res.sendStatus(401)
  
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if(err) return res.sendStatus(403)
      req.user = user
  next()
  })

}


app.use(cors({
  origin: 'http://localhost:3000'
}));



app.get('/server_status', (req, res) => {
  res.send("<h1>SERVER UP ︽</h1>")
})



app.use('/api/v1/users', userRouter);
app.use('/api/v1/users/students',authendicateToken, studentRouter);
app.use('/api/v1/users',authendicateToken, uploadRouter);
