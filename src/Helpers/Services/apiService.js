
import axios from 'axios';
import { ApiJson } from './apiJson';

import {getLocalStorage} from '../Common/Utils';


let apiFailCounter = 0;
axios.defaults.baseURL = "/api";
 
axios.interceptors.request.use(
  function (config) {
    let userInfo = getLocalStorage('authData');
    if (userInfo) {
      if (userInfo.access_token) {
        let access_token = userInfo.access_token;
        config.headers.authorization = `${access_token}`;
        config.headers.Accept = `*/*`;
        config.headers["Content-Type"] = `application/json`;
      }
    }else{
        config.headers.Accept = `*/*`;
    }
    return config;
  },
  function (error) {'application/json'
    return Promise.reject(error);
  }
);

const prepareDataObject = (_data_, paramObj) => {
  for (let key in _data_) {

    if (paramObj[key] || paramObj[key] === false) {
      _data_[key] = paramObj[key];
    } else {
      if (typeof _data_[key] !== 'object') _data_[key] = '';
    }
  }
  return _data_;
};

const injectParamsToUrl = (_url_, paramObj) => {
  var url = _url_;
  for (let key in paramObj) {
    url = url.replace(':' + key, paramObj[key]);
  }
  return url;
};

// const injectHeadersToReq = async (_headers_) => {
//   let userInfo = await getLocalStorage('authData');

//   if (userInfo) {
//     if (userInfo.access_token) {
//       _headers_['Authorization'] = `bearer ${userInfo.access_token}`
//     }
//   }

//   return _headers_;
// };

const injectHeadersToReq = async (_headers_) => {
  let userInfo = await getLocalStorage('authData');

  if (userInfo) {    
    _headers_['authorization'] = userInfo
  }

  return _headers_;
};

const handleErrorByStatus = (error) => {
  if (error && error.data.error) {
    if(error.status === 401){
        console.log("error..", error)
        // showErrorToast(error.data.error_description)
    }else{ 
        console.log("error..", error)
       // showErrorToast(error.data.error_description)
    }
  }
}; 

const mainApiService = async (apiKeyName, data) => {
//   let apiDetails = ApiJson[apiKeyName];
    let apiDetails = ApiJson[apiKeyName]
  if (!apiDetails) {
    console.log(
      'Api configuration do not found in api-json, please check api-json.js'
    );
    //uncomment here..
    // throw new Error(
    //   'Api configuration do not found in api-json, please check api-json.js'
    // );
  }  
 
  let requestObject = Object.assign({}, apiDetails);
  requestObject.data = prepareDataObject(requestObject.data, data);
  requestObject.url = injectParamsToUrl(requestObject.url, data);
  requestObject.headers = await injectHeadersToReq(requestObject.headers, data);

  return axios(requestObject)
    .then(function (result) {
        console.log("resulttt@@:", result)
      apiFailCounter = 0;
      if (result.data && result) {
        if (result.data.encodedToken) {
          const message = "Login success!";
          if (requestObject.showResultMessage === true)
            showSuccessToast(message);
        }
      } else {
        handleErrorByStatus(result.data);
      }
      return result || { data: {} };
    })
    .catch(function (error) {
      if (error && error.response) {
        if(error.response.status === 401){
          localStorage.clear();
          window.open(window.location.origin, '_self');
         // showErrorToast("You have been logged out.Kindly login again!")
            console.log("You have been logged out.Kindly login again!");
        }
        if (requestObject.showErrorMessage === true)
          handleErrorByStatus(error.response);
      }
      if(error.config){
        if (
          error.config.maxContentLength - 1 &&
          error.toString().indexOf('Network Error') > -1
        ) {
          apiFailCounter++;
          if (apiFailCounter >= 3) {            
            localStorage.clear();
            window.open(window.location.origin, '_self');
          }
        }        
      }

      return error.response || { data: {} };
    });
};

export default mainApiService;
