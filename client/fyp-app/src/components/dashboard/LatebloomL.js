import React from 'react';
import TH from '../../pages/teachers/TC/TH';
import AppFooter from '../../components/Footer';
import LatebloomersList from './LateboomList';


const LatebloomL= () => {
  return (
    <div>
        <TH/> 
        <div>
            <LatebloomersList />
           
        </div>
        <AppFooter/>
    </div>
  );
}

export default LatebloomL;