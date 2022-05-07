import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let toastId = "";

// toastr messages for error
export const showErrorToast = (errorMessage, event) => {
    if (!toast.isActive(toastId)) {
      toastId = toast.error(errorMessage, {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        autoClose: 4000,
      });
    }
  };
  
  // toastr messages for success
  export const showSuccessToast = (message) => { 
    if (!toast.isActive(toastId)) {    
      toastId = toast.success(message, {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        autoClose: 4000,
      });
    }
  };


// used to set localstorage item
export const setLocalStorage = (key, value) => {
    value = JSON.stringify(value);
    // const encodedData = encryptedData(value);
    localStorage.setItem(key, value);
  };
  
  // used to get localstorage item
  export const getLocalStorage = (key) => {
    if (key) {
      let data = localStorage.getItem(key);
      if (data) {
        // data = JSON.parse(decryptedData(data));
        data = JSON.parse(data);
        return data;
      }
    }
    return null;
  };
  
  // used to remove localstorage item
  export const removeLocalStorage = (key) => {
    localStorage.removeItem(key);
  };
  
  // used to clear localstorage
  export const clearLocalStorage = () => {
    localStorage.clear();
  };
