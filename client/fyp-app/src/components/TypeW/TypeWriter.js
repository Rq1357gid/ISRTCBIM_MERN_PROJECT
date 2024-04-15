import React, { useState, useEffect } from 'react';

const Typewriter = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [forward, setForward] = useState(true);
  const typingSpeed = 300; // milliseconds
  const erasingSpeed = 100; // milliseconds
  const cursorBlinkInterval = 500; // milliseconds

  useEffect(() => {
    const interval = setInterval(() => {
      if (forward) {
        setDisplayText((prevText) => {
          if (prevText.length === text.length) {
            setForward(false);
            return prevText;
          }
          return text.substring(0, prevText.length + 1);
        });
      } else {
        setDisplayText((prevText) => {
          if (prevText.length === 0) {
            setForward(true);
            return prevText;
          }
          return prevText.substring(0, prevText.length - 1);
        });
      }
    }, forward ? typingSpeed : erasingSpeed);

    return () => clearInterval(interval);
  }, [text, forward]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prevShowCursor) => !prevShowCursor);
    }, cursorBlinkInterval);

    return () => clearInterval(cursorInterval);
  }, []);

  return <span>{displayText}{showCursor && '❒'}</span>;
};

export default Typewriter;
