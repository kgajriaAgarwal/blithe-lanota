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
