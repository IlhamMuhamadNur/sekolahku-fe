import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Typography,
  Alert,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoginForm() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [showPass, setShowPass] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const payload = { ...form };

    // Mengirim data login ke backend menggunakan axios
    axios
      .post("https://your-backend-api.com/api/login", payload) // Ganti dengan URL backend Anda
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("authToken", response.data.token); // Simpan token di localStorage
          navigate("/dashboard"); // Arahkan ke halaman dashboard setelah login berhasil
        } else {
          setErrorMessage("Username atau Password salah!");
        }
      })
      .catch((error) => {
        console.error("Login gagal:", error);
        setErrorMessage("Username atau Password salah!");
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f4f4f4",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          maxWidth: 400,
          backgroundColor: "#fff",
          padding: 3,
          borderRadius: "8px",
          boxShadow: "0 10px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="h4"
          sx={{ mb: 3, textDecoration: "underline", fontWeight: "bold" }}
        >
          Login
        </Typography>
        <form onSubmit={handleLogin} style={{ width: "100%" }}>
          <TextField
            label="Username"
            name="username"
            variant="outlined"
            fullWidth
            value={form.username}
            onChange={handleChange}
            required
            sx={{ mb: 2 }}
          />
          <TextField
            label="Password"
            name="password"
            variant="outlined"
            type={showPass ? "text" : "password"}
            fullWidth
            value={form.password}
            onChange={handleChange}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPass(!showPass)}>
                    {showPass ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ mb: 6 }}
          />
          {errorMessage && (
            <Alert severity="error" sx={{ mb: 2, width: "350px" }}>
              {errorMessage}
            </Alert>
          )}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#2196f3",
              "&:hover": {
                backgroundColor: "#1565c0", // Ganti dengan warna yang diinginkan
                cursor: "pointer",
              },
            }}
          >
            Login
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default LoginForm;
