import React from 'react';
import TH from '../../pages/teachers/TC/TH';
import AppFooter from '../../components/Footer';
import MessageTeacher from './MessageTeacher';


const MessageTea = () => {
  return (
    <div>
        <TH/> 
        <div>
            <MessageTeacher/>
           
        </div>
        <AppFooter/>
    </div>
  );
}

export default MessageTea;