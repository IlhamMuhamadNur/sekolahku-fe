import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Box,
  Typography,
  IconButton,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    role: "",
    nama: "",
    kelas: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // API belum dirubah
      const response = await axios.post(
        "https://api.example.com/register",
        formData
      );
      alert(response.data.message || "Registration successful!");
      // Reset form
      setFormData({
        username: "",
        role: "",
        nama: "",
        kelas: "",
        email: "",
        password: "",
      });
      setErrorMessage("");
    } catch (error) {
      // Tangkap error dari server
      setErrorMessage(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  return (
    <Box
      sx={{
        height: "100%",
        width: "100vw",
        overflowY: "auto",
      }}
    >
      {/* Layer untuk latar belakang blur */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(/pict/smk.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1, // Pastikan layer ini berada di belakang
        }}
      />

      {/* Konten di atas latar belakang */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 400,
          margin: "auto",
          marginTop: "5%",
          marginBottom: "5%",
          padding: 3,
          border: "1px solid #ddd",
          borderRadius: 2,
          boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
          textAlign: "center",
          backgroundColor: "#fff",
          position: "relative",
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          marginBottom={0}
          sx={{
            textDecoration: "underline",
          }}
        >
          Register
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            type="number"
            label="NISN/NIP"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            margin="dense"
            required
            sx={{
              "& .MuiInputLabel-asterisk": {
                color: "#e62222", //bintang merah
              },
            }}
          />
          <FormControl
            fullWidth
            margin="dense"
            required
            sx={{
              "& .MuiInputLabel-asterisk": {
                color: "#e62222", //bintang merah
              },
            }}
          >
            <InputLabel>Role</InputLabel>
            <Select
              fullWidth
              label="Role"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              margin="dense"
            >
              <MenuItem value="guru">Guru</MenuItem>
              <MenuItem value="siswa">Siswa</MenuItem>
            </Select>
          </FormControl>
          <TextField
            fullWidth
            label="Nama"
            name="nama"
            value={formData.nama}
            onChange={handleInputChange}
            margin="dense"
            required
            sx={{
              "& .MuiInputLabel-asterisk": {
                color: "#e62222", //bintang merah
              },
            }}
          />
          {formData.role === "siswa" && (
            <TextField
              fullWidth
              label="Kelas"
              name="kelas"
              value={formData.kelas}
              onChange={handleInputChange}
              margin="dense"
            />
          )}
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            margin="dense"
            required
            sx={{
              "& .MuiInputLabel-asterisk": {
                color: "#e62222", //bintang merah
              },
            }}
          />
          <TextField
            fullWidth
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleInputChange}
            margin="dense"
            required
            sx={{
              "& .MuiInputLabel-asterisk": {
                color: "#e62222", //bintang merah
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={togglePasswordVisibility} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {errorMessage && (
            <Typography color="error" variant="body2" marginBottom={1}>
              {errorMessage}
            </Typography>
          )}
          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#007bff",
              flex: 1,
            }}
          >
            REGISTER
          </Button>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginTop={1}
          >
            <Typography variant="body2">Have account?</Typography>
            <Link to="/loginform" style={{ textDecoration: "none" }}>
              <Typography
                variant="body2"
                marginLeft={1}
                color="primary"
                sx={{ textDecoration: "underline", fontWeight: "bold" }}
              >
                Log in
              </Typography>
            </Link>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Register;
