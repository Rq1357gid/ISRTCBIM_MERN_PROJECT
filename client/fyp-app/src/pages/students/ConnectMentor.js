import React from 'react';
import StudentHeader from '../../components/Header';
import AppFooter from '../../components/Footer';
import VideoConf from '../../components/dashboard/VideoConf';
import MessageTeacher from '../../components/dashboard/MessageTeacher';


const StudentT = () => {
  return (
    <div>
        <StudentHeader/> 
        <div>
        <MessageTeacher/>

            <VideoConf/>
           
        </div>
        <AppFooter/>
    </div>
  );
}

export default StudentT;