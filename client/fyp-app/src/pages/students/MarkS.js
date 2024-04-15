import React from 'react';
import StudentHeader from '../../components/Header';
import AppFooter from '../../components/Footer';
import MarkStatement from './MarkStatement'

const MarkS = () => {
    return (
        <div>
            <StudentHeader />
            <div>
                <MarkStatement />
            </div>
            <AppFooter />
        </div>
    );
}

export default MarkS;