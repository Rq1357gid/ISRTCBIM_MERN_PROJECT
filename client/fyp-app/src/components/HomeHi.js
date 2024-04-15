// import * as React from 'react';
// import { experimentalStyled as styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import {HomeA} from './lottiefile'


// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
//   display: 'flex', 
//   alignItems: 'center',
//   //flexDirection: 'column', // Stack elements vertically
//   //justifyContent: 'center', 
// }));


// export default function HomeHi() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 1, md: 1 }}>
//         {Array.from(Array(1)).map((_, index) => (
//           <Grid item sm={1} md={1} key={index}>
//             <Item> <span><h1>Hi! Learner</h1></span><HomeA/></Item>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// }


import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { HomeA } from './lottiefile';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.mode === 'dark' ? theme.palette.common.white : theme.palette.text.primary, // Set text color based on theme mode
    position: 'relative', // Enable positioning
}));

const TextOverlay = styled('div')({
  position: 'absolute', // Absolute positioning
  top: '50%', // Center vertically
  left: '50%', // Center horizontally
  transform: 'translate(-50%, -50%)', // Center the element
  zIndex: 1, // Place above other content
});

export default function HomeHi() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 1, md: 1 }}>
        {Array.from(Array(1)).map((_, index) => (
          <Grid item sm={1} md={1} key={index}>
            <Item>
              <HomeA/>
              <TextOverlay>
                <h1>Hi! Learner</h1>
              </TextOverlay>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
