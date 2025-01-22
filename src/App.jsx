import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/loginform";
<<<<<<< HEAD
=======
import OTPForm from "./components/resetpasswordotp";
import OpeningPage from "./components/openingpage";
>>>>>>> f6003fb2690121ee9ce0c85447bb7bf6a3f8d075
import AdminDashboard from "./components/AdminDashboard";
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
<<<<<<< HEAD
=======
        <Route path="/resetpasswordotp" element={<OTPForm />} />
>>>>>>> f6003fb2690121ee9ce0c85447bb7bf6a3f8d075
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
