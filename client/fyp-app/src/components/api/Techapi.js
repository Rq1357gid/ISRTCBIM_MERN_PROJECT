import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Link, Grid, CardActionArea, CardMedia } from '@mui/material';
import '../../App.css';
import StudentHeader from '../../components/Header';
import AppFooter from '../../components/Footer';

function TechApi() {
  const [topStories, setTopStories] = useState([]);

  useEffect(() => {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(response => response.json())
      .then(data => {
        const topTenStories = data.slice(0, 10);
        Promise.all(topTenStories.map(storyId =>
          fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
            .then(response => response.json())
        ))
        .then(stories => {
          setTopStories(stories);
        })
        .catch(error => {
          console.error('Error fetching top stories:', error);
        });
      })
      .catch(error => {
        console.error('Error fetching top story IDs:', error);
      });
  }, []);

  return (
    <div className="container">
      <StudentHeader/>
      <h1>Tech Top Stories</h1>
      <Grid container spacing={3}>
        {topStories.map(story => (
          <Grid item key={story.id} xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Placeholder image URL
                  alt="Hacker News"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <Link href={story.url} target="_blank" rel="noopener noreferrer">{story.title}</Link>
                  </Typography>
                  <Typography color="textSecondary">
                    {story.descendants} comments
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      <AppFooter/>
    </div>
  );
}

export default TechApi;
