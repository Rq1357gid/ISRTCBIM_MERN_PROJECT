import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

const columns = [
  { field: 'roll_number', headerName: 'Roll Number', width: 150 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'email', headerName: 'Email', width: 200 },
  { 
    field: 'subjects', 
    headerName: 'Subjects', 
    width: 700, 
    valueGetter: (params) => {
      return params.row.subjects.map(subject => `${subject.name}: ${subject.score}`).join(', ');
    }
  },
];


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function LatebloomersList() {
  const [open, setOpen] = useState(false);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');

        const response = await axios.get('http://localhost:5000/api/v1/users/students/latebloomersapp',{
          headers: {
            'Authorization': `Bearer ${token}`, // Include the JWT token in the Authorization header
            'Content-Type': 'application/json', // Example of adding other headers if needed
          },
        });
        const studentsWithId = response.data.map(student => ({ ...student, id: student._id }));
        setStudents(studentsWithId);
      } catch (error) {
        console.error('Error fetching student data:', error);
      }
    };

    fetchData();
  }, []);

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
              image="https://images.pexels.com/photos/6935990/pexels-photo-6935990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Student Data"
            />
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <Button variant="outlined" onClick={handleClickOpen}>
                  Latebloomers List
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
          Latebloomers
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
          <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={students}
              columns={columns}
              pageSize={5}
              checkboxSelection
              disableRowSelectionOnClick
            />
          </Box>
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
