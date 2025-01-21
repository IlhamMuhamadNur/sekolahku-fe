import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/login-form";
import AdminDashboard from "./components/AdminDashboard";
import ERaport from "./components/ERaport";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/" element={<ERaport />} />
      </Routes>
    </Router>
  );
}

export default App;
