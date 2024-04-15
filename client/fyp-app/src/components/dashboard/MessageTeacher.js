import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
//import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
//import VideoConference from './../videoconference/views/VidConf';



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function MessageTeacher() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>

<Box sx={{ backgroundColor: 'white', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: 20, height: 300 }}>
      <Card sx={{ maxWidth: 345, display: 'flex', mt: 20, ml: 55, mb: 30 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://images.pexels.com/photos/6192119/pexels-photo-6192119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Student Data"
          />
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <Button variant="outlined" onClick={handleClickOpen}>
                Messanger
              </Button>
            </Box>

          </CardContent>
        </CardActionArea>
      </Card>
      </Box>


      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Message
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
        <div>
      {/* <h1>External Page</h1> */}

      {/* <iframe
        title="External Page"
        src="file:///Q:/w%20message%20app/Realtime-Simple-Chat-App/index.html"
        style={{ width: '100%', height: '500px', border: 'none' }}
      /> */}
    </div>
          {/* <a
            href="http://localhost:3008/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Message 》 》 》 》  》
          </a> */}
          <button onClick={() => window.open('http://localhost:3008/index.html', '_blank')} >
  MESSAGE 》 》 》 》  》
</button>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}