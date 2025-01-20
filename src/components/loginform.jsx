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
    navigate("/sign-up"); // ke halaman sign-up, dibikin visei
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleLogin(e) {
    e.preventDefault();
    const payload = { ...form };

    //kirim data login ke backend

    axios
      .post("backend login api url", payload) //ganti pakai url API loginnya, semangat be!
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("authtoken", response.data.token);
          navigate("/dashboard");
        } else {
          setErrorMessage("Username atau Password salah!");
        }
      })
      .catch((error) => {
        console.error("Login gagal:", error);

        setErrorMessage("Username atau Password salah!");
        setTimeout(() => setErrorMessage(""), 1000);
      });
  }
  function handleForgetPassword() {
    navigate("/resetpasswordotp"); //navigate ke halaman imputemail, dibikin visei
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: 0,
        padding: 0,
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url(/pict/smk.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.5)", // Putih dengan transparansi
        }}
      />
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          // Konten Anda
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            maxHeight: 435,
            maxWidth: 450,
            backgroundColor: "rgba(255, 255, 255, 1)",
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
                  color: "#e62222", //bintang merah
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
                  color: "#e62222", // bintang merah
                },
              }}
            />
            {errorMessage && (
              <Alert
                severity="error"
                sx={{
                  width: "100%",
                  maxHeight: "18%",
                  color: "red",
                  backgroundColor: "transparant",
                }}
              >
                {errorMessage}
              </Alert>
            )}
            <Typography
              variant="body2"
              sx={{
                color: "#2196f3",
                textDecoration: "underline",
                cursor: "pointer",
                mt: 0,
                mb: 2,
                textAlign: "right",
                width: "100%",
                maxWidth: 400,
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
                  fontWeight: "bold",
                }}
                onClick={handleSignUp}
              >
                Sign Up
              </span>
            </Typography>
          </form>
        </Box>
      </Box>
    </Box>
  );
}
//
