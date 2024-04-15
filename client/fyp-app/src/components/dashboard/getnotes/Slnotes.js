// import React, { useEffect, useState } from 'react';
// import { experimentalStyled as styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// const fetchData = async (url) => {
//   const response = await fetch(url);
//   const data = await response.json();
//   return data;
// };

// const DynamicGrid = ({ endpoint }) => {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     const fetchItems = async () => {
//       const data = await fetchData(endpoint);
//       setItems(data);
//     };
//     fetchItems();
//   }, [endpoint]);

//   return (
//     <Grid container spacing={2}>
//       {items.map((item, index) => (
//         <Grid item xs={12} sm={6} md={4} key={index}>
//           <Item>{item.name}</Item>
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

// const Slnotes = () => {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <h2>Images</h2>
//       <DynamicGrid endpoint="http://localhost:5000/api/v1/users/images" />
//       <h2>PDFs</h2>
//       <DynamicGrid endpoint="http://localhost:5000/api/v1/users/getpdf" />
//       <h2>Video Links</h2>
//       <DynamicGrid endpoint="http://localhost:5000/api/v1/users/get_video_l" />
//     </Box>
//   );
// };

// export default Slnotes;




import React, { useEffect, useState } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { NotesA } from '../../lottiefile';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const fetchData = async (url) => {
  
 try {
  const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No token found');
    }
  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${token}`, // Include the JWT token in the Authorization header
      'Content-Type': 'application/json', // Example of adding other headers if needed
    },
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }
  return response.json();
 } catch (error) {

  console.log('Error uploading video link: ' + error.message);

  
 }
};

const DynamicGrid = ({ endpoint }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await fetchData(endpoint);
        setItems(data);
        console.log(data);
        setError(null);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchItems();
  }, [endpoint]);

  return (
    <Grid container spacing={2}>
      {error ? (
        <Grid item xs={12}>
          <Item>{error}</Item>
        </Grid>
      ) : (
        items && items.length > 0 ? (
          items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Item>
                <img src={item.imageUrl} alt={item.originalName} />
                <a href={item.path}>{item.name}</a>
                <a href={item.link}>{item.title}</a>
              </Item>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Item>No items found</Item>
          </Grid>
        )
      )}
    </Grid>
  );
};

const Slnotes = () => {
  return (
    <div>
    <Box sx={{ flexGrow: 1, border: '2px solid #000', padding: '16px', margin: '20px',p: 2,
    borderRadius: 2}}>
<div style={{ display: 'flex', justifyContent: 'center' }}>
      <Card sx={{ maxWidth: 750 }}>
        <CardActionArea>
          <CardMedia
          component="img"
          height="140"
          image="https://images.pexels.com/photos/8702211/pexels-photo-8702211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="green iguana"
        />

          <CardContent sx={{ maxWidth: 450 }}>
            <Typography gutterBottom variant="h5" component="div" sx={{ whiteSpace: 'nowrap', justifyContent: 'center' }}>
              Weekly Study Resources
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>      
      <h2>Images Notes</h2>
      <DynamicGrid endpoint="http://localhost:5000/api/v1/users/images" />
      <h2>PDF Notes</h2>
      <DynamicGrid endpoint="http://localhost:5000/api/v1/users/getpdf" />
      <h2>Video Notes Links</h2>
      <DynamicGrid endpoint="http://localhost:5000/api/v1/users/get_video_l" />
    </Box>
    <NotesA/>
    </div>
  );
};

export default Slnotes;