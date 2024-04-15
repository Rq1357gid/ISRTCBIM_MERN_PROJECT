import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Log from './components/LoginPage';
import './App.css';
import ContentWise from './pages/students/ContentWise';
import TeacherDashboard from './pages/teachers/TeacherDashboard';
import UploadData from './components/dashboard/UploadData';
import ConfVid from './components/dashboard/VidConf';
import StudentL from './components/dashboard/StudentL';
import MessageTea from './components/dashboard/MessageTea';
import TechApi from './components/api/Techapi';
import StudentT from './pages/students/ConnectMentor';
import LatebloomL from './components/dashboard/LatebloomL';
import UploadF from './components/dashboard/UploadF';
import MarkS from './pages/students/MarkS';
import ImageFile from './components/fileupload/ImageFile';
import PdfFile from './components/fileupload/PdfFile';
import VideoLink from './components/fileupload/VideoLink';
import Snotes from './components/dashboard/getnotes/Gnotes';
//import ProtectedRoute from './ProtectedRoute';
import AuthService from './AuthService';

function App() {
 // console.log(AuthService.isAuthenticated, "_______")
  return (

    <Router>
      <Routes>

        <Route path="/" exact element={<Log />} />
        {/* <Route path="/ContentWise" element={<ContentWise />} /> */}

        {AuthService.isAuthenticated ? (

          <>
            <Route path="/ContentWise" element={<ContentWise />} />
            <Route path="/TeacherDashboard" element={<TeacherDashboard />} />
            <Route path="/UploadData" element={<UploadData />} />
            <Route path="/ConfVid" element={<ConfVid />} />
            <Route path="/StudentL" element={<StudentL />} />
            <Route path="/LatebloomL" element={<LatebloomL />} />
            <Route path="/MessageTea" element={<MessageTea />} />
            <Route path="/TechApi" element={<TechApi />} />
            <Route path="/StudentT" element={<StudentT />} />
            <Route path="/UploadF" element={<UploadF />} />
            <Route path="/MarkS" element={<MarkS />} />
            <Route path="/ImageFile" element={<ImageFile />} />
            <Route path="/PdfFile" element={<PdfFile />} />
            <Route path="/VideoLink" element={<VideoLink />} />
            <Route path="/Snotes" element={<Snotes />} />
          </>


        ) : <React.Fragment>
          <Route path="*" element={<Navigate to={'/'} />} />

        </React.Fragment>}
      </Routes>
    </Router>
  );
}

export default App;