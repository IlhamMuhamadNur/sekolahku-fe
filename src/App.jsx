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
        <Route path="/loginform" element={<LoginForm />} />
        <Route path="/resetpasswordotp" element={<OTPForm />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/resetpasswordotp" element={<OTPForm />} />
        <Route path="/NewPassword" element={<NewPassword />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/ebook" element={<EBookPage />} />
        <Route path="/ERaport" element={<ERaport />} />
      </Routes>
    </Router>
  );
}

export default App;
