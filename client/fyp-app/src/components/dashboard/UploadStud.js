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



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs() {
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
            image="https://media.istockphoto.com/id/1181407201/photo/budget-planning-spreadsheet-on-laptop-screen.jpg?b=1&s=612x612&w=0&k=20&c=w3AJjYZs_o_nOegp8JSivEge6JDnvZb-t4YJb9AgYbY="
            alt="Student Data"
          />
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <Button variant="outlined" onClick={handleClickOpen}>
                Student Excel
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
          Student Excel Data
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
          <a
            href="https://docs.google.com/spreadsheets/d/1aUpMwmx2r3l4PqJNTXBvN0Zv9P5SDlP3mFE6YX6zLJw/edit#gid=1446230824"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click to Open spreadsheet 》》》》》
          </a>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>

    </React.Fragment>
  );
}