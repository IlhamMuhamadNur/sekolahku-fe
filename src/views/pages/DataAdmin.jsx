import React, { useState } from "react";
import Sidebar from "../../components/sideBar/adminSideBar";
import {
  Box,
  Typography,
  Avatar,
  TextField,
  Button,
  Divider,
} from "@mui/material";

const DataAdmin = () => {
  const [activePage, setActivePage] = useState("beranda"); // Menyimpan halaman aktif

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
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
        }}
      >
        {/* background image */}
        <Divider
          sx={{
            backgroundColor: "rgb(138, 155, 192)",
            margin: "52px 0",
            width: "100%",
            height: "0.5px",
            display: "block",
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
          {/* box biodata */}
          <Box
            sx={{
              backgroundColor: "#FFF",
              padding: 3,
              borderTopLeftRadius: "20px",
              borderBottomRightRadius: "20px",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.4)",
              maxWidth: 700,
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
              Bio Data
            </Typography>
            <Box display="flex" alignItems="flex-start" gap={3} mb={3}>
              <Box
                component="form"
                flex={1}
                display="grid"
                gridTemplateColumns="repeat(2, 1fr)"
                gap={2}
              >
                <TextField
                  label="Nama"
                  fullWidth
                  sx={{
                    gridColumn: "span 2",
                    "& .MuiOutlinedInput-root": {
                      fontSize: "0.875rem",
                      borderRadius: "50px",
                      padding: "5px 15px",
                      height: "40px",
                    },
                    "& .MuiInputLabel-root": {
                      fontSize: "0.875rem",
                      transform: "translate(14px, 10px) scale(1)",
                    },
                    "& .MuiInputLabel-shrink": {
                      transform: "translate(14px, -5px) scale(0.75)",
                    },
                  }}
                />
                <TextField
                  label="Username"
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      fontSize: "0.875rem",
                      borderRadius: "50px",
                      padding: "5px 15px",
                      height: "40px",
                    },
                    "& .MuiInputLabel-root": {
                      fontSize: "0.875rem",
                      transform: "translate(14px, 10px) scale(1)",
                    },
                    "& .MuiInputLabel-shrink": {
                      transform: "translate(14px, -5px) scale(0.75)",
                    },
                  }}
                />
                <TextField
                  label="Telepon"
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      fontSize: "0.875rem",
                      borderRadius: "50px",
                      padding: "5px 15px",
                      height: "40px",
                    },
                    "& .MuiInputLabel-root": {
                      fontSize: "0.875rem",
                      transform: "translate(14px, 10px) scale(1)",
                    },
                    "& .MuiInputLabel-shrink": {
                      transform: "translate(14px, -5px) scale(0.75)",
                    },
                  }}
                />
                <TextField
                  label="Tanggal Lahir"
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      fontSize: "0.875rem",
                      borderRadius: "50px",
                      padding: "5px 15px",
                      height: "40px",
                    },
                    "& .MuiInputLabel-root": {
                      fontSize: "0.875rem",
                      transform: "translate(14px, 10px) scale(1)",
                    },
                    "& .MuiInputLabel-shrink": {
                      transform: "translate(14px, -5px) scale(0.75)",
                    },
                  }}
                />
                <TextField
                  label="Alamat"
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      fontSize: "0.875rem",
                      borderRadius: "50px",
                      padding: "5px 15px",
                      height: "40px",
                    },
                    "& .MuiInputLabel-root": {
                      fontSize: "0.875rem",
                      transform: "translate(14px, 10px) scale(1)",
                    },
                    "& .MuiInputLabel-shrink": {
                      transform: "translate(14px, -5px) scale(0.75)",
                    },
                  }}
                />
                <TextField
                  label="Ganti Password"
                  type="password"
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      fontSize: "0.875rem",
                      borderRadius: "50px",
                      padding: "5px 15px",
                      height: "40px",
                    },
                    "& .MuiInputLabel-root": {
                      fontSize: "0.875rem",
                      transform: "translate(14px, 10px) scale(1)",
                    },
                    "& .MuiInputLabel-shrink": {
                      transform: "translate(14px, -5px) scale(0.75)",
                    },
                  }}
                />
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                sx={{ marginX: "40px" }}
              >
                <Avatar
                  src="/admin-avatar.png"
                  sx={{ width: 100, height: 100, marginBottom: 2 }}
                />
                <Button
                  variant="contained"
                  component="label"
                  sx={{
                    borderTopLeftRadius: "10px",
                    borderBottomRightRadius: "10px",
                    borderTopRightRadius: "0px",
                    borderBottomLeftRadius: "0px",
                    padding: "5px 10px",
                    fontSize: "12px",
                    backgroundColor: "#26468B",
                  }}
                >
                  Unggah Foto
                  <input hidden accept="image/*" type="file" />
                </Button>
              </Box>
            </Box>
            <Divider sx={{ backgroundColor: "#26468B", margin: "16px 0" }} />
            <Box
              sx={{ display: "flex", justifyContent: "flex-end", marginTop: 3 }}
            >
              <Button
                variant="contained"
                color="primary"
                sx={{
                  borderTopLeftRadius: "10px",
                  borderBottomRightRadius: "10px",
                  borderTopRightRadius: "0px",
                  borderBottomLeftRadius: "0px",
                  fontSize: "13px",
                  backgroundColor: "#26468B",
                }}
              >
                Simpan Perubahan
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DataAdmin;
