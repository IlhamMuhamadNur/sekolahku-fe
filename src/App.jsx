import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OTPForm from "./views/pages/authentication/resetPassOTP";
import OpeningPage from "./views/pages/openingPage";
import AdminDashboard from "./views/pages/dashboard/adminDashboard";
import DataAdmin from "./views/pages/DataAdmin";
import Register from "./views/pages/authentication/register";
import EBookPage from "./views/pages/ebook";
import ERaport from "./views/pages/eRaport";
import LoginForm from "./views/pages/authentication/loginForm";
import NewPassword from "./views/pages/authentication/newPassword";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={Theme(customization)}>
        <CssBaseline />
        <NavigationScroll>
          <>
            <ThemeRoutes />
            <Snackbar />
          </>
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
