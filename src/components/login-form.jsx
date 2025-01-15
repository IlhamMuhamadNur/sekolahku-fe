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

export default function LoginForm() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [showPass, setShowPass] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleLogin(e) {
    e.preventDefault();
    const payload = { ...form };

    //mengirim data login ke backend dengan menggunakan Axios

    axios
      .post("backend login api url", payload) //ganti pakai url API loginnya, semangat back end!
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("authtoken", response.data.token); //simpan token di local storage
          navigate("/dashboard");
        } else {
          setErrorMessage("Username atau Password salah!");
        }
      })
      .catch((error) => {
        console.error("Login gagal:", error);
        setErrorMessage("Username atau Password salah!");
      });
  }

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
          justifyContent: "center",
          width: "100%",
          maxWidth: 400,
          backgroundColor: "#ffff",
          padding: 3,
          borderRadius: "8px",
          boxShadow: "0 2px 20px rgba(0, 1, 1, 0.5)",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            mb: 3,
            textDecoration: "underline",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Login
        </Typography>
        <form onSubmit={handleLogin} style={{ width: "100%" }}>
          <TextField
            id="username"
            label="Username"
            name="username"
            variant="outlined"
            fullWidth
            value={form.username}
            onChange={handleChange}
            required
            autoComplete="username"
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
                backgroundColor: "#1565c0",
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
