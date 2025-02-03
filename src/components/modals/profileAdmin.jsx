import React, { useState } from "react";
import { Box, Typography, Avatar, Modal, Divider } from "@mui/material";

const ProfileModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Menyimpan state modal

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
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
            onClick={() => {
              console.log("profile diklik!");
              window.location.href = "/notifikasi-admin";
            }}
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
            onClick={() => {
              console.log("profile diklik!");
              window.location.href = "/data-admin"; // Arahkan ke halaman login
            }}
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
              console.log("Log Out diklik!");
              window.location.href = "/login-form"; // Arahkan ke halaman login
            }}
          >
            Log Out
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default ProfileModal;
