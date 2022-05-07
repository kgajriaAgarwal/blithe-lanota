import React from 'react';
import { useAlert } from '../../Context';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export const Alert = (props) => {

    const {alertContent , setAlertContent} = useAlert();

    return(
        <Alert severity={props.errortype}>
            <AlertTitle>{props.title}</AlertTitle>
            {props.alertcontent}
        </Alert>
    );
}