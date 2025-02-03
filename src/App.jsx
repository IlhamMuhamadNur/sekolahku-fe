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
import NotifAdmin from "./views/pages/notikasiAdmin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OpeningPage />} />
        <Route path="/login-form" element={<LoginForm />} />
        <Route path="/reset-password-otp" element={<OTPForm />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/data-admin" element={<DataAdmin />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/notifikasi-admin" element={<NotifAdmin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/e-book" element={<EBookPage />} />
        <Route path="/e-Raport" element={<ERaport />} />
      </Routes>
    </Router>
  );
}

export default App;
