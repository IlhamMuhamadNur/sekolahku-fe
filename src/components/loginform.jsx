import React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton,
  Link,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconStar } from "@tabler/icons-react"; // Import ikon bintang dari Tabler Icons

export default function LoginForm() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(120deg, #f5f5f5, #e8eaf6)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Shapes */}
      <Box
        sx={{
          position: "absolute",
          width: "80%",
          height: "80%",
          top: "10%",
          left: "10%",
          backgroundImage: `url(/path-to-your-background-shapes.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          zIndex: 0,
        }}
      ></Box>

      {/* Login Form */}
      <Box
        sx={{
          backgroundColor: "#fff",
          padding: "2rem",
          borderRadius: "16px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          zIndex: 1,
          width: "100%",
          maxWidth: 400,
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
          <IconStar size={24} strokeWidth={2} color="#1976d2" />{" "}
          {/* Ikon bintang */}
          <Typography
            variant="h5"
            component="h1"
            sx={{ fontWeight: "bold", textAlign: "center" }}
          >
            SEKOLAH SIMAK
          </Typography>
        </Box>

        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          defaultValue="simakdki"
        />

        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handlePasswordVisibility} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: "1rem", textTransform: "none" }}
        >
          Login
        </Button>

        <Typography
          sx={{ textAlign: "center", marginTop: "1rem", fontSize: "0.875rem" }}
        >
          <Link href="#" underline="none">
            Lupa Password?
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
