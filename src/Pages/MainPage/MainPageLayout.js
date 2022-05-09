
import { Box } from "@mui/material";
import { useThemeMode } from "../../Helpers/Context";
import { NavBar } from '../Shared';
import './Mainpage.css';
import MainPageRoute from "./MainPageRoute";

const MainPageLayout = () => {

    const {themeMode, setThemeMode} = useThemeMode(); 
    
    return(
        <Box  bgcolor={themeMode==="light"? "Background.primary":"Background.default"} >
            <NavBar/>
            <MainPageRoute/>
        </Box>
    );
}

export default MainPageLayout;