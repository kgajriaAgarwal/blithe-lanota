import { Stack, Box, TextField, styled, FormControl, InputLabel, Select, MenuItem, Avatar, NativeSelect, Typography, Button } from '@mui/material';
import react, { useEffect, useState } from 'react';
import { SideBar } from '../Shared';
import darkBg from "../../Assets/Images/note-bg.png";
import lightBg from "../../Assets/Images/light-note-bg.png";
import './NotesPage.css'
import { useThemeMode } from '../../Helpers/Context';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { AutoAwesomeMosaic } from '@mui/icons-material';

const FormBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    //backgroundColor:theme.palette.mode === "light"? 'green' : 'yellow',

    
    height:'40vh',
    width:'50rem',
    
    color:'white',
    border:'2px solid black',
    borderRadius: '10px',
    color: theme.palette.mode === "light"
        ? theme.palette.primary
        : theme.palette.text.primary
  }));


const NotesPage = (props) => {

    const {themeMode} = useThemeMode();
    const [age, setAge] = useState('');
    const [color, setColor] = useState(['#FFCCF9',
        '#D5AAFF',
        '#B5B9FF',
        "#85E3FF",
        // "#F3FFE3",
        "#FFBEBC",
        "#BFFCC6"])

     const handleChange = (event) => {
        setAge(event.target.value);
    };

    return(
        <>
            <Stack direction='row' spacing={2} justifyContent='space-between'>            
                <SideBar/>
                {/* <Feed/>
                <RightBar/> */}
                <Box flex={4} className='main-container' 
                    //bgcolor={"Background.default"}
                    // bgcolor={"red"}
                >
                    <FormBox
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { width: '98%' },
                        }}
                        noValidate
                        autoComplete="off"
                        // bgcolor={"blue"}
                        // className={`notes ${themeMode==='light' ? "notes-form-light" : "notes-form-dark"}`}
                        >
                        <Typography variant="h6" component="div" className='create-note'>
                            Create a new note..
                        </Typography>
                        <TextField id="txt" label="Title" variant="standard" placeholder="Title.." className='txt' />
                        <TextField
                            id="standard-textarea"
                            label="description"
                            placeholder="description.."
                            multiline
                            variant="standard"
                            maxRows={6}
                        />
                        <Box className='bottom-container'>
                            {/* <Box sx={{ minWidth: 120 }} bgcolor='red'> */}
                            <FormControl sx={{ minWidth: 120 }} bgcolor='violet' >
                                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                                >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>

                            <FormControl sx={{ minWidth: 120 }} bgcolor='violet' >
                                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                                >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                            {/* //🎨 If you are looking for inspiration, you can check */}
                            <FormControl sx={{ minWidth: 50, lineHeight: 1 }} bgcolor='violet'  size='small'>
                                <InputLabel id="demo-simple-select-label">🎨</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                                >
                                {color.length?
                                    color.map((colour, indx)=> {
                                        return <MenuItem value={colour}>
                                                
                                                <Avatar sx={{ bgcolor: colour }}>
                                                    <AssignmentIcon />
                                                </Avatar>
                                            </MenuItem>
                                    } 
                                ):''}
                                
    
                                </Select>
                            </FormControl>

                            <Button variant="outlined" className='btn-add'>Add</Button>
                            {/* </Box> */}

                            {/* <FormControl sx={{ minWidth: 50 }}>
                            <InputLabel variant="standard" htmlFor="uncontrolled-native">
                            🎨
                            </InputLabel>
                            <NativeSelect
                            defaultValue={30}
                            inputProps={{
                                name: 'age',
                                id: 'uncontrolled-native',
                            }}
                            >
                            {color.length?
                                    color.map((colour, indx)=> {
                                        return <MenuItem value={colour} >
                                                
                                                <Avatar sx={{ bgcolor: colour }}>
                                                    <AssignmentIcon />
                                                </Avatar>
                                            </MenuItem>
                                    } 
                                ):''} */}
                            {/* <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option> */}
                            {/* </NativeSelect>
                        </FormControl> */}
                        </Box>
                        
                        {/* <FeedCard image="https://picsum.photos/200/300"/>
                        <FeedCard image="https://picsum.photos/200"/>
                        <FeedCard image="https://picsum.photos/id/237/200/150"/>
                        <FeedCard image="https://picsum.photos/200/300?grayscale"/>
                        <FeedCard image="https://picsum.photos/200/300"/>
                        <FeedCard image="https://picsum.photos/200/300"/> */}
                       
                    </FormBox>
                </Box>
            </Stack>
            {/* <AddPost/> */}
        </>
    );
}

export default NotesPage;