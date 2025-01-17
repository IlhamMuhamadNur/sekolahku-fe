import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/loginform";
import Dashboard from "./components/dashboard";
import OTPForm from "./components/resetpasswordotp";
import OpeningPage from "./components/openingpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OpeningPage />} />
        <Route path="/loginform" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resetpasswordotp" element={<OTPForm />} />
      </Routes>
    </Router>
  );
}

export default App;
