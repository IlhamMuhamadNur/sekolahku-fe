import React, { useState } from "react";
import axios from "axios";
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
  Button,
  Modal,
  Divider,
  TableBody,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import {
  Search as SearchIcon,
  Home as HomeIcon,
  School as SchoolIcon,
} from "@mui/icons-material";

const AdminDashboard = () => {
  const rows0 = [
    {
      Nama_Guru: "Drs. Rizki Akmanda",
      Point: 12,
      Lihat: (
        <Button
          size="small"
          sx={{
            backgroundColor: "#26468B",
            borderTopLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            color: "white",
          }}
        >
          Lihat
        </Button>
      ),
    },
    {
      Nama_Guru: "Samson Lind",
      Point: 8,
      Lihat: (
        <Button
          size="small"
          sx={{
            backgroundColor: "#26468B",
            borderTopLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            color: "white",
          }}
        >
          Lihat
        </Button>
      ),
    },
    {
      Nama_Guru: "Stanton Russel",
      Point: 8,
      Lihat: (
        <Button
          size="small"
          sx={{
            backgroundColor: "#26468B",
            borderTopLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            color: "white",
          }}
        >
          Lihat
        </Button>
      ),
    },
  ];
  const rows1 = [
    {
      id: 1,
      NamaWaliKelas: "Violette D'Amore",
      Kelas1: "X - A",
      Nu: (
        <Button
          size="small"
          sx={{
            backgroundColor: "#26468B",
            borderTopLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            color: "white",
          }}
        >
          Not Update
        </Button>
      ),
    },
    {
      id: 2,
      NamaWaliKelas: "Misty Lubowitz",
      Kelas1: "XI - A",
      Nu: (
        <Button
          size="small"
          sx={{
            backgroundColor: "#26468B",
            borderTopLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            color: "white",
          }}
        >
          Not Update
        </Button>
      ),
    },
    {
      id: 3,
      NamaWaliKelas: "Mrs. Joelle Schmidt DDS",
      Kelas1: "XII - A",
      Nu: (
        <Button
          size="small"
          sx={{
            backgroundColor: "#26468B",
            borderTopLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            color: "white",
          }}
        >
          Not Update
        </Button>
      ),
    },
  ];

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
          backgroundColor: "#FAFAFA",
          color: "#3D3F3F",
          padding: 2,
          borderRadius: "20px",
          margin: 3,
          marginRight: 0,
          boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
          position: "fixed", // Menjaga posisi sidebar tetap
          top: 0, // Menjaga sidebar tetap di atas
          left: 0, // Menjaga sidebar tetap di kiri
          maxHeight: "89%",
          minHeight: "89%",
          height: "89%", // Membuat sidebar memiliki tinggi 100% dari viewport
          zIndex: 1000, // Agar sidebar tetap di atas elemen lainnya
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
                mb: 1,
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
        {/* Search Bar */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 3, ml: 33 }}>
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
            left: 280,
            right: 0,
            backgroundImage: "url('src/assets/image/bg.png')", // Path gambar
            backgroundSize: "cover", // Menyesuaikan gambar agar penuh
            backgroundPosition: "center", // Posisi gambar di tengah
            backgroundRepeat: "no-repeat", // Mencegah pengulangan
            height: 550,
            maxHeight: "100%",
          }}
        >
          {/* Statistik Admin, Guru, dan Siswa */}
          <Box sx={{ display: "flex", gap: 2, margin: 4, marginLeft: 6 }}>
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
          <Box
            sx={{
              marginTop: 5,
              marginLeft: 6,
              maxWidth: "100%",
              maxHeight: "100%",
              display: "flex",
              gridTemplateColumns: "repeat(2, 5fr)",
              margin: 5,
              marginRight: 20,
              gap: 3,
            }}
          >
            {/* Tabel 1 */}
            <Box
              sx={{
                flex: 1,
                minWidth: "35%",
                maxWidth: "35%",
                mb: 3,
                minHeight: "35%",
                maxHeight: "35%",
              }}
            >
              <Typography
                sx={{
                  color: "#26468B",
                  fontWeight: 600,
                }}
              >
                KPI Tertinggi
              </Typography>
              <TableContainer
                component={Paper}
                sx={{
                  boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
                  borderTopLeftRadius: "30px",
                  borderBottomRightRadius: "30px",
                }}
              >
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{ textAlign: "left", borderColor: "#26468B" }}
                      >
                        Nama Guru
                      </TableCell>
                      <TableCell
                        sx={{ textAlign: "center", borderColor: "#26468B" }}
                      >
                        Point
                      </TableCell>
                      <TableCell
                        sx={{
                          textAlign: "right",
                          borderColor: "#26468B",
                        }}
                      >
                        Lihat
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows0.map((row) => (
                      <TableRow key={row.Nama_Guru}>
                        <TableCell
                          sx={{ textAlign: "left", borderBottom: "none" }}
                        >
                          {row.Nama_Guru}
                        </TableCell>
                        <TableCell
                          sx={{ textAlign: "center", borderBottom: "none" }}
                        >
                          {row.Point}
                        </TableCell>
                        <TableCell
                          sx={{ textAlign: "right", borderBottom: "none" }}
                        >
                          {row.Lihat}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>

            {/* Tabel 2 */}
            <Box sx={{ minWidth: "64%", maxWidth: "70%" }}>
              <Typography sx={{ color: "#26468B", fontWeight: 600 }}>
                LAPORAN UPDATE ABSENSI PERHARI MURID DARI GURU
              </Typography>
              <TableContainer
                component={Paper}
                sx={{
                  boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
                  borderTopLeftRadius: "30px",
                  borderBottomRightRadius: "30px",
                }}
              >
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{
                          textAlign: "left",
                          borderColor: "#26468B",
                        }}
                      >
                        Id
                      </TableCell>

                      <TableCell
                        sx={{ textAlign: "left", borderColor: "#26468B" }}
                      >
                        Nama Wali Kelas
                      </TableCell>
                      <TableCell
                        sx={{ textAlign: "center", borderColor: "#26468B" }}
                      >
                        Kelas
                      </TableCell>
                      <TableCell
                        sx={{ textAlign: "right", borderColor: "#26468B" }}
                      >
                        Status
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows1.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell
                          sx={{ textAlign: "left", borderBottom: "none" }}
                        >
                          {row.id}
                        </TableCell>
                        <TableCell
                          sx={{ textAlign: "left", borderBottom: "none" }}
                        >
                          {row.NamaWaliKelas}
                        </TableCell>
                        <TableCell
                          sx={{ textAlign: "center", borderBottom: "none" }}
                        >
                          {row.Kelas1}
                        </TableCell>
                        <TableCell
                          sx={{
                            textAlign: "right",
                            borderBottom: "none",
                          }}
                        >
                          {row.Nu}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
