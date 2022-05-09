import { createContext, useState, useContext } from 'react';
import { getLocalStorage, showErrorToast, showSuccessToast } from '../Common/Utils';
import { actionAddNote, actionAddNotetoArchives, actionDeleteFromArchives, actionEditNote, actionRemoveNoteFromArchives } from '../Services/actions';
import { useNotes } from './NotesContext';

const ArchivesContext = createContext();

const ArchivesProvider = ({ children}) => {

    const [archives, setArchives] = useState([]);
    const { setNotes } = useNotes();
    let authData = getLocalStorage('authData');

    ////action -add Note To Archives
    const addNoteToArchives = async (noteId,noteObj) => {
        actionAddNotetoArchives({noteId: noteId , note : noteObj})
        
        .then(res=> {
            console.log("res actionAddNotetoArchives", res)
            if(res.status === 201 || res.status === 200){
                showSuccessToast("Note Archived Successfully!!")
                setNotes(res?.data?.notes);
                setArchives(res?.data?.archives);
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

     //action - Unarchive note
     const removeNoteFromArchives = async (noteId) =>{
         debugger
         console.log("notesId:", noteId);
        actionRemoveNoteFromArchives({noteId: noteId})
        .then(res=> {
            console.log("res removeNoteFromArchives", res);
            if(res.status === 201 || res.status === 200){
                setNotes(res?.data?.notes);
                setArchives(res?.data?.archives);
                showSuccessToast("Note unArchived Successfully!!")
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
        const deleteNoteFromArchives = ( noteId) =>{
            actionDeleteFromArchives({noteId: noteId})
          .then(res=> {
              if(res.status === 201 || res.status === 200){
                setNotes(res?.data?.notes);
                setArchives(res?.data?.archives);
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
        <ArchivesContext.Provider  value={{
            archives, setArchives,
            addNoteToArchives,
            removeNoteFromArchives,
            deleteNoteFromArchives
        }}>
          {children}
        </ArchivesContext.Provider>
      );
}

const useArchives = () => useContext(ArchivesContext);
  
export { useArchives, ArchivesProvider };