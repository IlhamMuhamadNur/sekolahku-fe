import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  CssBaseline,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  function handleOp() {
    navigate("/");
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <Toolbar></Toolbar>
      <AppBar position="static" sx={{ bgcolor: "#5b6993 " }}>
        <Toolbar>
          <img
            src="pict/logosmk.png" // Akses file dari folder public
            style={{
              width: 50,
              height: 50,
              marginRight: 16,
              cursor: "pointer",
            }}
            onClick={handleOp}
          />
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              letterSpacing: 2,
              color: "#20274b",
              cursor: "pointer",
            }}
            onClick={handleOp}
          >
            SMK NEGERI 1 KATAPANG
          </Typography>
          <Button
            color="inherit"
            sx={{
              color: "#20274b",
              fontWeight: "bold",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Beranda
          </Button>
          <Button
            color="inherit"
            sx={{
              color: "#20274b",
              fontWeight: "bold",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Profile
          </Button>
          <Button
            color="inherit"
            sx={{
              color: "#20274b",
              fontWeight: "bold",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Program Keahlian
          </Button>
          <Button
            color="inherit"
            sx={{
              color: "#20274b",
              fontWeight: "bold",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Media
          </Button>
          <Button
            color="inherit"
            sx={{
              color: "#20274b",
              fontWeight: "bold",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            PPDB
          </Button>
          <Button
            color="inherit"
            sx={{
              color: "#20274b",
              fontWeight: "bold",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Akses
          </Button>
        </Toolbar>
      </AppBar>

      {/* Konten */}
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          SMK NEGERI 1 KATAPANG
        </Typography>

        {/* Statistik */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                bgcolor: "#5b6993",
                p: 2,
                textAlign: "center",
                borderRadius: 2,
                boxShadow: 1,
              }}
            >
              <Typography variant="h6">Total Siswa</Typography>
              <Typography variant="h4">1,200</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                bgcolor: "#5b6993",
                p: 2,
                textAlign: "center",
                borderRadius: 2,
                boxShadow: 1,
              }}
            >
              <Typography variant="h6">Total Guru</Typography>
              <Typography variant="h4">85</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                bgcolor: "#5b6993",
                p: 2,
                textAlign: "center",
                borderRadius: 2,
                boxShadow: 1,
              }}
            >
              <Typography variant="h6">Kelas Aktif</Typography>
              <Typography variant="h4">42</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                bgcolor: "#5b6993",
                p: 2,
                textAlign: "center",
                borderRadius: 2,
                boxShadow: 1,
              }}
            >
              <Typography variant="h6">Prestasi</Typography>
              <Typography variant="h4">130+</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
