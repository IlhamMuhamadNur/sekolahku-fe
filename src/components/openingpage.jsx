import React, { useEffect } from "react";
import { Typography, Container, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function OpeningPage() {
  const navigate = useNavigate();

  //pindah ke halaman login setelah 5 detik
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/admindashboard");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Container
      maxWidth="xs"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <Box mb={2}>
        {" "}
        <img
          src="/src/assets/image/logosmk.png"
          style={{
            width: 120,
            height: "auto",
            marginBottom: -10,
            alignContent: "center",
          }}
        />
      </Box>

      <Typography
        variant="h4"
        gutterBottom
        sx={{
          textAlign: "center",
          fontSize: 24,
          fontWeight: "bold",
          letterSpacing: 2,
          color: "#1976d2",
          marginTop: 0,
        }}
      >
        SMK NEGERI 1 KATAPANG
      </Typography>
    </Container>
  );
}
