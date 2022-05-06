import { Visibility } from "@mui/icons-material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import { useEffect, useRef, useState } from "react";

export function Input(props) {
    const ref = useRef();
    const [hasFocus, setFocus] = useState(false);

    const handleIcon = () => {
        if(props.name === 'password'){
            return <>
                {props.show_password==="false" ? <Visibility/> : <VisibilityOff/>}
                </>
        }
        if(props.name === 'confirm_password'){
            return <>
            {props.show_confirm_password==="false" ? <Visibility/> : <VisibilityOff/>}
            </>
        }
    }


    return(
        <>
            <InputLabel htmlFor="outlined-adornment-password">
                {props.label}
            </InputLabel>
            <OutlinedInput
                id={props.id}
                type={props.type}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                endAdornment={
                props.inputicon?
                <InputAdornment position="end">
                    <IconButton
                    aria-label="toggle password visibility"
                    onClick={props.handle_action}
                    edge="end"
                    >
                    {handleIcon()}
                    </IconButton>
                </InputAdornment>
                :null
                }
                label={props.label}
            />
        </>
    );
  }