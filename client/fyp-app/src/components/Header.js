// import * as React from "react";

// import '../styles/Header.css'
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// //import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// //import Avatar from '@mui/material/Avatar';
// import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';


// export default function Header() {
// 	return (
// 		<AppBar position="static" sx={{backgroundColor:'rgb(5, 5, 65)', borderRadius:'0 0 5px 5px'}}>
// 			<Toolbar>

// 				<IconButton
// 					size="large"
// 					edge="start"
// 					color="inherit"
// 					aria-label="menu"
// 					sx={{ mr: 2 }}
// 				>

// 					<MenuIcon />
// 				</IconButton>


// 				<Typography
// 					variant="h6"
// 					component="div"
// 					sx={{ flexGrow: 1 }}
// 				>
// 					LET'S LEARN
// 				</Typography>
// 				<AccountBoxRoundedIcon style={{fontSize:'3em'}} className="account-icon"/>
// 				{/* <Avatar src="/broken-image.jpg" /> */}
// 				{/* <Button color="inherit">Login</Button> */}
// 			</Toolbar>
// 		</AppBar>
// 	);
// }





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
//import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import NotesIcon from '@mui/icons-material/Notes';
import LanguageIcon from '@mui/icons-material/Language';
import { jwtDecode } from 'jwt-decode'; // Correct import statement
import Popover from '@mui/material/Popover';
import LogOut from './LogOut';


export default function StudentHeader() {
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

                <ListItem Button component={Link} to="/ContentWise">
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Student Home" />
                </ListItem>


                <ListItem Button component={Link} to="/Snotes">
                    <ListItemIcon>
                        <NotesIcon />
                    </ListItemIcon>
                    <ListItemText primary="Notes" />
                </ListItem>


                {/* {['Students', 'Latebloomers'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <GroupsRoundedIcon /> : <LocalLibraryRoundedIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))} */}
            </List>
            <Divider />
            <List>
                <ListItem Button component={Link} to="/MarkS">
                    <ListItemIcon>
                        <ListAltIcon />
                    </ListItemIcon>
                    <ListItemText primary="Mark Statement" />
                </ListItem>
                <ListItem Button component={Link} to="/StudentT">
                    <ListItemIcon>
                        <QuestionAnswerIcon />
                    </ListItemIcon>
                    <ListItemText primary="Ask & Learn" />
                </ListItem>
                <ListItem Button component={Link} to="/TechApi">
                    <ListItemIcon>
                        <LanguageIcon />
                    </ListItemIcon>
                    <ListItemText primary="Tech News" />
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
