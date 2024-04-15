import React from 'react';
import TH from '../../pages/teachers/TC/TH';
import AppFooter from '../../components/Footer';
import VideoLinkUpload from './VideoL';


const VideoLink = () => {
  return (
    <div>
        <TH/> 
        <div>
            <VideoLinkUpload/>
           
        </div>
        <AppFooter/>
    </div>
  );
}

export default VideoLink;