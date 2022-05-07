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