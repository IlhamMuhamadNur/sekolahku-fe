import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  CssBaseline,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function EBookPage() {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState(""); // State untuk menyimpan input pencarian

  const handleOp = () => {
    navigate("/");
  };

  const eBooks = [
    {
      id: 1,
      title: "Panduan Dasar Pemrograman",
      image: "src/assets/image/ebook1.jpg",
      description: "Belajar dasar-dasar pemrograman untuk pemula.",
    },
    {
      id: 2,
      title: "Kiat Sukses UNBK",
      image: "src/assets/image/ebook2.jpg",
      description: "Tips dan trik menghadapi Ujian Nasional Berbasis Komputer.",
    },
    {
      id: 3,
      title: "Desain Grafis untuk Pemula",
      image: "src/assets/image/ebook3.jpg",
      description: "Panduan mudah untuk memulai karir di desain grafis.",
    },
    {
      id: 4,
      title: "Teknologi Informasi Modern",
      image: "src/assets/image/ebook4.jpg",
      description: "Pengetahuan terkini tentang teknologi informasi.",
    },
  ];

  // Filter eBooks berdasarkan input pencarian
  const filteredEBooks = eBooks.filter(
    (ebook) =>
      ebook.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ebook.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar position="static" sx={{ bgcolor: "#5b6993" }}>
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
            onClick={handleOp}
          />
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              letterSpacing: 9,
              color: "#20274b",
            }}
          >
            SMK NEGERI 1 KATAPANG-EBOOK
          </Typography>

          <Link to="/admindashboard" style={{ textDecoration: "none" }}>
            <Button
              color="inherit"
              sx={{
                backgroundColor: "#bac6e3",
                color: "#20274b",
                fontWeight: "bold",
                "&:hover": {
                  textDecoration: "underline",
                  backgroundColor: "#8ba1cf",
                },
              }}
            >
              Beranda
            </Button>
          </Link>
        </Toolbar>
      </AppBar>

      {/* Search Bar */}
      <Box sx={{ p: 3, textAlign: "center" }}>
        <TextField
          variant="outlined"
          placeholder="Cari E-Book..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ width: "50%", bgcolor: "white", borderRadius: 1 }}
        />
      </Box>

      {/* Konten E-Book */}
      <Box sx={{ p: 3 }}>
        <Grid container spacing={3}>
          {filteredEBooks.map((ebook) => (
            <Grid item xs={12} sm={6} md={3} key={ebook.id}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                  borderRadius: 2,
                  boxShadow: 2,
                  bgcolor: "#f5f5f5",
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={ebook.image}
                  alt={ebook.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#5b6993" }}
                  >
                    {ebook.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {ebook.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    sx={{
                      color: "#5b6993",
                      fontWeight: "bold",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    Baca
                  </Button>
                  <Button
                    size="small"
                    sx={{
                      color: "#5b6993",
                      fontWeight: "bold",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    Unduh
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
