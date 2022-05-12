import { Box, Typography } from "@mui/material";
import react, { useEffect, useState } from "react";
import { getLocalStorage, showErrorToast } from "../../Helpers/Common/Utils";
import { useArchives, useNotes } from "../../Helpers/Context";
import {
  getAllArchivedNotes,
  getAllTrashedNotes,
} from "../../Helpers/Services/actions";
import { NoteCard } from "../Shared";
import "../Archives/Archives.css";

const Trash = () => {
  let authData = getLocalStorage("authData");
  const { notes } = useNotes();
  const { trashData, addNoteToTrash } = useArchives();
  const [trashedData, setTrashedData] = useState([]);

  useEffect(() => {
    getAllTrashedNotes()
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          setTrashedData(res.data.trash);
        } else {
          if (authData) {
            showErrorToast("Unexpected error.Please try again later.");
          } else {
            showErrorToast("Kindly login first !!");
          }
        }
      })
      .catch((error) => {
        showErrorToast("Unexpected error.Please try again later.");
      });
  }, [notes, trashData]);

  return (
    <>
      <Typography
        variant="h6"
        sx={{ color: "secondary" }}
        ml={1}
        className="heading"
      >
        Trash
      </Typography>
      <Box className="notes-container">
        {trashedData.length
          ? trashedData.map((note) => (
              <NoteCard key={note._id} note={note} isModule={"TrashPage"} />
            ))
          : ""}
      </Box>
    </>
  );
};

export default Trash;
