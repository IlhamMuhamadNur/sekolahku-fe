import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./views/pages/login-form";
import OTPForm from "./views/pages/reset-passwordotp";
import OpeningPage from "./views/pages/opening-page";
import AdminDashboard from "./views/pages/admin-dashboard";
import DataAdmin from "./views/pages/data-admin";
import NewPassword from "./views/pages/new-password";
import Register from "./views/pages/register";
import EBookPage from "./views/pages/e-book";
import ERaport from "./views/pages/e-raport";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OpeningPage />} />
        <Route path="/login-form" element={<LoginForm />} />
        <Route path="/reset-passwordotp" element={<OTPForm />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/data-admin" element={<DataAdmin />} />
        <Route path="/reset-passwordotp" element={<OTPForm />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/e-book" element={<EBookPage />} />
        <Route path="/e-raport" element={<ERaport />} />
      </Routes>
    </Router>
  );
}

export default App;
