import React from 'react';
import Typewriter from './TypeWriter';
import './Twr.css'

const TypewriterDemo = () => {
  return (
    <div className="twr">
      <div className="typewriter-wr">
        <Typewriter text="YOU ARE THE BEST TEACHER !" />
      </div>
    </div>
  );
};

export default TypewriterDemo;
