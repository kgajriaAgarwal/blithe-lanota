import { AppBar, styled, Toolbar, Typography , InputBase, Badge ,Tab, Tabs, Avatar, Tooltip, Divider,Menu,  MenuItem, IconButton} from '@mui/material';
import React, {useState} from 'react';
import blithelogo from '../../../Assets/logo/logo-gray.jpg'
import './NavBar.css';
import { TiSocialLinkedinCircular } from "react-icons/ti";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import { Box, fontSize } from '@mui/system';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import PublicIcon from '@mui/icons-material/Public';
import { Link } from 'react-router-dom';
import { getLocalStorage } from '../../../Helpers/Common/Utils';


export const NavBar = (props) =>  {

        const [open, setOpen] = useState(false);
        let authData = getLocalStorage('authData');

        // const [anchorEl, setAnchorEl] = React.useState(null);
        // const open = Boolean(anchorEl);
        // const handleClick = (event) => {
        // setAnchorEl(event.currentTarget);
        // };
        // const handleClose = () => {
        // setAnchorEl(null);
        // };


        const StyledToolbar = styled(Toolbar)({
            display: 'flex',
            justifyContent:'space-between'
        })

        const Search = styled("div")(({theme}) =>({
            backgroundColor:  theme.palette.text.tertiary,
            padding:"0 10px",
            borderRadius:theme.shape.borderRadius,
            width: '40%',
        }))

        const SearchInput = styled(InputBase)(({theme}) =>({
            color: theme.palette.primary.main,
            cursor: 'pointer'
        }))

        const Icons = styled(Box)(({theme}) =>({
            display:'flex',
            alignItems:'center',
            color: theme.palette.text.primary,
            [theme.breakpoints.down("sm")]:{
                display: 'none'
            }
        }))

        const CustomTab = styled(Tab)(({theme}) => ({
            color: theme.palette.mode === "light" ? theme.palette.text.tertiary : theme.palette.text.primary,
        }))

        const UserBox = styled(Box)(({theme}) =>({
            display:'flex',
            alignItems:'center',
            color: theme.palette.text.primary,
            gap:'10px',
            [theme.breakpoints.up("sm")]:{
                display: 'none'
            }
        }))

        const CustomMenuItem = styled(MenuItem)(({theme}) =>({
            color:  theme.palette.text.primary,
        }))


    return (
        <AppBar position='sticky' bgcolor={"#A14F57"}>
            <StyledToolbar>
            
                <Typography variant='h6' >
                    Blithe-la nota
                </Typography>
                <Search>
                    <SearchInput placeholder='Search..' />
                </Search>
                <Icons>

                    <Tabs 
                        className='tab'
                        indicatorColor="secondary"
                        value={'/'} 
                        aria-label="icon label tabs example"
                        selectionFollowsFocus
                        // value={value}
                        //onChange={handleChange}
                        variant="fullWidth"
                        textColor="secondary"
                        color='white'
                        >
                        
                
                        <CustomTab icon={<Badge badgeContent={4} color="error" >
                            <Tooltip title="Home" color='white'>
                                <HomeIcon />
                            </Tooltip>
                        </Badge>} 
                        // label="Home" 
                        value="/"
                        />

                        <CustomTab icon={
                            <Tooltip title="My Profile">
                                <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" sx={{ width: '2rem', height: '2rem' }}
                                    onClick={e=> setOpen(true)}
                                />
                            </Tooltip>    
                            } 
                            // label="
                            // Me" 
                            value="/myprofile" 
                            />
                    </Tabs>
                </Icons>
                <UserBox  onClick={e=> setOpen(true)}>
                    <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" sx={{ width: '2rem', height: '2rem' }} />
                    <Typography variant='span'>John</Typography>
                </UserBox>
            </StyledToolbar>
            
            <Menu
                // anchorEl={anchorEl}
                id="menu"
                open={open}
                onClose={e=> setOpen(false)}
                onClick={e=> setOpen(false)}
                className='menu'
                PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                    },
                    '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    color: 'red',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                    },
                },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            >
                <Link to="/profile">
                    <CustomMenuItem>
                        <Avatar /> Profile
                    </CustomMenuItem>
                </Link>
                <Link to="/mockman">
                    <CustomMenuItem>
                        Mockman
                    </CustomMenuItem>
                </Link>
                <CustomMenuItem>
                    <Avatar /> My account
                </CustomMenuItem>
                <Divider />
                <CustomMenuItem>
                    <ListItemIcon>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                </CustomMenuItem>
                <CustomMenuItem>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </CustomMenuItem>
                <Link to="./login">
                    <CustomMenuItem>
                        <ListItemIcon>
                            <Logout fontSize="small" />    
                        </ListItemIcon>
                        {authData? "Logout" : "Login"}
                    </CustomMenuItem>
                </Link>
            </Menu>
        </AppBar>
    );
}

