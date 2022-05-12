
import { Box, Stack, styled } from "@mui/material";
import { useLayout, useThemeMode } from "../../Helpers/Context";
import { NavBar, RightBar, SideBar } from '../Shared';
import './Mainpage.css';
import MainPageRoute from "./MainPageRoute";

const MainPageLayout = () => {

    const {themeMode, setThemeMode} = useThemeMode(); 
    const { showLeftBar, showRightBar} = useLayout();

    const MainContainerWrapper = styled(Box)(({ theme }) => ({
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        [theme.breakpoints.down("sm")]: {
            position: 'absolute',
            width: "100%"
        },
      }));
    
    return(
        <Box  bgcolor={themeMode==="light"? "Background.primary":"Background.default"} >
            <NavBar/>
            <Stack direction="row" spacing={2} justifyContent="space-between">
                {showLeftBar?<SideBar />:''}
                <MainContainerWrapper className="main-container-wrapper" flex={3}>
                    <MainPageRoute/>
                </MainContainerWrapper>
               {showRightBar?<RightBar />:''}
            </Stack>
        </Box>
    );
}

export default MainPageLayout;