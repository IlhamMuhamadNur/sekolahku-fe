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

  function handleSignUp() {
    navigate("/sign-up"); // Arahkan ke halaman sign-up
  }
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
  function handleForgetPassword() {
    navigate("/forget-password");
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: 0, // Hapus margin default
        padding: 0, // Hapus padding default
        backgroundImage: "url(/pict/smk.jpg)", // Gunakan gambar sebagai background
        backgroundSize: "cover", // Menjaga gambar menutupi seluruh area tanpa distorsi
        backgroundPosition: "center", // Posisikan gambar di tengah
        backgroundAttachment: "fixed", // Agar gambar latar belakang tidak bergerak saat halaman di-scroll
        position: "absolute", // Agar Box menutupi seluruh halaman
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden", // Menjaga tampilan agar tidak bisa zoom in/out
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          maxHeight: 400,
          maxWidth: 400,
          backgroundColor: "rgba(255, 255, 255, 0.9)",
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
            sx={{
              mb: 2,
              "& .MuiInputLabel-asterisk": {
                color: "#e62222", // Mengubah warna bintang menjadi merah
              },
            }}
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
            sx={{
              mb: 2,
              "& .MuiInputLabel-asterisk": {
                color: "#e62222", // Mengubah warna bintang menjadi merah
              },
            }}
          />
          {errorMessage && (
            <Alert severity="error" sx={{ mb: 2, width: "350px" }}>
              {errorMessage}
            </Alert>
          )}
          <Typography
            variant="body2"
            fullWidth
            sx={{
              color: "#2196f3",
              textDecoration: "underline",
              cursor: "pointer",
              mt: 0,
              mb: 2,
              textAlign: "right",
            }}
            onClick={handleForgetPassword}
          >
            Forget Password?
          </Typography>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              fontWeight: "bold",
              backgroundColor: "#2196f3",
              "&:hover": {
                backgroundColor: "#1565c0",
              },
            }}
          >
            Login
          </Button>
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              color: "#000000",
              mt: 2.5,
            }}
          >
            Don't have an account?{" "}
            <span
              style={{
                color: "#2196f3",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={handleSignUp} // Klik untuk menuju halaman sign-up
            >
              Sign Up
            </span>
          </Typography>
        </form>
      </Box>
    </Box>
  );
}
