import React from 'react';
import StudentHeader from '../../components/Header';
import AppFooter from '../../components/Footer';
import CustomSlider from "../../components/custom.slider";
import images from "../../assets/images";
import { Card, CardMedia, CardActionArea } from '@mui/material';
import WeekPicker from '../../components/Calender';
import HomeHi from '../../components/HomeHi';

import QuotesApi from '../../components/quotesapi';


const ContentWise = () => {
  return (
    <div>
      <StudentHeader />
      {/* <h1 style={{ textAlign: 'center' }}>Hi! Learner</h1> */}
      <HomeHi />
      <div className="welcome-page">

        <div>
          <Card sx={{ marginBottom: '16px', position: 'relative' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image="https://images.pexels.com/photos/247823/pexels-photo-247823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Description of the image"
                style={{ width: '1220px', height: 'auto', margin: '20px', borderRadius: '10px' }}
              />
              <div style={{
                position: 'absolute',
                top: '50%', left: '50%', transform: 'translate(-50%, 0%)'
              }}>
                <QuotesApi />
              </div>
            </CardActionArea>
          </Card>
        </div>
        {/* <AppSlide/> */}
        <div className="App">
          <CustomSlider>
            {images.map((image, index) => {
              return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
            })}
          </CustomSlider>
        </div>
        <WeekPicker />
      </div>
      <AppFooter />
    </div>
  );
}

export default ContentWise;