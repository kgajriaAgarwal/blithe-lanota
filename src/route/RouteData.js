import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import MockAPI from "../Helpers/Common/MockMan";
import MainPage from "../Pages/MainPage";
import { NoMatch } from "../Pages/Shared";

const LoginPage = React.lazy(() => import("../Pages/Auth/Login"));
const SignUpPage = React.lazy(() => import("../Pages/Auth/SignUp"));

//Routing Data
const RouteData = () => {
  return (
    <Routes>
      <Route exact path="/signup" element={<SignUpPage />} />
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/mockman" element={<MockAPI />} />
      <Route path="/*" element={<MainPage />} />
    </Routes>
  );
};
export default RouteData;
