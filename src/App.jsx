import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/loginform";
import Dashboard from "./components/dashboard";
import OTPForm from "./components/resetpasswordotp";
import OpeningPage from "./components/openingpage";
import NewPassword from "./components/NewPassword";
import Register from "./components/Register";
import EBookPage from "./components/ebook";
import ERaport from "./components/ERaport";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OpeningPage />} />
        <Route path="/loginform" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
