import { createContext, useState, useContext } from 'react';
import { getLocalStorage, showErrorToast, showSuccessToast } from '../Common/Utils';
import { actionAddNote, actionDeleteNote, actionEditNote } from '../Services/actions';

const NotesContext = createContext();

const NotesProvider = ({ children}) => {

    const [notes, setNotes] = useState([]);
    const [editNoteObj, seteditNoteObj] = useState({})
    const [isEdit, setIsEdit] = useState(false)
    let authData = getLocalStorage('authData');

    ////action -create note
    const addNote = async (noteObj, event) => {
        event.preventDefault();
        actionAddNote({note : noteObj})
        
        .then(res=> {
            if(res.status === 201 || res.status === 200){
                showSuccessToast("Note added Successfully!!")
                setNotes(res?.data?.notes);
            }else if(res.status === 409){
                showErrorToast("The note is already in your notes list.")
            }else{
              if(authData){
                showErrorToast("Unexpected error.Please try again later.")
              }else{
                showErrorToast("Kindly login first !!")
              }
            }            
        })
        .catch((error) => {
            showErrorToast("Kindly login first !!")
        })
      }

     //action -Edit note
     const editNote = (notesId, noteObj, event) =>{
        event.preventDefault();
        actionEditNote({notesId: notesId, note: noteObj})
        .then(res=> {
            console.log("res444", res);
            if(res.status === 201 || res.status === 200){
                setNotes(res?.data?.notes);
                showSuccessToast("Note updated Successfully!!")
            }else{
                if(encodedToken){
                    showErrorToast("Unexpected error.Please try again later.")
                    }else{
                    showErrorToast("Kindly login first !!")
                }
            }            
        })
        .catch((error) => {
            showErrorToast("Unexpected error.Please try again later.")
        })
        .finally(()=>{
            setIsEdit(false)
            seteditNoteObj({})
        })
    }

        //API - action Delete Note
        const deleteNote = ( notesId) =>{
            actionDeleteNote({ notesId})
          .then(res=> {
              if(res.status === 201 || res.status === 200){
                setNotes(res?.data?.notes);
                showSuccessToast("Note deleted Successfully!!")
              }else{
                if(encodedToken){
                    showErrorToast("Unexpected error.Please try again later.")
                }else{
                    showErrorToast("Kindly login first !!")
                }
              }            
          })
          .catch((error) => {
            showErrorToast("Unexpected error.Please try again later.")
          })
        }



    return (
        <NotesContext.Provider  value={{
            notes,
            setNotes,
            addNote,
            editNoteObj,
            seteditNoteObj,
            isEdit,
            setIsEdit,
            editNote,
            deleteNote
        }}>
          {children}
        </NotesContext.Provider>
      );
}

const useNotes = () => useContext(NotesContext);
  
export { useNotes, NotesProvider };