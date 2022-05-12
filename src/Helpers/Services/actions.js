import mainApiService from "./apiService";
import { setLocalStorage } from "../Common/Utils";

// Action to perform Login
export const actionLogin = async (data) => {
    const response = await mainApiService("login", data);
    if (response.data.encodedToken) {
      setLocalStorage("authData", response.data.encodedToken);
      setLocalStorage("userData", response.data.foundUser);
    }
    return response;
  };
  
  // Action to perform Signup
  export const actionSignup = async (data) => {
    const response = await mainApiService("signup", data);
    if (response.data.encodedToken) {
      setLocalStorage("authData", response.data.encodedToken);
    }
    return response;
  };

//action to get All Notes
export const getAllNotes = async (data) => {
    const response = await mainApiService("getAllNotes", data);
    return response;
  };

//ACTION TO ADD NOTE TO NOTES LIST..
export const actionAddNote = async (data) => {
  const response = await mainApiService("actionAddNote", data);
  return response;
};


//ACTION TO ADD NOTE TO NOTES LIST..
export const actionEditNote = async (data) => {
  const response = await mainApiService("actionEditNote", data);
  return response;
};

//action To Delete NOTE
export const actionDeleteNote = async (data) => {
  const response = await mainApiService("actionDeleteNote", data);
  return response;
};

//ROUTE - ARCHIVES
//action to get All Archived Notes
export const getAllArchivedNotes = async (data) => {
  const response = await mainApiService("getAllArchivedNotes", data);
  return response;
};


//ACTION TO ADD NOTE TO ARCHIVES LIST..
export const actionAddNotetoArchives = async (data) => {
  const response = await mainApiService("actionAddNotetoArchives", data);
  return response;
};

//ACTION TO Remove NOTE from ARCHIVES LIST..
export const actionRemoveNoteFromArchives = async (data) => {
  const response = await mainApiService("actionRemoveNoteFromArchives", data);
  return response;
};

//ACTION TO Remove NOTE from ARCHIVES LIST..
export const actionDeleteFromArchives = async (data) => {
  const response = await mainApiService("actionDeleteFromArchives", data);
  return response;
};

//ROUTE - TRASH
//action to get All Trashed Notes
export const getAllTrashedNotes = async (data) => {
  const response = await mainApiService("getAllTrashedNotes", data);
  return response;
};

//addNoteToTrash
export const actionAddNoteToTrash = async (data) => {
  const response = await mainApiService("actionAddNoteToTrash", data);
  return response;
};

//ACTION TO Remove NOTE from ARCHIVES LIST..
export const actionRestoreNoteFromTrash = async (data) => {
  const response = await mainApiService("actionRestoreNoteFromTrash", data);
  return response;
};

//actionDeleteFromTrash
export const actionDeleteFromTrash = async (data) => {
  const response = await mainApiService("actionDeleteFromTrash", data);
  return response;
};


