import ProfileModal from "../modals/profileAdmin";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { Home as HomeIcon, School as SchoolIcon } from "@mui/icons-material";

const Sidebar = ({ activePage, setActivePage }) => {
  const menuItems = [
    { text: "Beranda", icon: <HomeIcon />, key: "beranda" },
    { text: "Siswa", icon: <SchoolIcon />, key: "siswa" },
  ];

  return (
    // sidebar
    <Box
      sx={{
        width: 230,
        height: "100vh",
        backgroundColor: "#FAFAFA !important",
        color: "#3D3F3F",
        padding: 1.5,
        borderRadius: "20px",
        margin: 1,
        boxShadow: "0px 4px 10px rgba(0,0,0,0.4)",
        position: "fixed",
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
        zIndex: 1000,
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
          SMKN 1 KATAPANG
        </Typography>
        <Typography variant="caption">Tahun Pelajaran 2020-2021</Typography>
      </Box>
      {/* modal */}
      <ProfileModal />
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
  );
};

export default Sidebar;
