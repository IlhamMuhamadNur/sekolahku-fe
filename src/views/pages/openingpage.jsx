import { useEffect } from "react";
import { Typography, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function OpeningPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login-form");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Stack
      direction="column"
      spacing={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <img src="src/assets/image/logosmk.png" style={{ width: 120 }} />

      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontSize: 24,
          fontWeight: "bold",
          letterSpacing: 2,
          color: "#1976d2",
        }}
      >
        SMK NEGERI 1 KATAPANG
      </Typography>
    </Stack>
  );
}
