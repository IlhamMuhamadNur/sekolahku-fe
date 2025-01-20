import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button, Typography, Alert, Grid } from "@mui/material";
import axios from "axios";

export default function OTPForm() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]); //ada 6 digit angka
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [timer, setTimer] = useState(300); //timer 5 menit atau 300 detik
  const [otpExpired, setOtpExpired] = useState(false); //status otp expired

  const navigate = useNavigate();

  // Mengatur timer
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(timer - 1), 1000);
      return () => clearInterval(interval);
    } else {
      setOtpExpired(true); //otp akan kadaluwarsa jika waktu habis
    }
  }, [timer]);

  //function input otp
  const handleOtpChange = (e, index) => {
    const value = e.target.value;

    if (!/^\d*$/.test(value)) return; //hanya bisa input angka

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    //fokus ke input berikutnya
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  //function kirim otp ke server (semangat be!)
  const handleSubmit = async (/*e*/) => {
    //e.preventDefault;
    const otpCode = otp.join("");

    try {
      const response = await axios.post("API LINK OTP", { otp: otpCode });
      setMessage(response.data.message);
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "OTP is incorrect or expired!");
      setMessage("");
    }
  };

  function handleSignIn() {
    navigate("loginform"); //navigasi ke login
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
          <Typography variant="h5" align="center" fontWeight="bold">
            Verify OTP
          </Typography>
          <Typography variant="body2" align="center" mb={2}>
            Enter the OTP sent to your email
          </Typography>

          {/* Form Input OTP */}
          <form onSubmit={handleSubmit}>
            <Grid container spacing={1} justifyContent="center">
              {otp.map((digit, index) => (
                <Grid item key={index}>
                  <TextField
                    id={`otp-${index}`}
                    value={digit}
                    onChange={(e) => handleOtpChange(e, index)}
                    inputProps={{ maxLength: 1 }}
                    sx={{ width: 50 }}
                    variant="outlined"
                    size="small"
                    type="text"
                    disabled={otpExpired}
                    autoFocus={index === 0}
                  />
                </Grid>
              ))}
            </Grid>

            {/* Pesan sukses atau error */}
            {message && <Alert severity="success">{message}</Alert>}
            {error && <Alert severity="error">{error}</Alert>}

            {/* Pesan OTP kedaluwarsa */}
            {otpExpired && (
              <Typography color="error" align="center" mt={2}>
                OTP expired. Please request a new one.
              </Typography>
            )}

            {/* Timer */}
            <Typography
              align="center"
              mt={2}
              color={otpExpired ? "red" : "green"}
              fontWeight="bold"
            >
              Time left: {Math.floor(timer / 60)}:
              {String(timer % 60).padStart(2, "0")}
            </Typography>

            {/* Tombol Verifikasi */}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={otpExpired}
              sx={{ mt: 2 }}
            >
              Verify OTP
            </Button>
            <Typography
              variant="body2"
              sx={{
                textAlign: "center",
                color: "#000000",
                mt: 2.5,
              }}
            >
              Already have an account?{" "}
              <span
                style={{
                  color: "#2196f3",
                  textDecoration: "underline",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
                onClick={handleSignIn}
              >
                Sign In
              </span>
            </Typography>
          </form>
        </Box>
      </Box>
    </Box>
  );
}
