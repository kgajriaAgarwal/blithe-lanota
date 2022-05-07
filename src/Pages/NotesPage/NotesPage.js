import { Stack, Box, TextField, styled, FormControl, InputLabel, Select, MenuItem, Avatar, NativeSelect, Typography, Button } from '@mui/material';
import react, { useEffect, useState } from 'react';
import { NoteCard, SideBar } from '../Shared';
import './NotesPage.css'
import { useThemeMode } from '../../Helpers/Context';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { getAllNotes } from '../../Helpers/Services/actions';
// import { getAllCategory } from '../../Helpers/Services/actions';
import { useNavigate } from 'react-router-dom';

const FormBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",    
    height:'40vh',
    width:'70%',    
    color:'white',
    border:'2px solid black',
    borderRadius: '10px',
    color: theme.palette.mode === "light"
        ? theme.palette.primary
        : theme.palette.text.primary
  }));


const NotesPage = (props) => {

    const {themeMode} = useThemeMode();
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [age, setAge] = useState('');
    const [color, setColor] = useState(['#FFCCF9',
        '#D5AAFF',
        '#B5B9FF',
        "#85E3FF",
        "#FFBEBC",
        "#BFFCC6"])

     const handleChange = (event) => {
        setAge(event.target.value);
    };

    useEffect(()=> {
        getAllNotes()
        .then(res=> {
            if(res.status === 200){
                setData(res.data.categories);
                setTop_categories( res.data.categories.filter(category =>
                    category?.categoryStatus? category.categoryStatus === 'top':''
                ))
            }else{
                //setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:"Unexpected error.Please try again later."})
            }            
        })
        .catch((error) => {
                //setAlertContent({_id: uuid(), isShow:true, type:'ERROR', content:"Unexpected error.Please try again later."})
            })
        }
    ,[])

    return(
        <>
            <Stack direction='row' spacing={2} justifyContent='space-between'>            
                <SideBar/>
                <Box className='main-container-wrapper' flex={4}>
                <Box  className='main-container' 
                >
                    <FormBox
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { width: '98%' },
                        }}
                        noValidate
                        autoComplete="off"
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
                        </Box>
                        

                      
                        {/* <FeedCard image="https://picsum.photos/200/300"/>
                        <FeedCard image="https://picsum.photos/200"/>
                        <FeedCard image="https://picsum.photos/id/237/200/150"/>
                        <FeedCard image="https://picsum.photos/200/300?grayscale"/>
                        <FeedCard image="https://picsum.photos/200/300"/>
                        <FeedCard image="https://picsum.photos/200/300"/> */}
                       
                    </FormBox>
                </Box>
                <Box className='notes-container' >
                    <NoteCard/>
                    <NoteCard/>
                    <NoteCard/>
                    <NoteCard/>
                </Box>
                </Box>
            </Stack>
            {/* <AddPost/> */}
        </>
    );
}

export default NotesPage;