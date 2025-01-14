import React, { useState, useEffect } from "react";
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

axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((response) => console.log(response.data))
  .catch((error) => console.error("Error:", error));

function LoginForm() {
  const [username, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [showPass, setSp] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    if (username === "user" && pass === "user123") {
      navigate("/dashboard");
    } else {
      setErrorMessage("Username atau Password salah!");
    }
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
        <Typography variant="h4" sx={{ mb: 3 }}>
          Login
        </Typography>

        <form onSubmit={handleLogin} style={{ width: "100%" }}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            value={username}
            onChange={(e) => setUser(e.target.value)}
            required
            sx={{ mb: 2 }}
          />
          <TextField
            label="Password"
            variant="outlined"
            type={showPass ? "text" : "password"}
            fullWidth
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setSp(!showPass)}>
                    {showPass ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ mb: 6 }}
          />
          {errorMessage && (
            <Alert severity="error" sx={{ mb: 2, width: "350px" }}>
              Username atau Password salah!
            </Alert>
          )}
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default LoginForm;
