import { validateRegex } from "./ValidationRegex";
import { validationMessages } from "./ValidationMessages";
import isEmpty from "lodash/isEmpty";
import Validator from 'validator';

function isBlank(str) {
  return !str || /^\s*$/.test(str);
}

export const validateLogin = (data) => {
  let errors = {};

  if (isBlank(data.username)) {
    errors.username = validationMessages.username.required;
  } else if(!isBlank(data.username)){
    if(!validateRegex.validateEmail.test(String(data.username).toLowerCase())){
      errors.username = validationMessages.username.invalid;    
    }
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = validationMessages.password.required;
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}   

export const validateSignUp = (data) => {
    // console.log("data is:", data);
    let errors = {};
    if (isBlank(data.first_name)) {
        errors.first_name = validationMessages.fieldRequired.required;
    }
    if (isBlank(data.last_name)) {
        errors.last_name = validationMessages.fieldRequired.required;
    }
    if (isBlank(data.username)) {
        errors.username = validationMessages.fieldRequired.required;
      }
    if (isBlank(data.password)) {
      errors.password = validationMessages.fieldRequired.required;
    }
    if (isBlank(data.confirm_password)) {
      errors.confirm_password = validationMessages.fieldRequired.required;
    } else if (data.password && data.confirm_password) {
      if (data.password !== data.confirm_password) {
        errors.confirm_password = validationMessages.match.invalid;
      }
    }
  
    return {
      errors,
      isValid: isEmpty(errors),
    };
  };