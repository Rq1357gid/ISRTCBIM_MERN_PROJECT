import React from 'react';
import StudentHeader from '../../Header';
import AppFooter from '../../Footer';
import Slnotes from './Slnotes';


const Snotes = () => {
    return (
        <div>
            <StudentHeader />
            <div>
                <Slnotes />

            </div>
            <AppFooter />
        </div>
    );
}

export default Snotes;