import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/loginform";
import Dashboard from "./components/dashboard";
import OTPForm from "./components/resetpasswordotp";
import OpeningPage from "./components/openingpage";
import NewPassword from "./components/NewPassword";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OpeningPage />} />
        <Route path="/loginform" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resetpasswordotp" element={<OTPForm />} />
        <Route path="/NewPassword" element={<NewPassword />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
