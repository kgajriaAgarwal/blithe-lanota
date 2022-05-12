import {
  Stack,
  Box,
} from "@mui/material";
import react, { useEffect, useState } from "react";
import { NoteCard, SideBar } from "../Shared";
import "./NotesPage.css";
import { useArchives, useNotes, useReducerContext, useThemeMode } from "../../Helpers/Context";
import { getAllNotes } from "../../Helpers/Services/actions";
import CreateNote from "./CreateNote";
import { getLocalStorage, showErrorToast } from "../../Helpers/Common/Utils";
import {
  labelFilter,
  priorityfiltering,
  searchBarHandler,
  getSortedDates,
} from "../../Helpers/Reducer/filterFunctions";
import { useFunctionCombiner } from "../../Helpers/CustomHook/FilterCombinerFunction";


const NotesPage = (props) => {
  const { themeMode } = useThemeMode();
  let authData = getLocalStorage('authData');
  const { notes, editNoteObj, setEditNoteObj } = useNotes();
  const [notesData, setNotesData] = useState([]);
  const { archives } = useArchives();
  const { labels, priority, searchTerm, timeSort } = useReducerContext();
  // const { sortedLables } = useFunctionCombiner;


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

  // const filteredPriorites = priorityfiltering(notesData, priority);
  // const sortedLables = labelFilter(filteredPriorites.length? filteredPriorites.length : notesData, labels);
 

  // console.log('filteredPriorites:', filteredPriorites);

  const filteredPriorites = priorityfiltering(notes, priority);

  const sortedDates = getSortedDates(
      (notes.length && filteredPriorites.length) ?   filteredPriorites :
      notes.length? notes : []
    , timeSort);

    const sortedLables = labelFilter(
      (notes.length && sortedDates.length) ?   sortedDates :
      notes.length? notes : []
  , labels);
  // const sortedDates = getSortedDates(filteredPriorites, timeSort);

  const searchBarHandle = searchBarHandler(sortedDates, searchTerm);
  


  return (
    <div className="middle-conatiner">
      
          <CreateNote />
           <Box className="notes-container" mt={2}>
            {sortedLables.length?
              sortedLables.map(note=> <NoteCard key={note._id} note={note} isModule={"NotesPage"}/>)
            :''}
          </Box>

    </div>
  );
};

export default NotesPage;
