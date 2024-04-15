const mongoose = require('mongoose');
const bcrypt =require('bcrypt');
SALT_WORK_FACTOR = 10;
    

const studentSchema =  mongoose.Schema({
    role: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        minLength: 8,
        lowercase: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
    },
    roll_number: {
        type: Number,
        unique: true,
    },
    concentration_Inclass: Number,
    clearing_doubts: Number,
    answering_question: Number,
    subjects: [{
        name: String,
        score: Number
    }],
    average: Number,

});
// studentSchema.pre('save', async function(next){

//     const hashedPassword =  await bcrypt.hash(this.password, 5)
//     this.password = hashedPassword;

//     next();

    // const salt = await bcrypt.genSalt(10);
    // this.password = await bcrypt.hash(this.password,salt);
    // next();

//})

// studentSchema.pre('save', function(next) {
//     var user = this;
    
//     // only hash the password if it has been modified (or is new)
//     if (!user.isModified('password')) return next();
    
//     // generate a salt
//     bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
//         if (err) return next(err);
    
//         // hash the password along with our new salt
//         bcrypt.hash(user.password, salt, function(err, hash) {
//             if (err) return next(err);
    
//             // override the cleartext password with the hashed one
//             user.password = hash;
//             next();
//         });
//     });
// });
module.exports = mongoose.model("Student", studentSchema);