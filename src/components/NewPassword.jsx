import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Box, Typography } from "@mui/material";

const NewPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // untuk navigasi ke halaman OTP

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Kirim email ke server untuk verifikasi atau permintaan OTP
      const response = await axios.post(
        "https://api.example.com/request-otp", // Ganti URL sesuai dengan API yang digunakan
        formData
      );
      alert(response.data.message || "Cek email Anda untuk OTP!");
      navigate("/resetpasswordotp"); // Arahkan ke halaman OTP setelah mengirim permintaan
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "Terjadi kesalahan. Silakan coba lagi."
      );
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100vw",
        overflowY: "auto",
      }}
    >
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
          filter: "blur(2px)",
          zIndex: -1,
        }}
      />

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
          marginBottom={3}
          sx={{
            textDecoration: "underline",
          }}
        >
          Reset Password
        </Typography>
        <form onSubmit={handleSubmit}>
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
              mb: 2,
              "& .MuiInputLabel-asterisk": {
                color: "#e62222", //bintang merah
              },
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
            NEXT
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

export default NewPassword;
