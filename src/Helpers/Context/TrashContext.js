import { createContext, useState, useContext } from 'react';
import { getLocalStorage, showErrorToast, showSuccessToast } from '../Common/Utils';
import { actionAddNote, actionAddNotetoArchives, actionAddNoteToTrash, actionDeleteFromArchives, actionDeleteFromTrash, actionEditNote, actionRemoveNoteFromArchives,  actionRestoreNoteFromTrash } from '../Services/actions';
import { useNotes } from './NotesContext';

const TrashContext = createContext();

const TrashProvider = ({ children}) => {

    const [trashData, setTrashData] = useState([]);
    const { setNotes } = useNotes();
    let authData = getLocalStorage('authData');

      ////action -add Note To Archives
    const addNoteToTrash = async (noteId , noteObj) => {
        actionAddNoteToTrash({noteId: noteId , note: noteObj})        
        .then(res=> {
            if(res.status === 201 || res.status === 200){
                showSuccessToast("Note Trasheded Successfully!!")
                setNotes(res?.data?.notes);
                setTrashData(res?.data?.trash);
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

    //  //action - Unarchive note
     const restoreNoteFromTrash = async (noteId) =>{
        actionRestoreNoteFromTrash({noteId: noteId})
        .then(res=> {
            if(res.status === 201 || res.status === 200){
                setNotes(res?.data?.notes);
                setTrashData(res?.data?.trash);
                showSuccessToast("Note restored from trash Successfully!!")
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



        //API - action Delete Note permanenlty
        const deleteNoteFromTrash = ( noteId) =>{
            actionDeleteFromTrash({noteId: noteId})
          .then(res=> {
              if(res.status === 201 || res.status === 200){
                setNotes(res?.data?.notes);
                setTrashData(res?.data?.trash);
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
        <TrashContext.Provider  value={{
            trashData, setTrashData,addNoteToTrash,
            restoreNoteFromTrash,
            deleteNoteFromTrash
        }}>
          {children}
        </TrashContext.Provider>
      );
}

const useTrash = () => useContext(TrashContext);
  
export { useTrash, TrashProvider };