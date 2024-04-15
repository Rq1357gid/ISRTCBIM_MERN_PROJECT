import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CardT() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            MACHINE LEARNING
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Machine learning is a field of artificial intelligence that focuses on developing algorithms and models that enable computers to learn from data, make predictions or decisions without explicitly programmed Powerful tool that continues drive innovation, solve complex problems across industries.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

