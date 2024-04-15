import React from 'react';
import TH from '../../pages/teachers/TC/TH';
import AppFooter from '../../components/Footer';
import ImageUpload from './ImageF';


const ImageFile = () => {
  return (
    <div>
        <TH/> 
        <div>
            <ImageUpload/>
           
        </div>
        <AppFooter/>
    </div>
  );
}

export default ImageFile;