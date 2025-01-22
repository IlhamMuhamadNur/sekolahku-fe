import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
  TextField,
  InputAdornment,
  Card,
  CardContent,
} from "@mui/material";
import {
  Search as SearchIcon,
  Home as HomeIcon,
  School as SchoolIcon,
} from "@mui/icons-material";

const AdminDashboard = () => {
  const [activePage, setActivePage] = useState("beranda"); // Menyimpan halaman aktif

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
          backgroundColor: "#FAFAFA",
          color: "#3D3F3F",
          padding: 2,
          borderRadius: "20px",
          margin: 2,
          marginRight: 0,
          boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
        }}
      >
        <Box sx={{ textAlign: "center", marginBottom: 2 }}>
          {/* Logo Sekolah */}
          <img
            src="/pict/logosmk.png"
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
          }}
        >
          <Avatar src="/admin-avatar.png" sx={{ marginRight: 2 }} />
          <Box>
            <Typography variant="body2">adminsekolah</Typography>
            <Typography variant="body2" color="gray">
              ADMIN
            </Typography>
          </Box>
        </Box>

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
        {/* Search Bar */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
          <TextField
            placeholder="Cari apapun di sini"
            variant="outlined"
            size="small"
            sx={{
              borderRadius: "20px",
              backgroundColor: "#ECF0F1",
              "& .MuiOutlinedInput-root": {
                borderRadius: "20px", // Pastikan border mengikuti sudut
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent", // Menghilangkan garis bawah & border default
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#ccc", // Efek hover
              },
              "& .MuiOutlinedInput-input": {
                padding: "10px 14px",
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        {/* background image */}
        <Box
          sx={{
            flex: 1,
            position: "absolute",
            left: "245px",
            right: 0,
            backgroundImage: "url('/pict/bg.png')", // Path gambar
            backgroundSize: "cover", // Menyesuaikan gambar agar penuh
            backgroundPosition: "center", // Posisi gambar di tengah
            backgroundRepeat: "no-repeat", // Mencegah pengulangan
          }}
        >
          {/* Statistik Admin, Guru, dan Siswa */}
          <Box sx={{ margin: 2, display: "flex", gap: 2, margin: 3 }}>
            <Card
              sx={{
                backgroundColor: "#00C9F2",
                color: "#26468B",
                width: 100,
                height: 80,
                borderTopLeftRadius: "30px",
                borderBottomRightRadius: "30px",
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: 1,
                }}
              >
                <Typography variant="h6" sx={{ textAlign: "center" }}>
                  Admin
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  4
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                backgroundColor: "#FFDC09",
                color: "#3D3F3F",
                width: 100,
                height: 80,
                borderTopLeftRadius: "30px",
                borderBottomRightRadius: "30px",
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: 1,
                }}
              >
                <Typography variant="h6" sx={{ textAlign: "center" }}>
                  Guru
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  41
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                backgroundColor: "#FF6242",
                color: "white",
                width: 100,
                height: 80,
                borderTopLeftRadius: "30px",
                borderBottomRightRadius: "30px",
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: 1,
                }}
              >
                <Typography variant="h6" sx={{ textAlign: "center" }}>
                  Murid
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  600
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                backgroundColor: "#26468B",
                color: "white",
                width: 100,
                height: 80,
                borderTopLeftRadius: "30px",
                borderBottomRightRadius: "30px",
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: 1.5,
                }}
              >
                <Typography sx={{ textAlign: "center", fontSize: "15px" }}>
                  Orang Tua
                </Typography>
                <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
                  600
                </Typography>
              </CardContent>
            </Card>
          </Box>
          {/* Cards Section */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              margin: 5,
              marginRight: 20,
              gap: 3,
            }}
          >
            <Card
              sx={{
                backgroundColor: "#26468B",
                color: "white",
                borderTopLeftRadius: "30px",
                borderBottomRightRadius: "30px",
                boxShadow: "0px 6px 20px rgba(38, 70, 139, 0.8)",
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Efisiensi Kertas Ulangan
                </Typography>
                <Typography variant="body2">
                  Dengan menggunakan SiPintar, Sekolah SIMAK telah berhemat:
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  Rp. 24.000
                </Typography>
                <Typography sx={{ fontSize: "10px" }}>
                  *Dengan asumsi 1 ulangan membutuhkan 8 lembar kertas fotokopi
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                backgroundColor: "#FFDC09",
                color: "#3D3F3F",
                borderTopLeftRadius: "30px",
                borderBottomRightRadius: "30px",
                boxShadow: "0px 6px 20px rgba(255, 220, 9, 0.8)",
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Efisiensi Waktu Periksa Ulangan
                </Typography>
                <Typography variant="body2">
                  Dengan menggunakan SiPintar, guru Sekolah SIMAK telah
                  menghemat waktu:
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  1 Jam 15 Menit
                </Typography>
                <Typography sx={{ fontSize: "10px" }}>
                  * Dengan asumsi 1 ulangan membutuhkan waktu 5 menit untuk
                  pemeriksaan
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                backgroundColor: "#FF6242",
                color: "white",
                borderTopLeftRadius: "30px",
                borderBottomRightRadius: "30px",
                boxShadow: "0px 6px 20px rgba(255, 98, 66, 1)",
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Efisiensi Kertas Pengumuman
                </Typography>
                <Typography variant="body2">
                  Dengan menggunakan SiPintar, Sekolah SIMAK telah berhemat:
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  Rp. 960.000
                </Typography>
                <Typography sx={{ fontSize: "10px" }}>
                  * Dengan asumsi 1 pengumuman membutuhkan 2 lembar kertas
                  fotokopi
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
