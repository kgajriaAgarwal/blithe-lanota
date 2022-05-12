import {
  AppBar,
  styled,
  Toolbar,
  Typography,
  InputBase,
  Tab,
  Avatar,
  Tooltip,
  Divider,
  Menu,
  MenuItem,
  IconButton,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import "./NavBar.css";
import { Box } from "@mui/system";
import ListItemIcon from "@mui/material/ListItemIcon";
import Logout from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";
import { getLocalStorage, clearLocalStorage, showSuccessToast } from "../../../Helpers/Common/Utils";
import { useLayout, useThemeMode } from "../../../Helpers/Context";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuIcon from "@mui/icons-material/Menu";

export const NavBar = (props) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  let authData = getLocalStorage("authData");
  const { showLeftBar, showRightBar, setShowLeftbar, setShowRightbar } =
    useLayout();

  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
  }));

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.text.tertiary,
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));

  const SearchInput = styled(InputBase)(({ theme }) => ({
    color: theme.palette.primary.main,
    cursor: "pointer",
  }));

  const Icons = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    color: theme.palette.text.primary,
  }));

  const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
    color: theme.palette.text.primary,
  }));


  const handleLogout=() =>{
    console.log("handle logout..")
    if(authData){
      clearLocalStorage();
      showSuccessToast("You have been logged out successfully!!")
    }else{
      navigate("/login")
    } 
  }

  return (
    <AppBar position="sticky" bgcolor={"#A14F57"}>
      <StyledToolbar>
        <Box className="content-box">
            <IconButton
            aria-label="menu"
            size="large"
            onClick={() => setShowLeftbar(!showLeftBar)}
            >
            <MenuIcon />
            </IconButton>
            <Typography variant="h6">Blithe-la nota</Typography>
        </Box>
            <Search>
            <SearchInput placeholder="Search.." />
            </Search>
        
        <Icons>
          <Tooltip title="Sort by">
            <IconButton
              aria-label="delete"
              size="large"
              onClick={() => setShowRightbar(!showRightBar)}
            >
              <MoreVertIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="My Profile">
            <Avatar
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/1.jpg"
              sx={{ width: "2rem", height: "2rem" }}
              onClick={(e) => setOpen(true)}
            />
          </Tooltip>
        </Icons>
      </StyledToolbar>

      <Menu
        id="menu"
        open={open}
        onClose={(e) => setOpen(false)}
        onClick={(e) => setOpen(false)}
        className="menu"
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              color: "red",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
      >
        <Link to="/profile">
          <CustomMenuItem>
            <Avatar /> Profile
          </CustomMenuItem>
        </Link>
        <Link to="/mockman">
          <CustomMenuItem>Mockman</CustomMenuItem>
        </Link>
        <Divider />
        <Button onClick={()=> handleLogout()}>
          <CustomMenuItem>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            {authData ? "Logout" : "Login"}
          </CustomMenuItem>
        </Button>
      </Menu>
    </AppBar>
  );
};
