

const encodedToken = localStorage.getItem("authData") ? localStorage.getItem("authData") : '';

export const ApiJson = { 

    //ACTION TO LOGIN
    login: {
        url: '/auth/login',
        method: 'POST',
        data: {
        "email": "",
        "password": "",
        },
        headers: {
        'Content-Type': 'application/json'
        }, 
        showResultMessage: false,
        showErrorMessage: true,
    },
  
    //ACTION TO SIGN UP
    signup: {
      url: '/auth/signup',
      method: 'POST',
      data: {
        "email":'',
        "firstName":'',
        "lastName":'',
        "password":'',
        "confirmPassword":''
      },
      headers: {
        'Content-Type': 'application/json'
      }, 
      showResultMessage: false,
      showErrorMessage: true,
      },

    //ACTION TO GET ALL CATEGORY
    getAllNotes: {
        url: '/notes',
        method: 'GET',
        data: {},
        headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json',
        
        }, 
        showResultMessage: false,
        showErrorMessage: false,
    },
}
