import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function UF() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setOpen(false);
    // Here you can perform the necessary action based on the selected option
    // For example, you can open a file upload dialog specific to the selected option
    // or perform any other action.
    switch (option) {
      case 'Upload Image':
        navigate('/ImageFile');
        break;
      case 'Upload PDF':
        navigate('/PdfFile');
        break;
      case 'Upload Video Link':
        navigate('/VideoLink');
        break;
      default:
        break;
    }
  };

  return (
    <>
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
                  Upload Files
                </Button>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
      <BootstrapDialog onClose={handleClose} open={open}>
        <DialogTitle>Choose Upload Option</DialogTitle>
        <DialogContent>
          <Button onClick={() => handleOptionClick('Upload Image')}>Upload Image</Button>
          <Button onClick={() => handleOptionClick('Upload PDF')}>Upload PDF</Button>
          <Button onClick={() => handleOptionClick('Upload Video Link')}>Upload Video Link</Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
}
