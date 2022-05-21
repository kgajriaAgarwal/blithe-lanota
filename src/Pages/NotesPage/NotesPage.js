import {
  Stack,
  Box,
  Typography,
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
  const notes_data = notes ? notes?.length? notes : '' :''


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
  }, [notes_data, archives]);

  const filteredPriorites = priorityfiltering(notes_data.length ? notes_data : [], priority);


  const sortedDates = getSortedDates(
      ( notes_data   && notes_data.length && filteredPriorites && filteredPriorites.length) ?   filteredPriorites :
      notes_data.length ? notes_data : []
    , timeSort);

    const sortedLables = labelFilter(
      (notes_data && notes_data.length && sortedDates.length) ?   sortedDates :
      notes_data.length? notes_data : []
  , labels);
  

  const searchBarHandle = searchBarHandler( notes_data &&  notes_data.length ? notes_data : [], searchTerm);

  const showNoteCard = (func) => {
    return func.map(note=> { return <NoteCard key={note._id} note={note} isModule={"NotesPage"}/>})
  }
  
  const showNotes = () => {
    if( notes_data && notes_data.length && searchTerm){
      return showNoteCard(searchBarHandle)
    }
    if( notes_data && notes_data.length && priority.length && labels.length< 1  &&  timeSort === null){
      return showNoteCard(filteredPriorites)
    } 
    if( notes_data && notes_data.length && priority.length<1 && labels.length< 1  &&  timeSort !== null){
      return showNoteCard(sortedDates)
    }  
    if( notes_data &&  notes_data.length && priority.length<1 && labels.length  &&  timeSort === null){
      return showNoteCard(sortedLables)
    }
    if( notes_data && notes_data.length && priority.length && labels.length  &&  timeSort === null){
      return showNoteCard(sortedLables)
    }     
    if( notes_data && notes_data.length && priority.length && labels.length  &&  timeSort !== null){
      return showNoteCard(sortedLables)
    }
    if( notes_data && notes_data.length && priority.length<1 && labels.length< 1  &&  timeSort === null){
      return showNoteCard(notes_data)
    }
    else
    {
      return <Typography variant="h6" mt={2}>Notes not available </Typography>
    }
  }

  useEffect(()=> 
      showNotes()
    ,[notes_data, priority, labels, timeSort,searchTerm ])


  return (
    <div className="middle-conatiner">
      
          <CreateNote />
           <Box className="notes-container" mt={2}>
           <Typography variant="h6" mt={2}>Notes</Typography>
            {showNotes()}
          </Box>

    </div>
  );
};

export default NotesPage;
