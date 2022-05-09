import {
  Stack,
  Box,
} from "@mui/material";
import react, { useEffect, useState } from "react";
import { NoteCard, SideBar } from "../Shared";
import "./NotesPage.css";
import { useArchives, useNotes, useThemeMode } from "../../Helpers/Context";
import { getAllNotes } from "../../Helpers/Services/actions";
import CreateNote from "./CreateNote";
import { getLocalStorage, showErrorToast } from "../../Helpers/Common/Utils";


const NotesPage = (props) => {
  const { themeMode } = useThemeMode();
  let authData = getLocalStorage('authData');
  const { notes, editNoteObj, setEditNoteObj } = useNotes();
  const [notesData, setNotesData] = useState([]);
  const { archives } = useArchives();

  useEffect(() => {
    getAllNotes()
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          setNotesData(res.data.notes);
        } else {
          if(authData){
            showErrorToast("Unexpected error.Please try again later.")
          }else{
            showErrorToast("Kindly login first !!")
          }
        }
      })
      .catch((error) => {
        showErrorToast("Unexpected error.Please try again later.")
      });
  }, [notes, archives]);

  return (
    <>
      {/* <Stack direction="row" spacing={2} justifyContent="space-between">
        <SideBar /> */}
        {/* <Box className="main-container-wrapper" flex={4}> */}
          <CreateNote />
          <Box className="notes-container">
            {notesData.length?
              notesData.map(note=> <NoteCard key={note._id} note={note} isModule={"NotesPage"}/>)
            :''}
          </Box>
        {/* </Box> */}
      {/* </Stack> */}
    </>
  );
};

export default NotesPage;
