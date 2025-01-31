import * as React from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import Sidebar from "../../../components/sideBar/adminSideBar";
import {
  kehadiranGuru,
  kehadiranMurid,
  valueFormatter,
} from "../webUsageStats";
import { useState } from "react";

import {
  Box,
  Checkbox,
  Typography,
  TextField,
  InputAdornment,
  Card,
  CardContent,
  Button,
  TableBody,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";

import { Search as SearchIcon } from "@mui/icons-material";

const size = {
  width: 330,
  height: 200,
};

const data = {
  data: kehadiranMurid,
  valueFormatter,
};
const size1 = {
  width: 320,
  height: 200,
};

const data1 = {
  data: kehadiranGuru,
  valueFormatter,
};
const data2 = [{ namaKelas: "Kelas X - A", unit: "", kondisi: "Baik" }];
const AdminDashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleOpenModal1 = (data) => {
    setModalData(data);
    setOpenModal(true);
  };
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

  const [selectedCandidate, setSelectedCandidate] = useState(null);

  const candidates = [
    { id: 1, name: "Ahmad" },
    { id: 2, name: "Budi" },
    { id: 3, name: "Citra" },
  ];

  const handleCheckboxChange = (id) => {
    // Jika kandidat yang dipilih sama dengan yang sedang aktif, batalkan pilihan.
    if (selectedCandidate === id) {
      setSelectedCandidate(null);
    } else {
      // Pilih kandidat baru dan batalkan pilihan lainnya.
      setSelectedCandidate(id);
    }
  };

  const handleSubmit = () => {
    if (selectedCandidate === null) {
      alert("Harap pilih salah satu kandidat!");
    } else {
      const selectedName = candidates.find(
        (candidate) => candidate.id === selectedCandidate
      )?.name;
      alert(`Kandidat terpilih: ${selectedName}`);
    }
  };

  const [activePage, setActivePage] = useState("beranda"); // Menyimpan halaman aktif

  const [selectedButton, setSelectedButton] = useState(null);
  const handleButtonClick = (label) => {
    setSelectedButton(label); // set tombol yang dipilih
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
      }}
    >
      {/* Sidebar */}
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
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
            left: 260,
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
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.4)",
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
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.4)",
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
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.4)",
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
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.4)",
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
              marginTop: 6,
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
                mb: "none",
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              mb: 10,
              gap: 2, // Memberikan jarak antar elemen jika diperlukan
              ml: 5,
            }}
          >
            {/* Kehadiran Murid */}
            <Box
              sx={{
                flex: 1,
                maxWidth: "33%", // Atur lebar maksimal untuk menjaga proporsi
              }}
            >
              <Typography
                sx={{
                  color: "#26468B",
                  fontWeight: 600,
                }}
              >
                Kehadiran Murid
              </Typography>
              <Card
                sx={{
                  position: "relative",
                  borderTopLeftRadius: "30px",
                  borderBottomRightRadius: "30px",
                  padding: "5% 1%",
                  overflow: "hidden",
                  boxShadow: "0px 4px 10px rgba(0,0,0,0.4)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%", // Pastikan card selalu tinggi cukup
                }}
              >
                <Button
                  sx={{
                    backgroundColor: "#26468B",
                    borderTopLeftRadius: "20px",
                    borderBottomRightRadius: "20px",
                    color: "white",
                    position: "absolute",
                    top: "10%",
                    right: "5%",
                    minWidth: "7vw",
                    maxWidth: "120px", // Sesuaikan batas maksimalnya
                    fontSize: 13,
                  }}
                >
                  Lihat Detail
                </Button>
                <CardContent>
                  <PieChart
                    series={[
                      {
                        arcLabel: (item) => `${item.value}%`,
                        arcLabelMinAngle: 35,
                        arcLabelRadius: "60%",
                        ...data,
                      },
                    ]}
                    sx={{
                      [`& .${pieArcLabelClasses.root}`]: {
                        fontWeight: "bold",
                      },
                    }}
                    {...size}
                  />
                </CardContent>
              </Card>
            </Box>

            {/* Kehadiran Guru */}
            <Box
              sx={{
                flex: 1,
                maxWidth: "33%",
              }}
            >
              <Typography
                sx={{
                  color: "#26468B",
                  fontWeight: 600,
                }}
              >
                Kehadiran Guru
              </Typography>
              <Card
                sx={{
                  borderTopLeftRadius: "30px",
                  borderBottomRightRadius: "30px",
                  position: "relative",
                  padding: "16px",
                  overflow: "hidden",
                  boxShadow: "0px 4px 10px rgba(0,0,0,0.4)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%", // Pastikan card selalu tinggi cukup
                }}
              >
                <Button
                  sx={{
                    backgroundColor: "#26468B",
                    borderTopLeftRadius: "20px",
                    borderBottomRightRadius: "20px",
                    color: "white",
                    position: "absolute",
                    top: "10%",
                    right: "5%",
                    minWidth: "7vw",
                    maxWidth: "120px", // Sesuaikan batas maksimalnya
                    fontSize: 13,
                  }}
                >
                  Lihat Detail
                </Button>
                <CardContent>
                  <PieChart
                    series={[
                      {
                        arcLabel: (item) => `${item.value}%`,
                        arcLabelMinAngle: 35,
                        arcLabelRadius: "60%",
                        ...data1,
                      },
                    ]}
                    sx={{
                      [`& .${pieArcLabelClasses.root}`]: {
                        fontWeight: "bold",
                      },
                    }}
                    {...size1}
                  />
                </CardContent>
              </Card>
            </Box>

            {/* Kolom Kanan */}
            <Box
              sx={{
                flex: 1,
                maxWidth: "33%",
              }}
            >
              <Typography
                sx={{
                  color: "#26468B",
                  fontWeight: 600,
                }}
              >
                Pemilihan OSIS 2019-2020
              </Typography>
              <TableContainer
                component={Paper}
                sx={{
                  maxHeight: "100%",
                  height: 270,
                  maxWidth: "100%",
                  width: 270,
                  minWidth: 270,
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                  borderTopLeftRadius: "30px",
                  borderBottomRightRadius: "30px",
                  overflow: "hidden",
                }}
              >
                <Table>
                  <TableHead sx={{ borderBottom: "1px solid #26468B" }}>
                    <TableRow>
                      <TableCell
                        align="left"
                        sx={{
                          borderBottom: "1px solid #26468B",
                        }}
                      >
                        11 Juni 2020
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody sx={{ borderBottom: "none" }}>
                    {candidates.map((candidate) => (
                      <TableRow key={candidate.name}>
                        <TableCell
                          align="left"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            borderBottom: "none",
                            mb: -3,
                          }}
                        >
                          <Checkbox
                            checked={selectedCandidate === candidate.id}
                            onChange={() => handleCheckboxChange(candidate.id)}
                            color="primary"
                          />
                          {candidate.name}
                        </TableCell>
                        <TableCell
                          align="left"
                          sx={{ borderBottom: "none" }}
                        ></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    sx={{
                      backgroundColor: "#26468B",
                      borderTopLeftRadius: "20px",
                      borderBottomRightRadius: "20px",
                      color: "white",
                      alignItems: "right",
                      minWidth: "10px", // Membuat lebar button tetap
                      fontSize: 14,
                      textAlign: "center",
                      marginTop: "10px",
                      maxWidth: "100%",
                      left: 190,
                    }}
                  >
                    Kirim
                  </Button>
                </Table>
              </TableContainer>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              width: "100%",
              mt: -5,
            }}
          >
            {/* Box Berita Terbaru */}
            <Box
              sx={{
                flex: 1,
                maxWidth: "50%",
                height: "100%",
                overflow: "visible", // pastikan tidak ada overflow tersembunyi
                ml: 5,
              }}
            >
              <Typography
                sx={{
                  color: "#26468B",
                  fontWeight: 600,
                  mb: "-1",
                }}
              >
                Berita Terbaru
              </Typography>
              <Card
                sx={{
                  boxShadow: "0px 4px 10px rgba(0,0,0,0.4)", // pastikan hanya Card yang memiliki box-shadow
                  borderTopLeftRadius: "30px",
                  borderBottomRightRadius: "30px",
                  mb: 3,
                  minHeight: "100%",
                  height: 300,
                  width: "100%", // pastikan lebar 100%
                  position: "relative", // agar box shadow terlihat di luar elemen
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    boxShadow: "5px 4px 10px rgba(0,0,0,0.4)",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 2,
                      height: "100%", // Menambahkan tinggi agar Box menyesuaikan
                    }}
                  >
                    {/* Berita Pertama */}
                    <Box
                      sx={{
                        flex: 1,
                        position: "relative",
                      }}
                    >
                      <Box
                        component="img"
                        src="/src/assets/image/d1.png"
                        alt="Berita 1"
                        sx={{
                          width: "100%",
                          height: "150px",
                          objectFit: "cover",
                          borderRadius: "8px",
                          mt: 3,
                          cursor: "pointer",
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 80,
                          width: "100%",
                          background: "#26468B",
                          color: "white",
                          textAlign: "left",
                          py: 2,
                          cursor: "pointer",
                        }}
                      >
                        <Typography variant="subtitle2" fontWeight={600}>
                          Simulasi Simak Online Secara Serentak
                        </Typography>
                      </Box>
                    </Box>

                    {/* Berita Kedua */}
                    <Box
                      sx={{
                        flex: 1,
                        position: "relative",
                      }}
                    >
                      <Box
                        component="img"
                        src="/src/assets/image/d2.jpeg"
                        alt="Berita 2"
                        sx={{
                          width: "100%",
                          height: "150px",
                          objectFit: "cover",
                          borderRadius: "8px",
                          mt: 3,
                          cursor: "pointer",
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 80,
                          width: "100%",
                          background: "#26468B",
                          color: "white",
                          textAlign: "left",
                          py: 2,
                          cursor: "pointer",
                        }}
                      >
                        <Typography variant="subtitle2" fontWeight={600}>
                          Tahap Pembuatan Ulangan Online SIMAK
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
                <Button
                  size="small"
                  sx={{
                    backgroundColor: "#26468B",
                    borderTopLeftRadius: "20px",
                    borderBottomRightRadius: "20px",
                    color: "white",
                    textAlign: "right",
                    display: "inline-block",
                    top: -80,
                    left: "73%",
                    position: "flex",
                    padding: "2px 10px",
                  }}
                >
                  Lihat Lainnya
                </Button>
              </Card>
            </Box>

            {/* Box Tabel */}
            <Box
              sx={{
                flex: 1,
                minWidth: "50%",
                maxWidth: "50%",
                minHeight: "100%",
                maxHeight: "100%",
                mr: 2,
              }}
            >
              <Typography
                sx={{
                  color: "#26468B",
                  fontWeight: 600,
                  mb: "none", // Memberikan margin bawah agar tidak terlalu dekat dengan tombol
                }}
              >
                Sarana Prasarana
              </Typography>

              {/* Table */}
              <TableContainer
                component={Paper}
                sx={{
                  boxShadow: "0px 4px 10px rgba(0,0,0,0.4)",
                  borderTopLeftRadius: "30px",
                  borderBottomRightRadius: "30px",
                  height: 300,
                }}
              >
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell
                        colSpan={4}
                        sx={{
                          padding: "16px",
                          borderBottom: "1px solid #26468B",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            gap: 2, // jarak antar tombol
                            mb: -2,
                          }}
                        >
                          {[
                            "Ruang Kelas",
                            "Laboratorium",
                            "Perpustakaan",
                            "Sanitasi",
                            "Lainnya",
                          ].map((label, index) => (
                            <Button
                              key={index}
                              variant="contained"
                              sx={{
                                backgroundColor:
                                  selectedButton === label
                                    ? "#26468B"
                                    : "#E4E7EB", // jika tombol dipilih, warna berubah
                                color:
                                  selectedButton === label
                                    ? "white"
                                    : "#26468B", // warna teks saat dipilih
                                textTransform: "none",
                                borderTopLeftRadius: "15px",
                                fontSize: "12px",
                                padding: "6px 9px",
                                minWidth: "80px", // memastikan ukuran tombol tetap
                                "&:hover": {
                                  backgroundColor: "#26468B", // warna saat tombol di-hover
                                  color: "white",
                                },
                              }}
                              onClick={() => handleButtonClick(label)} // set tombol yang dipilih
                            >
                              {label}
                            </Button>
                          ))}
                        </Box>
                      </TableCell>
                    </TableRow>

                    {/* Row untuk Header Tabel */}
                    <TableRow>
                      <TableCell
                        sx={{
                          textAlign: "center",
                          borderColor: "#26468B",
                          borderRight: "1px solid #26468B",
                        }}
                      >
                        Nama Kelas
                      </TableCell>
                      <TableCell
                        sx={{
                          textAlign: "center",
                          borderColor: "#26468B",
                          borderRight: "1px solid #26468B",
                        }}
                      >
                        Unit
                      </TableCell>
                      <TableCell
                        sx={{
                          textAlign: "center",
                          borderColor: "#26468B",
                          borderRight: "1px solid #26468B",
                        }}
                      >
                        Kondisi
                      </TableCell>
                      <TableCell
                        sx={{
                          textAlign: "center",
                          borderColor: "#26468B",
                        }}
                      >
                        Pilihan
                      </TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {data2.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell
                          sx={{
                            textAlign: "center",
                            borderBottom: "none",
                            borderRight: "1px solid #26468B",
                            color: "#7F8C8D",
                          }}
                        >
                          {row.namaKelas}
                        </TableCell>
                        <TableCell
                          sx={{
                            textAlign: "left",
                            borderBottom: "none",
                            borderRight: "1px solid #26468B",
                            color: "#7F8C8D",
                          }}
                        >
                          {row.unit}
                        </TableCell>
                        <TableCell
                          sx={{
                            textAlign: "center",
                            borderBottom: "none",
                            borderRight: "1px solid #26468B",
                            color: "#7F8C8D",
                          }}
                        >
                          {row.kondisi}
                        </TableCell>
                        <TableCell
                          sx={{ textAlign: "center", borderBottom: "none" }}
                        >
                          <Button
                            variant="contained"
                            sx={{
                              backgroundColor: "#26468B",
                              color: "white",
                              borderTopLeftRadius: "20px",
                              borderBottomRightRadius: "20px",
                              fontSize: "12px",
                              mr: 1,
                              padding: "3px 10px",
                            }}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="contained"
                            sx={{
                              backgroundColor: "#26468B",
                              color: "white",
                              borderTopLeftRadius: "20px",
                              borderBottomRightRadius: "20px",
                              fontSize: "12px",
                              mr: 1,
                              padding: "3px 10px",
                            }}
                          >
                            Hapus
                          </Button>
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
