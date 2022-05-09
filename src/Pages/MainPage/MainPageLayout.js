
import { Box, Stack } from "@mui/material";
import { useThemeMode } from "../../Helpers/Context";
import { NavBar, SideBar } from '../Shared';
import './Mainpage.css';
import MainPageRoute from "./MainPageRoute";

const MainPageLayout = () => {

    const {themeMode, setThemeMode} = useThemeMode(); 
    
    return(
        <Box  bgcolor={themeMode==="light"? "Background.primary":"Background.default"} >
            <NavBar/>
            <Stack direction="row" spacing={2} justifyContent="space-between">
                <SideBar />
                <Box className="main-container-wrapper" flex={4}>
                    <MainPageRoute/>
                </Box>
            </Stack>
        </Box>
    );
}

export default MainPageLayout;