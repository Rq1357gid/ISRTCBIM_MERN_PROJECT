const Student = require('./student_schema');
const { google } = require('googleapis');
const bcrypt = require('bcrypt');

const studentData = async (req,res)=>{

    try {

        const students = await Student.find()
        res.json(students)

    } catch (e) {
        console.log(e.message);
    }
    
}

const latebloomersapp = async (req,res)=>{

    try {

        const students = await Student.find({ average:{$lt: 50}})
        res.json(students)

    } catch (e) {
        console.log(e.message);
    }
    
}


const latebloomersp = async (req, res)=>{

    try{
        const students = await Student.find({ average:{ $gte: 35, $lt: 50} });
        res.send(students)
    } catch(e){
        console.log(e.message);
    }
}

const latebloomersc = async (req, res)=>{

    try{
        const students = await Student.find({ average:{ $gte: 20, $lt: 35} });
        res.send(students)
    } catch(e){
        console.log(e.message);
    }
}

const latebloomersn = async (req, res)=>{

    try{
        const students = await Student.find({ average:{ $gte: 0, $lt: 20} });
        res.send(students)
    } catch(e){
        console.log(e.message);
    }
}


const findbyemail = async (req, res) => {
    try {
        const { email } = req.body; // Assuming email is sent in the request body

        const student = await Student.findOne({ email });

        if (student) {
            res.status(200).json({ success: true, student });
        } else {
            res.status(404).json({ success: false, message: 'Student not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};



//........................................................................................................//



// Initializes the Google APIs client library and sets up the authentication using service account credentials.
const auth = new google.auth.GoogleAuth({
    keyFile: './credentials.json',  // Path to your service account key file.
    scopes: ['https://www.googleapis.com/auth/spreadsheets']  // Scope for Google Sheets API.
});

const studentExcel = async (req, res) => {
    await Student.deleteMany();

    try {
        const data = await readSheet();  // Reads data from the sheet.
        


        const subjects = data[0].slice(9, -1); // Extract subject names from the header row
        const studentlist=[];
    
        for (let i = 1; i < data.length; i++) { 
            const studentData = data[i];
            const hashedPassword = await bcrypt.hash(studentData[3], 10); 
            const studentSubjects = subjects.map((subject, index) => ({
                name: subject,
                score: parseFloat(studentData[index + 9])
            }));

            const average = parseFloat(studentData[studentData.length - 1]);
            const student = new Student({
                role: studentData[0],
                name: studentData[1],
                email: studentData[2],
                password: hashedPassword,
                year: parseInt(studentData[4]),
                roll_number: studentData[5],
                concentration_Inclass: studentData[6],
                clearing_doubts: studentData[7],
                answering_question: studentData[8],
                subjects: studentSubjects,
                average: average
            });
            studentlist.push(student);
            
        }
        await Student.insertMany(studentlist);
        res.status(200).send({ message: "Students Details saved to db" })
    } catch (e) {
        // 
        console.error(e);
        res.status(500).send({ error: "An error occurred while processing the data" });
    }
}


async function readSheet() {
    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = '1aUpMwmx2r3l4PqJNTXBvN0Zv9P5SDlP3mFE6YX6zLJw';
    const range = 'Students';  // Specifies the range to read.

    try {
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId, range
        });
        const rows = response.data.values;  // Extracts the rows from the response.
        return rows;  // Returns the rows.
    } catch (error) {
        console.error('error', error);  // Logs errors.
    }
}



module.exports = { studentData, latebloomersapp, findbyemail, latebloomersp, latebloomersc, latebloomersn, studentExcel}