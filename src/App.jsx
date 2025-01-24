import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./views/pages/loginform";
import OTPForm from "./views/pages/resetpasswordotp";
import OpeningPage from "./views/pages/openingpage";
import AdminDashboard from "./views/pages/AdminDashboard";
import NewPassword from "./views/pages/NewPassword";
import Register from "./views/pages/Register";
import EBookPage from "./views/pages/ebook";
import ERaport from "./views/pages/ERaport";

function App() {
  return (
    <Router>
      <Routes>
      //
        <Route path="/" element={<OpeningPage />} />
        <Route path="/login-form" element={<LoginForm />} />
        <Route path="/reset-passwordotp" element={<OTPForm />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/e-book" element={<EBookPage />} />
        <Route path="/e-raport" element={<ERaport />} />
      </Routes>
    </Router>
  );
}

export default App;
