import './TH.css';
import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import VideoCallRoundedIcon from '@mui/icons-material/VideoCallRounded';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import CloudSyncRoundedIcon from '@mui/icons-material/CloudSyncRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import LocalLibraryRoundedIcon from '@mui/icons-material/LocalLibraryRounded';
import HomeIcon from '@mui/icons-material/Home';
import LogOut from '../../../components/LogOut';
import Popover from '@mui/material/Popover';

import { jwtDecode } from 'jwt-decode'; // Correct import statement


export default function TH() {

    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [email, setEmail] = React.useState('');

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        
        const token = localStorage.getItem('token');

        if (token) {
            try {
            
                const decodedToken = jwtDecode(token);
                const { email } = decodedToken;
                setEmail(email);

                
                //alert(`Email: ${email}`);
            
            } catch (error) {
                console.error('Error decoding token:', error);
                alert('Error decoding token');
            }
        } else {
            alert('Token not found in localStorage');
        }
    }


    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>

                <ListItem Button component={Link} to="/TeacherDashboard">
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Teacher Dashboard" />
                </ListItem>
                <ListItem Button component={Link} to="/StudentL">
                    <ListItemIcon>
                        <GroupsRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Student List" />
                </ListItem>


                <ListItem Button component={Link} to="/LatebloomL">
                    <ListItemIcon>
                        <LocalLibraryRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Latebloomers List" />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem Button component={Link} to="/UploadData">
                    <ListItemIcon>
                        <CloudSyncRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Upload Data" />
                </ListItem>
                <ListItem Button component={Link} to="/MessageTea">
                    <ListItemIcon>
                        <MessageRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Message" />
                </ListItem>
                <ListItem Button component={Link} to="/ConfVid">
                    <ListItemIcon>
                        <VideoCallRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Video Call" />
                </ListItem>

                <LogOut />

            </List>
        </Box>
    );

    return (
        <AppBar position="static" sx={{ backgroundColor: 'rgb(5, 5, 65)', borderRadius: '0 0 5px 5px' }}>
            <Toolbar>
                <IconButton
                    onClick={toggleDrawer(true)}
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Drawer open={open} onClose={toggleDrawer(false)}>
                    {DrawerList}
                </Drawer>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1 }}
                >
                    LET'S LEARN
                </Typography>
                <AccountBoxRoundedIcon style={{ fontSize: '3em' }} className="account-icon" onClick={handleClick} />
                <Popover
                    open={Boolean(anchorEl)}
                    anchorEl={anchorEl}
                    onClose={() => setAnchorEl(null)}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <Box sx={{ p: 2 }}>
                        <Typography>User: {email}</Typography>
                    </Box>
                </Popover>
            </Toolbar>
        </AppBar>
    );
}

