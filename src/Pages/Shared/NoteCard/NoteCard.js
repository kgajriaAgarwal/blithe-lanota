import { Box, Checkbox, IconButton, Stack, styled, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";
import React from "react";
import './NoteCard.css'
import DeleteIcon from '@mui/icons-material/Delete';
import ArchiveIcon from '@mui/icons-material/Archive';
import EditIcon from '@mui/icons-material/Edit';
import { useNotes } from "../../../Helpers/Context";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import PushPinIcon from '@mui/icons-material/PushPin';

const NoteCustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems:'baseline',
    border: '2px solid black',
    borderRadius: '10px',
    boxSizing: 'border-box',
  }));

  const BottomBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    width: '98%',
    gap: '10px',
    margin: '10px',
  }));

export const NoteCard = (props) =>{

    console.log("props:",props )
    const { note} = props;
    const { seteditNoteObj, editNoteObj, setIsEdit, deleteNote} = useNotes();

    return(
        <NoteCustomBox bgcolor={note.noteColor}>
            <Box className="note-title-container">
                <Typography variant="h6" sx={{ color: "secondary" }} ml={1}>
                    { note.title}
                </Typography>
                <Checkbox className="chck-bx" icon={<PushPinOutlinedIcon />} checkedIcon={<PushPinIcon/>} checked={note.pinned}/>
            </Box>
            <Typography variant="caption" display="block" gutterBottom ml={1}>
                {note.createdDate}
            </Typography>
            <Typography variant="body2"  ml={1}>
                {note.description}
            </Typography>
            <BottomBox >
                <label className="lbl">
                    {note.typeOfNote}
                </label>
                <label className="lbl">
                    {note.priority}
                </label>
                <div className="icons-div">
                <IconButton aria-label="edit" size="small" onClick={()=>{
                    seteditNoteObj(note)
                    setIsEdit(true)
                }}>
                    <EditIcon/>
                </IconButton>
                <IconButton aria-label="archive" size="small">
                    <ArchiveIcon/>
                </IconButton>
                <IconButton aria-label="delete" size="small" onClick={()=> deleteNote(note._id)}>
                    <DeleteIcon/>
                </IconButton>
                </div>
            </BottomBox>
        </NoteCustomBox>
    );
}

