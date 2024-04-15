import React from 'react';
import TH from '../../pages/teachers/TC/TH';
import AppFooter from '../../components/Footer';
import StudentList from './StudentList';


const StudentL = () => {
  return (
    <div>
        <TH/> 
        <div>
            <StudentList />
           
        </div>
        <AppFooter/>
    </div>
  );
}

export default StudentL;