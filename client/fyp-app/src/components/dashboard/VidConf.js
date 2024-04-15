import React from 'react';
import TH from '../../pages/teachers/TC/TH';
import AppFooter from '../../components/Footer';
import VideoConf from './VideoConf';


const ConfVid = () => {
  return (
    <div>
        <TH/> 
        <div>
            <VideoConf/>
           
        </div>
        <AppFooter/>
    </div>
  );
}

export default ConfVid;