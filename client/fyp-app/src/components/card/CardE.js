import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CardE() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            DATA STRUCTURE
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Data structures are fundamental concepts in computer science that organize and store data in a specific format to facilitate efficient operations such as insertion, deletion, searching, and sorting. They are essential for representing and manipulating data in various applications and algorithms. 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

