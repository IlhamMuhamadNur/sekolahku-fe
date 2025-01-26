import { useRef, useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  Snackbar,
  Alert,
  Link,
  Stack,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { IconStarFilled } from "@tabler/icons-react";
import axios from "axios";

export default function LoginForm() {
  const navigate = useNavigate();
  const passwordRef = useRef(null);
  const [payload, setPayload] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleSnackbarClose = () => setSnackbarOpen(false);

  const handlePasswordVisibility = () => setShowPassword((prev) => !prev);

  const handleChange = (e, key) =>
    setPayload((prev) => ({ ...prev, [key]: e.target.value }));

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://96b3-103-171-153-170.ngrok-free.app/api/users/login",
        { username: payload.username, password: payload.password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        console.log("Login berhasil:", response.data);
        localStorage.setItem("token", response.data.token);
        setSnackbarMessage("Login berhasil! Anda akan diarahkan ke dashboard.");
        setSnackbarSeverity("success");
        setSnackbarOpen(true);
        navigate("/admindashboard");
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

  const handleKeyDown = (e, field) => {
    if (e.key === "Enter") {
      if (field === "username") {
        passwordRef.current.focus();
      } else if (field === "password") {
        handleLogin();
      }
    }
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={snackbarOpen}
        onClose={handleSnackbarClose}
        key={"top" + "center"}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>

      <Box
        sx={{
          height: "100vh",
          background: "white",
          m: "auto",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "20%",
            height: "60%",
            bottom: "-10%",
            right: "3%",
            backgroundImage: `url('/src/assets/image/anak.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "493px",
            height: "480px",
            borderRadius: "25px",
            m: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              padding: 3,
              borderRadius: "25px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Stack
              direction="row"
              spacing={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: 7.5,
                mt: 2,
              }}
            >
              <IconStarFilled />
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 900,
                  textAlign: "center",
                  color: "#3D3F3F",
                }}
              >
                SEKOLAH SIMAK
              </Typography>
            </Stack>

            <Typography
              variant="body1"
              sx={{ mt: 3, ml: 7, color: "#273253", fontWeight: "bold" }}
            >
              Username
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <TextField
                required
                type="text"
                value={payload.username}
                onChange={(e) => handleChange(e, "username")}
                onKeyDown={(e) => handleKeyDown(e, "username")}
                sx={{
                  width: "360px",
                  height: "44px",
                  borderRadius: "90px",
                  border: "2px solid #273253",
                  "& .MuiInputBase-root": {
                    mt: "-6px",
                    mb: "10px",
                    ml: "15px",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                }}
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
                required
                inputRef={passwordRef}
                type={showPassword ? "text" : "password"}
                value={payload.password}
                onChange={(e) => handleChange(e, "password")}
                onKeyDown={(e) => handleKeyDown(e, "password")}
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={handlePasswordVisibility} edge="end">
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  ),
                }}
                sx={{
                  width: "360px",
                  height: "44px",
                  borderRadius: "90px",
                  border: "2px solid #273253",
                  "& .MuiInputBase-root": {
                    mt: "-6px",
                    mb: "10px",
                    ml: "15px",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                }}
              />
            </Box>

            <Button
              type="submit"
              variant="contained"
              sx={{
                width: "187.05px",
                height: "40px",
                borderRadius: "90px",
                display: "flex",
                justifyContent: "center",
                textTransform: "none",
                marginTop: "3rem",
                marginLeft: "auto",
                marginRight: "auto",
                backgroundColor: "#273253",
              }}
              onClick={handleLogin}
            >
              Login
            </Button>

            <Typography sx={{ textAlign: "center", marginTop: "1rem" }}>
              <Link
                href="/reset-passwordotp"
                underline="none"
                sx={{ color: "#273253" }}
              >
                Lupa Password?
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
