import React from 'react';
import TH from '../../pages/teachers/TC/TH';
import AppFooter from '../../components/Footer';
import CustomizedDialogs from './UploadStud';
import UF from './UploadFiles';


const UploadData = () => {
  return (
    <div>
        <TH/> 
        <div>
            <CustomizedDialogs/>
            <UF/>
           
        </div>
        <AppFooter/>
    </div>
  );
}

export default UploadData;