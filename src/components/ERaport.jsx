import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  CssBaseline,
  TextField,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Alert,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import { useNavigate } from "react-router-dom";

function ERaport({ userRole }) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarActive, setSidebarActive] = useState("Data Siswa");

  useEffect(() => {
    // Proteksi halaman: hanya guru yang bisa mengakses
    if (userRole && userRole !== "guru") {
      navigate("/unauthorized");
    }
  }, [userRole, navigate]);

  const handleLogout = () => {
    // Tambahkan logika logout di sini
    console.log("User logged out");
    navigate("/login");
  };

  // Dummy data siswa
  const siswaData = [
    { id: 1, nama: "Ahmad Fauzi", kelas: "X RPL 1", nis: "12345", gender: "L" },
    {
      id: 2,
      nama: "Siti Aisyah",
      kelas: "XII TKJ 3",
      nis: "67890",
      gender: "P",
    },
    {
      id: 3,
      nama: "Budi Santoso",
      kelas: "XI MM 2",
      nis: "54321",
      gender: "L",
    },
  ];

  // Filter data siswa berdasarkan pencarian
  const filteredSiswa = siswaData.filter(
    (siswa) =>
      siswa.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
      siswa.kelas.toLowerCase().includes(searchQuery.toLowerCase()) ||
      siswa.nis.includes(searchQuery)
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: 250,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 250,
            bgcolor: "#5b6993",
            color: "white",
          },
        }}
      >
        <Box sx={{ textAlign: "center", p: 2 }}>
          <Typography variant="h6" fontWeight="bold">
            AKUN GURU
          </Typography>
        </Box>
        <List>
          <ListItem disablePadding>
            <ListItemButton
              selected={sidebarActive === "Data Siswa"}
              onClick={() => setSidebarActive("Data Siswa")}
              sx={{
                bgcolor:
                  sidebarActive === "Data Siswa" ? "white" : "transparent",
                color: sidebarActive === "Data Siswa" ? "#5b6993" : "white",
                "&:hover": { bgcolor: "white", color: "#5b6993" },
              }}
            >
              <ListItemIcon>
                <PeopleIcon
                  sx={{
                    color: sidebarActive === "Data Siswa" ? "#5b6993" : "white",
                  }}
                />
              </ListItemIcon>
              <ListItemText primary="Data Siswa" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      {/* Konten Utama */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <AppBar position="static" sx={{ bgcolor: "white", boxShadow: 0 }}>
          <Toolbar>
            <img
              src="/src/assets/image/logosmk.png"
              alt="Logo SMK"
              style={{
                width: 50,
                height: 50,
                marginRight: 16,
                cursor: "pointer",
              }}
            />
            <Typography
              variant="h6"
              sx={{
                flexGrow: 1,
                fontWeight: "bold",
                color: "#20274b",
              }}
            >
              E - RAPORT SMKN 1 KATAPANG
            </Typography>
            <Button variant="contained" color="error" onClick={handleLogout}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>

        {/* Header Halaman */}
        <Typography variant="h5" fontWeight="bold" sx={{ mt: 2 }}>
          Data Siswa
        </Typography>

        {/* Search Bar */}
        <Box sx={{ mt: 2, mb: 2, textAlign: "right" }}>
          <TextField
            variant="outlined"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{ width: "30%", bgcolor: "white", borderRadius: 1 }}
          />
        </Box>

        {/* Tabel Data Siswa */}
        <Paper elevation={3} sx={{ borderRadius: 2 }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: "#5b6993" }}>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                    No.
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                    Nama
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                    Kelas
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                    NIS
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                    L/P
                  </TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredSiswa.map((siswa, index) => (
                  <TableRow key={siswa.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{siswa.nama}</TableCell>
                    <TableCell>{siswa.kelas}</TableCell>
                    <TableCell>{siswa.nis}</TableCell>
                    <TableCell>{siswa.gender}</TableCell>
                    <TableCell>
                      <Button
                        size="small"
                        sx={{ color: "#5b6993", fontWeight: "bold" }}
                      >
                        Lihat
                      </Button>
                      <Button
                        size="small"
                        sx={{ color: "#5b6993", fontWeight: "bold" }}
                      >
                        Hapus
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </Box>
  );
}

export default ERaport;
