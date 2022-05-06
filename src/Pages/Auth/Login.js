import {
    Stack,
    Box,
    Typography,
    Divider,
    TextField,
    styled,
    Button,
    InputAdornment,
    IconButton,
    FormControl,
    InputLabel,
    OutlinedInput,
  } from "@mui/material";
  import react, { useState } from "react";
  import { Link } from "react-router-dom";
  import bgImg from "../../Assets/Images/bg-collage.jpg";
  import blitheLogo from "../../Assets/logo/logo-blue.jpg";
  import { useThemeMode } from "../../Helpers/Context";
  // import { SwipeableStepper } from '../Shared';
  import "./Auth.css";
  import Visibility from "@mui/icons-material/Visibility";
  import VisibilityOff from "@mui/icons-material/VisibilityOff";
  import { Input } from "../Shared";
  
  
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
  
  const Login = () => {
  
    const [values, setValues] = useState({
      email: "",
      password: "",
      show_password: "false",
      button_disable: false,
      error: { username: null, password: null },
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value,
      });
    };
  
    const handleshowPassword = () => {
      setValues((prevState) => {
        return {
          ...prevState,
          show_password: prevState.show_password==='true' ? "false" : "true",
        };
      });
    };
  
    const handleLogin = (e) => {
      e.preventDefault();
      // console.log("handle login..");
      // console.log("values is:", values);
    };
  
    // console.log("values:",values);
  
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
              </Typography>
              <Typography variant="body2">
                Surgeon's Logbook for managing notes..
              </Typography>
              <Divider className="divider">LOGIN</Divider>
  
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
                  type={values.show_password === "true"? "text": "password"}
                  name={"password"}
                  value={values.password}
                  onChange={handleInputChange}
                  label="Password"
                  inputicon="true"
                  show_password={values.show_password}
                  handle_action = {handleshowPassword}
                />
              </FormControl>
  
              <Box>
                Don't have an account <Link to="/signup">Signup</Link>
              </Box>
              
              <Button variant="contained" type="submit">
                Login
              </Button>
            </form>
          </AuthContainer>
        </CustomStack>
      </>
    );
  };
  
  export default Login;
  