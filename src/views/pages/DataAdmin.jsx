import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
  Modal,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import { Home as HomeIcon, School as SchoolIcon } from "@mui/icons-material";

const DataAdmin = () => {
  const [activePage, setActivePage] = useState("beranda"); // Menyimpan halaman aktif
  const [isModalOpen, setIsModalOpen] = useState(false); // Menyimpan status modal

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const menuItems = [
    { text: "Beranda", icon: <HomeIcon />, key: "beranda" },
    { text: "Siswa", icon: <SchoolIcon />, key: "siswa" },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
      }}
    >
      {/* Sidebar */}
      <Box
        sx={{
          width: 230,
          backgroundColor: "#FAFAFA !important",
          color: "#3D3F3F",
          padding: 2,
          borderRadius: "20px",
          margin: 2,
          marginRight: 0,
          boxShadow: "0px 4px 10px rgba(0,0,0,0.4)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box sx={{ textAlign: "center", marginBottom: 2 }}>
          {/* Logo Sekolah */}
          <img
            src="src/assets/image/logosmk.png"
            alt="Logo Sekolah"
            style={{ width: "100px", height: "auto", marginBottom: "8px" }}
          />
          <Typography variant="h6" fontWeight="bold">
            MOCKUP LOGO
          </Typography>
          <Typography variant="caption">Tahun Pelajaran 2020-2021</Typography>
        </Box>

        {/* Profil Admin dalam Box */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: 1,
            borderRadius: "10px",
            boxShadow: "0px 3px 7px rgba(0, 0, 0, 0.27)",
            marginBottom: 2,
            cursor: "pointer",
          }}
          onClick={handleOpenModal}
        >
          <Avatar src="/admin-avatar.png" sx={{ marginRight: 2 }} />
          <Box>
            <Typography variant="body2">adminsekolah</Typography>
            <Typography variant="body2" color="gray">
              ADMIN
            </Typography>
          </Box>
        </Box>
        <Modal
          open={isModalOpen}
          onClose={handleCloseModal}
          BackdropProps={{ style: { backgroundColor: "transparent" } }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "370px",
              left: "180px",
              transform: "translate(-50%, -50%)",
              width: 135,
              height: 130,
              bgcolor: "background.paper",
              borderRadius: "15px",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.3)",
              p: 3,
              outline: "none",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                cursor: "pointer",
                mb: 2,
                "&:hover": { color: "primary.main" },
              }}
              onClick={() => alert("Lihat Profile diklik!")}
            >
              Notifikasi
            </Typography>
            <Divider
              sx={{
                backgroundColor: "black",
                mb: 2,
              }}
            />

            <Typography
              variant="body2"
              sx={{
                cursor: "pointer",
                mb: 2,
                "&:hover": { color: "primary.main" },
              }}
              onClick={() => alert("Lihat Profile diklik!")}
            >
              Lihat Profile
            </Typography>
            <Divider sx={{ backgroundColor: "black", mb: 2 }} />

            <Typography
              variant="body2"
              sx={{
                cursor: "pointer",
                "&:hover": { color: "primary.main" },
              }}
              onClick={() => {
                // Logika logout
                console.log("Log Out diklik!");
                window.location.href = "/login-form"; // Arahkan ke halaman login
              }}
            >
              Log Out
            </Typography>
          </Box>
        </Modal>
        {/* Menu Sidebar */}
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.key}
              onClick={() => setActivePage(item.key)}
              sx={{
                backgroundColor:
                  activePage === item.key ? "#FAFAFA" : "transparent",
                color: activePage === item.key ? "#3D3F3F" : "#3D3F3F",
                borderRadius: "10px",
                marginBottom: 1,
                boxShadow:
                  activePage === item.key
                    ? "0px 4px 10px rgba(0,0,0,0.2)"
                    : "none",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  backgroundColor: "#FAFAFA",
                  color: "#3D3F3F",
                  boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
                },
              }}
            >
              <ListItemIcon sx={{ color: "inherit" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Box>
      {/* Main Content */}
      <Box sx={{ flex: 1, padding: 5, overflowY: "auto" }}>
        {/* background image */}
        <Box
          sx={{
            flex: 1,
            position: "absolute",
            top: 60,
            left: 0,
            right: 0,
            bottom: "calc(-15px)",
            backgroundImage: "url('src/assets/image/bg.png')", // Path gambar
            backgroundSize: "cover", // Menyesuaikan gambar agar penuh
            backgroundPosition: "center", // Posisi gambar di tengah
            backgroundRepeat: "no-repeat", // Mencegah pengulangan
          }}
        >
          {/* box biodata */}
          <Box
            sx={{
              backgroundColor: "#FFF",
              padding: 3,
              borderRadius: "15px",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
              maxWidth: 700,
              marginLeft: "310px",
            }}
          >
            <Typography variant="h5" fontWeight="bold" mb={3}>
              Bio Data
            </Typography>
            <Box display="flex" alignItems="center" mb={3}>
              <Avatar
                src="/admin-avatar.png"
                sx={{ width: 100, height: 100, marginRight: 3 }}
              />
              <Box>
                <Button variant="contained" component="label">
                  Unggah Foto
                  <input hidden accept="image/*" type="file" />
                </Button>
              </Box>
            </Box>
            <Box
              component="form"
              display="grid"
              gridTemplateColumns="repeat(2, 1fr)"
              gap={2}
            >
              <TextField
                label="Nama"
                fullWidth
                sx={{ gridColumn: "span 2", borderRadius: "50px" }}
              />
              <TextField
                label="Telepon"
                fullWidth
                sx={{ borderRadius: "50px" }}
              />
              <TextField
                label="Username"
                fullWidth
                sx={{ borderRadius: "50px" }}
              />
              <TextField
                label="Tanggal Lahir"
                fullWidth
                sx={{ borderRadius: "50px" }}
              />
              <TextField
                label="Email"
                fullWidth
                sx={{ borderRadius: "50px" }}
              />
              <TextField
                label="Alamat"
                fullWidth
                sx={{ borderRadius: "50px" }}
              />
              <TextField
                label="Ganti Password"
                type="password"
                fullWidth
                sx={{
                  width: "49%",
                  gridColumn: "span 2",
                  borderRadius: "50px",
                }}
              />
            </Box>
            <Button
              variant="contained"
              color="primary"
              sx={{ marginTop: 3 }}
              fullWidth
            >
              Simpan Perubahan
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DataAdmin;
