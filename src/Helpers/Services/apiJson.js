

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
          'Content-Type': 'application/json',
          'authorization': encodedToken
        }, 
        showResultMessage: false,
        showErrorMessage: false,
    },

    //ACTION TO ADD A PARTICULAR NOTE TO NOTES LIST
  actionAddNote:{
    url: '/notes',
      method: 'POST',
      data: {
        note:{}
      },
      headers: {
        'Content-Type': 'application/json',
        'authorization': encodedToken
      }, 
      showResultMessage: false,
      showErrorMessage: true,
  },

  actionEditNote:{
    url: '/notes/:notesId',
      method: 'POST',
      data: {
        note:{}
      },
      headers: {
        'Content-Type': 'application/json',
        'authorization': encodedToken
      }, 
      showResultMessage: false,
      showErrorMessage: true,
  },

    //ACTION TO DELETE NOTE FROM NOTES LIST
    actionDeleteNote:{
      url: '/notes/:notesId',
        method: 'DELETE',
        data: {},
        headers: {
          'Content-Type': 'application/json',
          'authorization': encodedToken
        }, 
        showResultMessage: false,
        showErrorMessage: true,
    },

}
