import { Box, Typography } from "@mui/material";
import react, { useEffect, useState } from "react";
import { getLocalStorage, showErrorToast } from "../../Helpers/Common/Utils";
import { useArchives, useNotes } from "../../Helpers/Context";
import { getAllArchivedNotes } from "../../Helpers/Services/actions";
import { NoteCard } from "../Shared";
import './Archives.css'

const Archives = () =>{

    let authData = getLocalStorage('authData');
    const { notes } = useNotes();
    const { archives } = useArchives();
    const [archivesData, setArchivesData] = useState([]);

    useEffect(() => {
        getAllArchivedNotes()
          .then((res) => {
            if (res.status === 200 || res.status === 201) {
                setArchivesData(res.data.archives);
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
      }, [notes,archives]);

    return(
        <>
            <Typography variant="h6" sx={{ color: "secondary"}} ml={1} className="heading">
                Archives
            </Typography>
            <Box className="notes-container">
            {archivesData.length?
              archivesData.map(note=> <NoteCard key={note._id} note={note} isModule={"ArchivesPage"}/>)
            :''}
          </Box>
        </>
    );
}

export default Archives;

