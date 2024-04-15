import React from 'react';
import TH from '../../pages/teachers/TC/TH';
import AppFooter from '../../components/Footer';
import PdfUpload from './PdfF';


const PdfFile = () => {
  return (
    <div>
        <TH/> 
        <div>
            
           <PdfUpload/>
        </div>
        <AppFooter/>
    </div>
  );
}

export default PdfFile;