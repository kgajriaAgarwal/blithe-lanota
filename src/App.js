import { ThemeProvider } from "@emotion/react";
import { Box, createTheme, CssBaseline } from "@mui/material";

import { useState } from "react";
import "./App.css";
import { useThemeMode } from "./Helpers/Context";
import BlitheRoute from "./route/BlitheRoute";

function App() {

  const {themeMode, setThemeMode} = useThemeMode();

  const themeLight = createTheme({
    palette: {
    //   type:{mode},
      Background: {
        default: "#1aab2a",
        primary: "#F5F5F5"
      },
      primary: {
        main: '#A14F57',
      },
      secondary: {
        main: '#ffffff',
      },
      text: {
        primary: "#000000",
        secondary:"#A14F57",
        tertiary:"#ffffff"
      },
      mode: themeMode
    }
  });
  
  const themeDark = createTheme({
    palette: {
    //   type:{mode},
      Background: {
        default: "#202124"
      },
      primary: {
        main: '#A14F57',
      },
      secondary: {
        main: '#ffffff',
      },
      text: {
        primary: "#ffffff",
        secondary:'#A14F57',
        tertiary: "#000000",
      },
      mode:themeMode
    }
  });


  return (
    <ThemeProvider theme={themeMode==="light"? themeLight : themeDark}>
      <CssBaseline />
      <Box className="App" bgcolor={"Background.default"}>
        <BlitheRoute/>
      </Box>
   </ThemeProvider>
  );
}

export default App;
