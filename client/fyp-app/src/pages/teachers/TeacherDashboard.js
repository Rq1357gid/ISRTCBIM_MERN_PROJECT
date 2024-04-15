import React from 'react';
import TH from './TC/TH';
import AppFooter from '../../components/Footer';
import RowOfAnimatedCards from '../../components/card/Rowc'
import Twr from '../../components/TypeW/Twr';
import { DataBoard } from '../../components/lottiefile';


const TeacherDashboard = () => {
  return (
    <div>
      <TH />
      <div>
        <Twr />
        <RowOfAnimatedCards />
        <DataBoard />

      </div>
      <AppFooter />
    </div>
  );
}

export default TeacherDashboard;