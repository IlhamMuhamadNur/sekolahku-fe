import React, { useRef } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton,
  Snackbar,
  Alert,
  Link,
} from "@mui/material";
import { Visibility, VisibilityOff, Star } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginForm() {
  const navigate = useNavigate();
  const passwordRef = useRef(null);
  const [showPassword, setShowPassword] = React.useState(false);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState("");
  const [snackbarSeverity, setSnackbarSeverity] = React.useState("success");

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleLogin = async () => {
    const username = document.querySelector("input[type='text']").value;
    const password = passwordRef.current.value;

    try {
      const response = await axios.post("https://api.example.com/login", {
        username,
        password,
      });

      if (response.status === 200) {
        console.log("Login berhasil:", response.data);
        localStorage.setItem("token", response.data.token);
        setSnackbarMessage("Login berhasil! Anda akan diarahkan ke dashboard.");
        setSnackbarSeverity("success");
        setSnackbarOpen(true);
        navigate("/dashboard");
      } else {
        setSnackbarMessage("Login gagal! Periksa username dan password Anda.");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      setSnackbarMessage("Terjadi kesalahan saat login. Silakan coba lagi.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const handlePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      passwordRef.current.focus();
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "white",
        position: "relative",
        overflow: "hidden",
        margin: 0,
        padding: 0,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          width: "20%",
          height: "60%",
          bottom: "-10%",
          right: "3%",
          backgroundImage: `url('/pict/anak.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
          pointerEvents: "none",
        }}
      ></Box>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "493px",
          height: "480px",
          borderRadius: "20px",
          zIndex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#fff",
            padding: "2rem",
            borderRadius: "8%",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
            width: "100%",
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "1rem",
            }}
          >
            <Star sx={{ color: "#3D3F3F", mb: 5, mt: 2 }} />
            <Typography
              variant="h5"
              component="h1"
              sx={{
                mb: 5,
                mt: 2,
                fontWeight: 900,
                textAlign: "center",
                color: "#3D3F3F",
                fontFamily: "'Roboto', sans-serif",
              }}
            >
              SEKOLAH SIMAK
            </Typography>
          </Box>

          <Typography
            variant="body1"
            sx={{ mt: 3, ml: 7, color: "#273253", fontWeight: "bold" }}
          >
            Username
          </Typography>
          <Box
            sx={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <TextField
              sx={{
                width: "360px",
                height: "44px",
                borderRadius: "90px ",
                border: "2px solid #273253",
                "& .MuiInputBase-root": {
                  borderRadius: "90px",
                  fontSize: "15px",
                  fontFamily: "'Roboto', sans-serif",
                  mt: "-6px",
                  mb: "10px",
                  ml: "15px",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
              required
              onKeyDown={handleKeyDown}
            />
          </Box>

          <Typography
            variant="body1"
            sx={{ mt: 3, ml: 7, color: "#273253", fontWeight: "bold" }}
          >
            Password
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              alignItems: "center",
            }}
          >
            <TextField
              sx={{
                width: "360px",
                height: "44px",
                borderRadius: "90px",
                border: "2px solid #273253",
                "& .MuiInputBase-root": {
                  borderRadius: "90px",
                  fontSize: "15px",
                  fontFamily: "'Roboto', sans-serif",
                  mt: "-6px",
                  mb: "10px",
                  ml: "15px",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
              required
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  passwordRef.current.focus(); // Pindah fokus ke kolom Password
                }
              }}
              inputRef={passwordRef}
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" sx={{ mt: 1.5 }}>
                    <IconButton
                      onClick={handlePasswordVisibility}
                      edge="end"
                      sx={{ marginTop: "-16px" }}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                    <Snackbar
                      open={snackbarOpen}
                      autoHideDuration={3000}
                      onClose={handleSnackbarClose}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                      }}
                    >
                      <Alert
                        onClose={handleSnackbarClose}
                        severity={snackbarSeverity}
                        sx={{ width: "100%" }}
                      >
                        {snackbarMessage}
                      </Alert>
                    </Snackbar>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Button
            variant="contained"
            color="primary"
            sx={{
              width: "187.05px",
              height: "40px",
              borderRadius: "90px",
              marginTop: "3rem",
              textTransform: "none",
              display: "flex",
              justifyContent: "center",
              marginLeft: "auto",
              marginRight: "auto",
              backgroundColor: "#273253",
            }}
            onClick={handleLogin}
          >
            Login
          </Button>
          <Typography sx={{ textAlign: "center", marginTop: "1rem" }}>
            <Link href="#" underline="none" sx={{ color: "#273253" }}>
              Lupa Password?
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
