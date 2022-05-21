import {
  Box,
  Avatar,
  Typography,
  Grid,
  List,
  ListItem,
  Switch,
  styled,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";
import { MdModeNight, MdLightMode } from "react-icons/md";
import { useThemeMode } from "../../../Helpers/Context";

const LeftBarBox = styled(Box)(({ theme }) => ({
  height: "100vh",
  display: "flex",
  flexDirection: "column",

  [theme.breakpoints.down("sm")]: {
    alignItems: "flex-start",
    zIndex: 2,
    width: "50%",
    marginLeft: "auto",
    height:'10vh',
  },
  [theme.breakpoints.up("sm")]: {
    alignItems: "flex-end",
    width: "20%",
  },
}));

const LeftBarContentBox = styled(Box)(({ theme }) => ({
  position: "fixed",
  [theme.breakpoints.down("sm")]: {
    backgroundColor: theme.palette.text.tertiary,

    width: "50%",
    marginLeft: "auto",
  },
  [theme.breakpoints.up("sm")]: {
    width: "14%",
  },
}));

export const SideBar = (props) => {
  const { themeMode, setThemeMode } = useThemeMode();

  return (
    <LeftBarBox bgcolor={"Background.default"} flex={1} p={2}>
      <LeftBarContentBox>
        <Box
          bgcolor={themeMode === "light" ? "#A14F57" : "Background.default"}
          className="sidebar-profile-box"
        >
          <Box className="profile-img-box">
            <Typography
              variant="h6"
              sx={{ color: "secondary", paddingTop: " 60%" }}
            >
              Blithe-la nota
            </Typography>
            <Avatar
              alt="Remy Sharp"
              src="https://c.tenor.com/xtFf2a8D2uMAAAAM/writing-notepad.gif"
              className="sidebar-avatar"
              id="sidebar-avatar"
            />

            <Grid item xs={12} md={6}>
              <List dense={true}>
                <Link to="/" className="sidebar-link">
                  <ListItem>Notes</ListItem>
                </Link>

                <Link to="/user/archives" className="sidebar-link">
                  <ListItem>Archived</ListItem>
                </Link>
                <Link to="/user/trash" className="sidebar-link">
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
                onChange={(e) =>
                  setThemeMode(themeMode === "light" ? "dark" : "light")
                }
              />
              <MdModeNight color="gray" />
            </ListItem>
          </List>
        </Box>

      </LeftBarContentBox>
    </LeftBarBox>
  );
};
