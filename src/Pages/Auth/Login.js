import {
  Box,
  Typography,
  Divider,
  styled,
  Button,
  FormControl,
  FormHelperText,
} from "@mui/material";
import react, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";
import { Input } from "../Shared";
import { actionLogin } from "../../Helpers/Services/actions";
import { showErrorToast, showSuccessToast } from "../../Helpers/Common/Utils";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { validateLogin } from "../../Helpers/Validations";

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
  const navigate = useNavigate();
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
        show_password: prevState.show_password === "true" ? "false" : "true",
      };
    });
  };

  // Call on Form Submit
  const validateForm = (event, type) => {
    event.preventDefault();
    let validate = validateLogin({
      username: values.email,
      password: values.password,
    });
    setValues((prevState) => {
      return {
        ...prevState,
        error: validate.errors,
      };
    });
    if (validate.isValid) handleLogin(event, type);
  };


  const handleLogin = async (e, type) => {
    e.preventDefault();

    let login_Data = {};

    if (type === "test") {
      login_Data = {
        email: "adarshbalika@gmail.com",
        password: "adarshBalika123",
      };
    } else {
      login_Data = { email: values.email, password: values.password };
    }

    actionLogin(login_Data)
      .then((response) => {
        if (response.data && response.status === 200) {
          showSuccessToast("Login success..");
          navigate("/");
        }else if(response.data && response.status === 404){
          showErrorToast("The email you entered is not Registered")
        }
        else {
          showErrorToast("Unexpected error.Login Failed");
        }
      })
      .catch((response) => {
        if (response.data && response.data.error) {
          showErrorToast("Unexpected error.Login Failed");
        }
      });
  };

  useEffect(
    () =>
      setTimeout(
        () =>
          setValues((prevState) => {
            return {
              ...prevState,
              error: { username: null, password: null },
            };
          }),
        10000
      ),
    [values.error]
  );

  return (
    <>
      <CustomStack>
        <img
          src={
            "https://i.pinimg.com/originals/10/6f/bc/106fbc8a53b213141419ed6fb598ada7.gif"
          }
          alt="bg-img"
          className="bg-img"
        />
        <AuthContainer>
          <form
            className="auth-form"
            //onSubmit={(e) => handleLogin(e)}
            noValidate
            onSubmit={(e) => validateForm(e, "user")}
          >
            <Typography variant="h6" sx={{ color: "secondary" }} mt={2}>
              Blithe-la nota
            </Typography>
            <Typography variant="body2">
              Surgeon's Logbook for managing notes..
            </Typography>
            <Divider className="divider">LOGIN</Divider>

            <FormControl variant="outlined" className="input" size="small">
              <Input
                error={values.error.username !== null ? true : false}
                type="email"
                name={"email"}
                value={values.email}
                onChange={handleInputChange}
                label="Email"
                inputicon="false"
              />
              <FormHelperText id="my-helper-text" sx={{ color: "red" }}>
                {values.error.username}
              </FormHelperText>
            </FormControl>

            <FormControl
              sx={{ m: 1, width: "25ch" }}
              variant="outlined"
              className="input"
              size="small"
            >
              <Input
                error={values.error.password !== null ? true : false}
                type={values.show_password === "true" ? "text" : "password"}
                name={"password"}
                value={values.password}
                onChange={handleInputChange}
                label="Password"
                inputicon="true"
                show_password={values.show_password}
                handle_action={handleshowPassword}
              />
              <FormHelperText id="my-helper-text" sx={{ color: "red" }}>
                {values.error.password}
              </FormHelperText>
            </FormControl>

            <Box>
              Don't have an account <Link to="/signup">Signup</Link>
            </Box>

            <Button variant="contained" type="submit">
              Login
            </Button>

            <Divider />
            <Button variant="contained" onClick={(e) => handleLogin(e, "test")}>
              Login with test credententials
            </Button>
          </form>
        </AuthContainer>
      </CustomStack>
    </>
  );
};

export default Login;
