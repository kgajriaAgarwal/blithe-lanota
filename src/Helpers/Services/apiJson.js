

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

    //ROUTE - ARCHIVES
    //Action to get All Archived Notes
    getAllArchivedNotes: {
      url: '/archives',
      method: 'GET',
      data: {},
      headers: {
        'Content-Type': 'application/json',
        'authorization': encodedToken
      }, 
      showResultMessage: false,
      showErrorMessage: false,
  },

  //action TO Add Note to Archives
  actionAddNotetoArchives:{
    url: '/notes/archives/:noteId',
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

  //action to Remove Note From Archives 
  actionRemoveNoteFromArchives:{
    url: '/archives/restore/:noteId',
      method: 'POST',
      data: {},
      headers: {
        'Content-Type': 'application/json',
        'authorization': encodedToken
      }, 
      showResultMessage: false,
      showErrorMessage: true,
  },

  //actionDeleteFromArchives
  actionDeleteFromArchives:{
    url: '/archives/delete/:noteId',
      method: 'DELETE',
      data: {},
      headers: {
        'Content-Type': 'application/json',
        'authorization': encodedToken
      }, 
      showResultMessage: false,
      showErrorMessage: true,
  },

  //ROUTE - TRASHED
  //ACTION TO get All Trashed Notes
  getAllTrashedNotes: {
    url: '/trash',
    method: 'GET',
    data: {},
    headers: {
      'Content-Type': 'application/json',
      'authorization': encodedToken
    }, 
    showResultMessage: false,
    showErrorMessage: false,
},

  //actionAddNoteToTrash
  actionAddNoteToTrash:{
    url: '/notes/trash/:noteId',
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

  //actionRemoveNoteFromTrash
  actionRestoreNoteFromTrash:{
    url: '/trash/restore/:noteId',
      method: 'POST',
      data: {},
      headers: {
        'Content-Type': 'application/json',
        'authorization': encodedToken
      }, 
      showResultMessage: false,
      showErrorMessage: true,
  },

  //actionDeleteFromTrash
  actionDeleteFromTrash:{
    url: '/trash/delete/:noteId',
      method: 'DELETE',
      data: {},
      headers: {
        'Content-Type': 'application/json',
        'authorization': encodedToken
      }, 
      showResultMessage: false,
      showErrorMessage: true,
  },

  //Action to get user
  //   getUserProfile: {
  //     url: '/api/user',
  //     method: 'GET',
  //     data: {},
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'authorization': encodedToken
  //     }, 
  //     showResultMessage: false,
  //     showErrorMessage: false,
  // },


}
