import React, { useState } from "react";
import Sidebar from "../../components/sideBar/adminSideBar";
import {
  Box,
  Typography,
  Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect } from "react";

const NotifAdmin = () => {
  const [activePage, setActivePage] = useState("beranda"); // Menyimpan halaman aktif

  // Data notifikasi contoh
  const notifications = [
    { id: 1, title: "Pembaruan Sistem", date: "2023-10-01", status: "Dibaca" },
    {
      id: 2,
      title: "Pemeliharaan Jadwal",
      date: "2023-10-02",
      status: "Belum Dibaca",
    },
    {
      id: 3,
      title: "Pengumuman Penting",
      date: "2023-10-03",
      status: "Dibaca",
    },
  ];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto"; // Reset saat unmount
    };
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100vw", // Pastikan lebar penuh
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/* Sidebar */}
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      {/* Main Content */}

      <Box
        sx={{
          flex: 1,
          marginLeft: "260px", // Sesuaikan dengan lebar sidebar
          padding: "20px 3px", // Tambahkan padding untuk jarak
          width: "100%",
        }}
      >
        {/* Tulisan "Notifikasi" */}
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ color: "#26468B", mb: "1px", ml: "2%" }}
        >
          Notifikasi
        </Typography>

        {/* Divider */}
        <Divider
          sx={{
            backgroundColor: "rgb(138, 155, 192)",
            marginBottom: "20px", // Jarak antara Divider dan konten di bawahnya
            height: "1px",
            width: "100%",
          }}
        />

        <Box
          sx={{
            flex: 1,
            position: "absolute",
            top: 60,
            left: 0,
            right: 0,
            bottom: "calc(-15px)",
            backgroundImage: "url('src/assets/image/bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* box notifikasi */}
          <Box
            sx={{
              backgroundColor: "#FFF",
              padding: 3,
              borderTopLeftRadius: "20px",
              borderBottomRightRadius: "20px",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.4)",
              maxWidth: 1000,
              marginLeft: "330px",
              marginTop: "30px",
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              mb={3}
              sx={{ color: "#26468B" }}
            >
              Notifikasi Terbaru
            </Typography>
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ borderBottom: "1px solid #26468B" }}>
                      Judul
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{ borderBottom: "1px solid #26468B" }}
                    >
                      Tanggal
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{ borderBottom: "1px solid #26468B" }}
                    >
                      Status
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {notifications.map((notification) => (
                    <TableRow
                      key={notification.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {notification.title}
                      </TableCell>
                      <TableCell align="right">{notification.date}</TableCell>
                      <TableCell align="right">{notification.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NotifAdmin;
