import {
  Stack,
  Box,
  TextField,
  styled,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Avatar,
  NativeSelect,
  Typography,
  Button,
  IconButton,
  FormHelperText,
  Checkbox,
} from "@mui/material";
import react, { useEffect, useState } from "react";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PushPinTwoToneIcon from "@mui/icons-material/PushPinTwoTone";
import { useNotes } from "../../Helpers/Context";
import { validateCreateNote } from "../../Helpers/Validations";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import PushPinIcon from "@mui/icons-material/PushPin";

const FormBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
  height: "40vh",
  width: "98%",
  border: "2px solid black",
  borderRadius: "10px",
  color:
    theme.palette.mode === "light"
      ? theme.palette.primary
      : theme.palette.text.tertiary,
}));

const TopBox = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
}));

const CreateNote = (props) => {
  const [data, setData] = useState([]);
  const [label, setLabel] = useState("Work");
  const [age, setAge] = useState("");
  const [color, setColor] = useState([
    "#FFCCF9",
    "#D5AAFF",
    "#B5B9FF",
    "#85E3FF",
    "#FFBEBC",
    "#BFFCC6",
    "#98CA32",
    "#88DBD3",
    "#FB8604",
    "#C1829D",
    "#368A81",
    "#958FAD",
  ]);
  const { addNote, editNoteObj, setEditNoteObj, isEdit, editNote } = useNotes();
  const [noteDetails, setNoteDetails] = useState({
    title: "",
    description: "",
    typeOfNote: "Work",
    priority: "Medium",
    pinned: false,
    noteColor: null,
    createdDate: new Date().toDateString(),
    error: { title: null, description: null },
  });


  // Call on Form Submit
  const validateForm = (event) => {
    event.preventDefault();
    let validate = validateCreateNote({
      title: noteDetails.title,
      description: noteDetails.description,
    });
    setNoteDetails((prevState) => {
      return {
        ...prevState,
        error: validate.errors,
      };
    });
    if (validate.isValid) {
      delete noteDetails.error;     
      const note_details = {...noteDetails, createdDate: new Date().toDateString()} 
      if (isEdit) {
        editNote(editNoteObj._id, note_details, event);
      } else {
        addNote(note_details, event);
      }

      setNoteDetails({
        title: "",
        description: "",
        typeOfNote: "Work",
        priority: "Medium",
        pinned: false,
        noteColor: null,
        error: { title: null, description: null },
      });
    }
  };

  useEffect(() => {
    if (Object.keys(editNoteObj).length) {
      setNoteDetails({
        title: editNoteObj ? editNoteObj.title : "",
        description: editNoteObj ? editNoteObj.description : "",
        typeOfNote: editNoteObj ? editNoteObj.typeOfNote : "Work",
        priority: editNoteObj ? editNoteObj.priority : "Medium",
        pinned: false,
        noteColor: editNoteObj ? editNoteObj.noteColor : "Medium",
        createdDate: new Date().toDateString(),
        error: { title: null, description: null },
      });
    }
  }, [editNoteObj]);

  return (
    <>
      <Box className="main-container">
        <FormBox
          bgcolor={noteDetails.noteColor}
          component="form"
          sx={{
            "& .MuiTextField-root": { width: "98%" },
          }}
          noValidate
          autoComplete="off"
          onSubmit={(e) => validateForm(e)}
        >
          <TopBox>
            <Typography variant="h6" component="div" className="create-note">
              {isEdit ? "Edit Note" : "Create New Note"}
            </Typography>
            <Checkbox
              icon={<PushPinOutlinedIcon />}
              checkedIcon={<PushPinIcon />}
              className="btn-pin"
              onClick={() =>
                setNoteDetails((prevState) => {
                  return { ...noteDetails, pinned: !prevState.pinned };
                })
              }
            />
          </TopBox>
          <FormControl sx={{ width: "98%" }}>
            <TextField
              id="txt"
              label="Title"
              variant="standard"
              placeholder="Title.."
              className="txt"
              error={noteDetails.error.title !== null ? true : false}
              type="text"
              name={"title"}
              value={noteDetails.title}
              onChange={(e) =>
                setNoteDetails({ ...noteDetails, title: e.target.value })
              }
            />
            <FormHelperText id="my-helper-text" sx={{ color: "red" }}>
              {noteDetails.error.title}
            </FormHelperText>
          </FormControl>
          <FormControl sx={{ width: "98%" }}>
            <TextField
              id="standard-textarea"
              label="description"
              placeholder="description.."
              multiline
              variant="standard"
              maxRows={6}
              error={noteDetails.error.description !== null ? true : false}
              type="text"
              name={"description"}
              value={noteDetails.description}
              onChange={(e) =>
                setNoteDetails({ ...noteDetails, description: e.target.value })
              }
            />
            <FormHelperText id="my-helper-text" sx={{ color: "red" }}>
              {noteDetails.error.description}
            </FormHelperText>
          </FormControl>
          <Box className="bottom-container">
            <FormControl sx={{ minWidth: 120 }} bgcolor="violet">
              <InputLabel id="demo-simple-select-label">Tag</InputLabel>
              <Select
                labelId="Tag"
                id="demo-simple-select"
                value={noteDetails.typeOfNote}
                label="Tag"
                onChange={(e) =>
                  setNoteDetails({ ...noteDetails, typeOfNote: e.target.value })
                }
              >
                <MenuItem value="Home">Home</MenuItem>
                <MenuItem value="Work">Work</MenuItem>
                <MenuItem value="Health">Health</MenuItem>
                <MenuItem value="Surgery">Surgery</MenuItem>
                <MenuItem value="Paitents">Paitents</MenuItem>
                <MenuItem value="Meetings">Meetings</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ minWidth: 120 }} bgcolor="violet">
              <InputLabel id="demo-simple-select-label">Priority</InputLabel>
              <Select
                labelId="priority"
                id="demo-simple-select"
                value={noteDetails.priority}
                label="Priority"
                onChange={(e) =>
                  setNoteDetails({ ...noteDetails, priority: e.target.value })
                }
              >
                <MenuItem value={"Low"}>Low</MenuItem>
                <MenuItem value={"Medium"}>Medium</MenuItem>
                <MenuItem value={"High"}>High</MenuItem>
              </Select>
            </FormControl>
            <FormControl
              sx={{ minWidth: 50, lineHeight: 1 }}
              bgcolor="violet"
              size="small"
            >
              <InputLabel id="demo-simple-select-label">🎨</InputLabel>
              <Select
                labelId="noteColor"
                id="noteColor"
                value={noteDetails.noteColor}
                label="🎨"
                onChange={(e) =>
                  setNoteDetails({ ...noteDetails, noteColor: e.target.value })
                }
              >
                {color.length
                  ? color.map((colour, indx) => {
                      return (
                        <MenuItem value={colour}>
                          <Avatar sx={{ bgcolor: colour }}>
                            <AssignmentIcon />
                          </Avatar>
                        </MenuItem>
                      );
                    })
                  : ""}
              </Select>
            </FormControl>

            <Button className="btn-add" size="large" type="submit">
              {isEdit ? "Edit Note" : "Add Note"}
            </Button>
          </Box>
        </FormBox>
      </Box>
    </>
  );
};

export default CreateNote;
