import {
    Box,
    Avatar,
    Typography,
    Grid,
    List,
    ListItem,
    Divider,
    Switch,
    ListItemText,
    ListItemIcon,
  } from "@mui/material";
  import React from "react";
  import { Link } from "react-router-dom";
  import "./SideBar.css";
  import { MdModeNight, MdLightMode } from "react-icons/md";
  import { useThemeMode } from "../../../Helpers/Context";
  import DescriptionIcon from '@mui/icons-material/Description';
  
  export const SideBar = (props) => {
    const {themeMode, setThemeMode} = useThemeMode();
  
  
    return (
      <Box
        bgcolor={"Background.default"}
        flex={1}
        p={2}
        sx={{ display: { xs: "none", sm: "block" }, color: "white" }}
        className="sidebar-conatiner"
      >
        <Box position="fixed" width="14%">
          <Box
            bgcolor={themeMode === "light" ? "#A14F57" : "Background.default"}
            className="sidebar-profile-box"
          >
            {/* <img
              src="https://media.istockphoto.com/photos/triangular-abstract-background-picture-id624878906?k=20&m=624878906&s=612x612&w=0&h=DKUXpuMTr4jPDageP1R-_0vuRCB2cn4Sn0GiUAESHwI="
              alt="cover-img"
              className="cover-img"
            /> */}
           
              <Box className="profile-img-box" >
                <Typography variant="h6" sx={{ color: "secondary" , paddingTop:' 60%'}} >
                    Blithe-la nota
                </Typography>
                <Avatar
                  alt="Remy Sharp"
                  src="https://c.tenor.com/xtFf2a8D2uMAAAAM/writing-notepad.gif"
                  // sx={{ width: "30%", height: "30%" }}
                  className="sidebar-avatar"
                />
                {/* <Typography variant="h6" sx={{ color: "secondary" , paddingTop:'40%'}} >
                  Hello, Dr.Remy Sharp
                </Typography>
                <Typography variant="body2" mb={2}>
                  Orthopedic surgeon
                </Typography> */}
                <Grid item xs={12} md={6} >
              {/* <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                Followed hashtags
              </Typography> */}
  
              <List dense={true}>
                <Link to="/" className="sidebar-link">
                  <ListItem>Notes</ListItem>
                    {/* <ListItemIcon>
                        <DescriptionIcon />
                    </ListItemIcon>
                    <ListItemText primary="Notes" /> */}
                </Link>
                <Link to="#" className="sidebar-link">
                  <ListItem>Labels</ListItem>
                </Link>
                <Link to="/user/archives" className="sidebar-link">
                  <ListItem>Archived</ListItem>
                </Link>
                <Link to="#" className="sidebar-link">
                  <ListItem>Trashed</ListItem>
                </Link>
              </List>
            </Grid>
              </Box>
            
          </Box>
  
          <Box
            bgcolor={themeMode === "light" ? "#A14F57" : "Background.default"}
            className="sidebar-theme-box"
            mt={2}
          >
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              Customise theme
            </Typography>
            <List dense={true}>
              <ListItem>
                <MdLightMode color="yellow" />
                <Switch
                  color="default"
                  onChange={(e) => setThemeMode(themeMode === "light" ? "dark" : "light")}
                />
                <MdModeNight color="gray" />
              </ListItem>
            </List>
          </Box>
  
        </Box>
      </Box>
    );
  };
  