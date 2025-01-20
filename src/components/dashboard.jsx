import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  CssBaseline,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import { useNavigate } from "react-router-dom";
import CountUp from "react-countup"; // Import CountUp

export default function Dashboard() {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleOp = () => {
    navigate("/");
  };

  const handleMenuOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleRedirect = (path) => {
    navigate(path);
    handleMenuClose();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          p: 1,
          bgcolor: "#f5f5f5",
        }}
      >
        <IconButton
          sx={{ color: "#5b6993", mx: 1 }}
          onClick={() =>
            window.open("https://www.instagram.com/smkn1katapang/?hl=en")
          }
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          sx={{ color: "#5b6993", mx: 1 }}
          onClick={() =>
            window.open(
              "https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2Fgroups%2Fsmkn1katapang%2F%3Flocale%3Did_ID"
            )
          }
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          sx={{ color: "#5b6993", mx: 1 }}
          onClick={() => window.open("https://x.com/smkn1katapang")}
        >
          <TwitterIcon />
        </IconButton>
      </Box>
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
              letterSpacing: 9,
              color: "#20274b",
              display: "inline",
              marginRight: "auto",
            }}
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
            onClick={handleMenuOpen}
          >
            Akses
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            PaperProps={{
              sx: {
                borderRadius: 2,
                boxShadow: 3,
                backgroundColor: "#f4f4f4",
              },
            }}
          >
            <MenuItem onClick={() => handleRedirect("/loginform")}>
              <ListItemIcon>
                <AutoStoriesOutlinedIcon
                  fontSize="small"
                  sx={{ color: "#5b6993" }}
                />
              </ListItemIcon>
              E-Book
            </MenuItem>
            <Divider />
            <MenuItem onClick={() => handleRedirect("/loginform")}>
              <ListItemIcon>
                <AssessmentOutlinedIcon
                  fontSize="small"
                  sx={{ color: "#5b6993" }}
                />
              </ListItemIcon>
              E-Raport
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Konten */}
      <Box sx={{ p: 3 }}>
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
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Total Siswa
              </Typography>
              <Typography variant="h4">
                <CountUp start={0} end={1200} duration={3} separator="." />{" "}
              </Typography>
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
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Total Guru
              </Typography>
              <Typography variant="h4">
                <CountUp start={0} end={85} duration={3} separator="." />{" "}
              </Typography>
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
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Kelas Aktif
              </Typography>
              <Typography variant="h4">
                <CountUp start={0} end={42} duration={3} separator="." />{" "}
              </Typography>
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
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Prestasi
              </Typography>
              <Typography variant="h4">
                <CountUp start={0} end={130} duration={3} separator="." />+
              </Typography>
            </Box>{" "}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
