import { Box, IconButton, Stack, styled, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";
import React from "react";
import './NoteCard.css'
import DeleteIcon from '@mui/icons-material/Delete';
import ArchiveIcon from '@mui/icons-material/Archive';
import EditIcon from '@mui/icons-material/Edit';

const NoteCustomBox = styled(Box)(({ theme }) => ({
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
    // gap: "10px",
    // backgroundColor:'pink',
    border: '2px solid black',
    borderRadius: '10px',
    boxSizing: 'border-box',
  }));

  const BottomBox = styled(Box)(({ theme }) => ({
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
    // gap: "10px",
    // backgroundColor: 'purple',
    boxSizing: 'border-box',
    width: '98%',
    display: 'flex',
    gap: '10px',
    margin: '10px',
  }));

  const IconsBox = styled(Stack)(({ theme }) => ({
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
    // gap: "10px",
    // backgroundColor: 'green',
    boxSizing: 'border-box',
    width: '98%',
    display: 'flex',
    gap: '10px',
    margin: '10px',
  }));


export const NoteCard = (props) =>{

    return(
        <NoteCustomBox>
             <Typography variant="h6" sx={{ color: "secondary" }} mt={2}>
                Title
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
                {new Date().toDateString()}
            </Typography>
            <Typography variant="body2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
            <BottomBox >
                <label className="lbl">
                    Work
                </label>
                <label className="lbl">
                    Medium
                </label>
                <div className="icons-div">
                <IconButton aria-label="delete" size="small">
                    <EditIcon/>
                </IconButton>
                <IconButton aria-label="delete" size="small">
                    <ArchiveIcon/>
                </IconButton>
                <IconButton aria-label="delete" size="small">
                    <DeleteIcon/>
                </IconButton>
                </div>
            </BottomBox>
        </NoteCustomBox>
    );
}

