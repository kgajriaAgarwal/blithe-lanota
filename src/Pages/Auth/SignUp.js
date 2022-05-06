import {  
    Box,
    Typography,
    Divider,  
    styled,
    Button,
    FormControl,
  } from "@mui/material";
  import { Link } from "react-router-dom";
  import { useThemeMode } from "../../Helpers/Context";
  // import { SwipeableStepper } from '../Shared';
  import "./Auth.css";
  import { Input } from "../Shared";
  import { useState } from "react";
  
  
  // CODE IS COMMENTED IN THIS FILE FOR FUTURE PERSPECTIVE ONLY 
  const InputBox = styled(Box)(({ theme }) => ({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "10px",
    }));
  
    const CustomStack = styled(Box)(({ theme }) => ({
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      color:
      theme.palette.mode === "light"
          ? theme.palette.primary
          : theme.palette.text.primary,
      [theme.breakpoints.down("sm")]: {
        position: "relative",
        zIndex: 2,
      },
    }));
  
    const AuthContainer = styled(Box)(({ theme }) => ({
      backgroundColor:
        theme.palette.mode === "light"
          ? theme.palette.Background.primary
          : theme.palette.background.default,
      color: theme.palette.text.secondary,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "5px",
      width: "35%",
      height: "90%",
      margin: "5px",
      [theme.breakpoints.down("sm")]: {
        position: "absolute",
        zIndex: 2,
        width: "80%",
        backgroundColor:
          theme.palette.mode === "light"
            ? theme.palette.background.primary
            : theme.palette.background.default,
        opacity: 0.9,
        height: "80%",
      },
    }));
  
  
  const SignUp = () => {
    const { themeMode } = useThemeMode();
  
  
    const [values, setValues] = useState({
      last_name:"",
      first_name: "",
      email: "",
      password: "",
      confirm_password:"",
      show_password: "false",
      show_confirm_password: "false",
      button_disable: false,
      error: { username: null, password: null },
    });
  
    const handleshowPassword = (val) => {
      if(val === "password"){
        setValues((prevState) => {
        return {
          ...prevState,
          show_password: prevState.show_password==='true' ? "false" : "true",
        };
        });
      }else{
        setValues((prevState) => {
        return {
          ...prevState,
          show_confirm_password: prevState.show_confirm_password==='true' ? "false" : "true",
        };
        });
      }
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value,
      });
    };
  
    return (
      <>
        <CustomStack>
          {/* <SwipeableStepper/> */}
          <img
            src={"https://i.pinimg.com/originals/10/6f/bc/106fbc8a53b213141419ed6fb598ada7.gif"}
            alt="bg-img"
            className="bg-img"
          />
          <AuthContainer>
              <form className="auth-form" onSubmit={(e) => handleLogin(e)}>
            <Typography variant="h6" sx={{ color: "secondary" }} mt={2}>
                 Blithe-la nota
              <br />
              <span></span>
            </Typography>
            <Typography variant="body2">
              Surgeon's Logbook for managing notes..
            </Typography>
            <Divider className="divider">SIGNUP</Divider>
  
            <FormControl variant="outlined" className="input" size="small">
                <Input
                  type="text"
                  name="first_name"
                  value={values.first_name}
                  onChange={handleInputChange}
                  label="First name"
                  inputicon="false"
                />
              </FormControl>
              <FormControl variant="outlined" className="input" size="small">
                <Input
                  type="text"
                  name={"last_name"}
                  value={values.last_name}
                  onChange={handleInputChange}
                  label="Last name"
                  inputicon="false"
                />
              </FormControl>
              <FormControl variant="outlined" className="input" size="small">
                <Input
                  type="email"
                  name={"email"}
                  value={values.email}
                  onChange={handleInputChange}
                  label="Email"
                  inputicon="false"
                />
              </FormControl>
              <FormControl
                sx={{ m: 1, width: "25ch" }}
                variant="outlined"
                className="input"
                size="small"
              >
                <Input
                  id="password"
                  type={values.show_password === "true"? "text": "password"}
                  name={"password"}
                  value={values.password}
                  onChange={handleInputChange}
                  label="Password"
                  inputicon="true"
                  show_password={values.show_password}
                  handle_action = {()=> handleshowPassword("password")}
                />
              </FormControl>
              <FormControl
                sx={{ m: 1, width: "25ch" }}
                variant="outlined"
                className="input"
                size="small"
              >
                <Input
                  id="confirm-password"
                  type={values.show_confirm_password === "true"? "text": "password"}
                  name={"confirm_password"}
                  value={values.confirm_password}
                  onChange={handleInputChange}
                  label="Confirm Password"
                  inputicon="true"
                  show_confirm_password={values.show_confirm_password}
                  handle_action = {()=> handleshowPassword("confirm_password")}
                />
              </FormControl>
              <Box>
                Have an account ?? <Link to="/login">Login</Link>
              </Box>
              <Button variant="contained" type="submit">SignUp</Button>
            </form>
          </AuthContainer>
        </CustomStack>
      </>
    );
  };
  
  export default SignUp;
  