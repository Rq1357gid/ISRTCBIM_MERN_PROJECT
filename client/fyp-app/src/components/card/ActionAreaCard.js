import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://images.pexels.com/photos/11034131/pexels-photo-11034131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          LINUX
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Linux is an open-source operating system kernel originally developed by Linus Torvalds in 1991. It's the backbone of a wide range of operating systems known as Linux distributions (or distros), such as Ubuntu, Debian, Fedora, and CentOS, among others. Here are some key points about 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

