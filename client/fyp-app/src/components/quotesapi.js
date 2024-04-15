import React, { useState, useEffect } from 'react';
import './quoteapi.css';
import {  CardContent, CardActionArea, Typography } from '@mui/material';

const QuotesApi = () => {
  const [quotes, setQuotes] = useState([]);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then(response => response.json())
      .then(data => {
        setQuotes(data);
      })
      .catch(error => {
        console.error('Error fetching quotes:', error);
      });
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentQuoteIndex(prevIndex => (prevIndex + 1) % quotes.length);
    }, 60000); // 5 minutes in milliseconds

    return () => clearInterval(intervalId);
  }, [quotes]);

  const currentQuote = quotes[currentQuoteIndex];

  return (
    <div className="quote-card">
    <h1 className='qwe'>Quotes</h1>
    {currentQuote && (
      <CardActionArea>
        <CardContent className="quote-content">
          <Typography variant="body1" gutterBottom>
            {currentQuote.text}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            - {currentQuote.author}
          </Typography>
        </CardContent>
      </CardActionArea>
    )}
  </div>
  );
};

export default QuotesApi;
