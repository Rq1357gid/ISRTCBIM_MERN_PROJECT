// LogoutButton.js
import React from 'react';
import ListItem from '@mui/material/ListItem';
//import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';

import { useNavigate } from 'react-router-dom';

const LogOut = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the JWT token from local storage (or session storage, or cookies)
    localStorage.removeItem('token');

    // Redirect the user to the login page (or any other desired page)
    navigate('/login');
  };

  return (
    <ListItem button component={Link} to="/" onClick={handleLogout}>
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary="Log Out" />
    </ListItem>
  );
};

export default LogOut;
