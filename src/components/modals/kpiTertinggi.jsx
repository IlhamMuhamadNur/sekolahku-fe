import React from "react";
import {
  Modal,
  Box,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

const DetailModal = ({ open, handleClose, selectedRow }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: "100%",
          width: 400,
          minwidth: "100%",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: "10px",
        }}
      >
        {selectedRow && (
          <>
            <Typography
              variant="h6"
              sx={{ mb: 0, color: "#26468B", fontWeight: 600 }}
            >
              KPI {selectedRow.nama_guru}
            </Typography>
            {/* Garis panjang */}
            <Box
              sx={{
                borderBottom: "2px solid #26468B",
                maxWidth: "100%",
                width: 400,
                minwidth: "100%",
                mt: 0,
                mb: 2,
                p: "1px 33px",
                ml: -4,
              }}
            ></Box>
            <Typography>PERFORMA INDIVIDU</Typography>
            {/* Garis panjang */}
            <Box
              sx={{
                borderBottom: "1px solid #3D3F3F",
                mt: 0,
                mb: 2,
              }}
            ></Box>

            {/* Chart Horizontal */}
            <Box
              sx={{
                flex: 4,
                height: 30,
                backgroundColor: "#d0dacf", // Warna background chart
                position: "relative",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                mt: -1,
              }}
            >
              {/* Progress Bar */}
              <Box
                sx={{
                  width: `${selectedRow.absensi}%`,
                  height: "100%",
                  backgroundColor:
                    selectedRow.absensi < 50
                      ? "#FF5733" // Merah
                      : selectedRow.absensi >= 80
                        ? "#449f39" // Hijau
                        : "#FFB300", // Kuning
                  position: "absolute",
                  left: 0,
                  top: 0,
                }}
              />
              {/* Teks Absensi */}
              <Typography
                sx={{
                  position: "absolute",
                  left: 8, // Jarak dari kiri
                  color: "#fff", // Warna teks
                  fontWeight: 400,
                  fontSize: "14px",
                }}
              >
                Absensi
              </Typography>
              {/* Nilai Absensi */}
              <Typography
                sx={{
                  position: "absolute",
                  right: 8, // Jarak dari kanan
                  color: "#fff", // Warna teks
                  fontWeight: 400,
                  fontSize: "14px",
                }}
              >
                {selectedRow.absensi}
              </Typography>
            </Box>
            <Box
              sx={{
                borderBottom: "2px solid #26468B",
                maxWidth: "100%",
                width: 400,
                minwidth: "100%",
                mt: 2,
                mb: 3,
                p: "1px 33px",
                ml: -4,
              }}
            />

            <Typography>POIN PRESTASI</Typography>
            {/* Garis panjang */}
            <Box
              sx={{
                borderBottom: "1px solid #3D3F3F",
                mt: 0,
                mb: 2,
              }}
            ></Box>

            {/* Chart Horizontal */}
            <Box
              sx={{
                flex: 4,
                height: 30,
                backgroundColor: "#d0dacf", // Warna background chart
                position: "relative",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                mt: -1,
              }}
            >
              {/* Progress Bar */}
              <Box
                sx={{
                  width: `${selectedRow.poin_prestasi}%`, // Dinamis berdasarkan data
                  height: "100%",
                  backgroundColor:
                    selectedRow.poin_prestasi < 50
                      ? "#FF5733" // Merah
                      : selectedRow.poin_prestasi >= 80
                        ? "#449f39" // Hijau
                        : "#FFB300", // Kuning
                  position: "absolute",
                  left: 0,
                  top: 0,
                }}
              />
              {/* Teks TINGKAT NASIONAL */}
              <Typography
                sx={{
                  position: "absolute",
                  left: 8, // Jarak dari kiri
                  color: "#fff", // Warna teks
                  fontWeight: 400,
                  fontSize: "14px",
                }}
              >
                Tingkat Nasional
              </Typography>
              {/* Nilai TINGKAT NASIONAL */}
              <Typography
                sx={{
                  position: "absolute",
                  right: 8, // Jarak dari kanan
                  color: "#fff", // Warna teks
                  fontWeight: 400,
                  fontSize: "14px",
                }}
              >
                {selectedRow.poin_prestasi}
              </Typography>
            </Box>
            <Box
              sx={{
                borderBottom: "2px solid #26468B",
                maxWidth: "100%",
                width: 400,
                minwidth: "100%",
                mt: 2,
                mb: 3,
                p: "1px 33px",
                ml: -4,
              }}
            />

            <Typography>PERFORMA ADMINISTRASI</Typography>
            {/* Garis panjang */}
            <Box
              sx={{
                borderBottom: "1px solid #3D3F3F",
                mt: 0,
                mb: 2,
              }}
            ></Box>

            {/* Chart Horizontal */}
            <Box
              sx={{
                flex: 4,
                height: 30,
                backgroundColor: "#d0dacf", // Warna background chart
                position: "relative",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                mt: -1,
              }}
            >
              {/* Progress Bar */}
              <Box
                sx={{
                  width: `${selectedRow.performa_administrasi}%`, // Dinamis berdasarkan data
                  height: "100%",
                  backgroundColor:
                    selectedRow.performa_administrasi < 50
                      ? "#FF5733" // Merah
                      : selectedRow.performa_administrasi >= 80
                        ? "#449f39" // Hijau
                        : "#FFB300", // Kuning
                  position: "absolute",
                  left: 0,
                  top: 0,
                }}
              />
              {/* Teks TINGKAT NASIONAL */}
              <Typography
                sx={{
                  position: "absolute",
                  left: 8, // Jarak dari kiri
                  color: "#fff", // Warna teks
                  fontWeight: 400,
                  fontSize: "14px",
                }}
              >
                Tingkat Nasional
              </Typography>
              {/* Nilai TINGKAT NASIONAL */}
              <Typography
                sx={{
                  position: "absolute",
                  right: 8, // Jarak dari kanan
                  color: "#fff", // Warna teks
                  fontWeight: 400,
                  fontSize: "14px",
                }}
              >
                {selectedRow.performa_administrasi}
              </Typography>
            </Box>
            <Box
              sx={{
                borderBottom: "2px solid #26468B",
                maxWidth: "100%",
                width: 400,
                minwidth: "100%",
                mt: 2,
                mb: 3,
                p: "1px 33px",
                ml: -4,
              }}
            />
            <Typography>PRESTASI PENGHARGAAN</Typography>
            {/* Garis panjang */}
            <Box
              sx={{
                borderBottom: "1px solid #3D3F3F",
                mt: 0,
                mb: 2,
              }}
            ></Box>
            <TableContainer>
              <Table
                sx={{
                  minWidth: "100%",
                  maxWidth: "100%",
                  width: 100,
                }}
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#26468B" }}>
                    <TableCell
                      sx={{
                        padding: "4px",
                        fontSize: "12px",
                        textAlign: "center",
                        whiteSpace: "nowrap",
                        color: "white",
                      }}
                    >
                      Tahun Penghargaan
                    </TableCell>
                    <TableCell
                      sx={{
                        padding: "4px",
                        fontSize: "12px",
                        textAlign: "center",
                        color: "white",
                      }}
                    >
                      Penghargaan
                    </TableCell>
                    <TableCell
                      sx={{
                        padding: "4px",
                        fontSize: "12px",
                        textAlign: "center",
                        color: "white",
                      }}
                    >
                      Keterangan
                    </TableCell>
                    <TableCell
                      sx={{
                        padding: "4px",
                        fontSize: "12px",
                        textAlign: "center",
                        color: "white",
                      }}
                    >
                      Tingkat
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {selectedRow ? (
                    <TableRow key={selectedRow.id}>
                      <TableCell
                        sx={{
                          textAlign: "center",
                          borderBottom: "none",
                          fontSize: "11px",
                        }}
                      >
                        {selectedRow.nama_guru}
                      </TableCell>
                      <TableCell
                        sx={{
                          textAlign: "center",
                          borderBottom: "none",

                          fontSize: "11px",
                        }}
                      >
                        {selectedRow.penghargaan}
                      </TableCell>
                      <TableCell
                        sx={{
                          textAlign: "center",
                          borderBottom: "none",
                          fontSize: "11px",
                        }}
                      >
                        {selectedRow.keterangan}
                      </TableCell>
                      <TableCell
                        sx={{
                          textAlign: "center",
                          borderBottom: "none",
                          fontSize: "11px",
                        }}
                      >
                        {selectedRow.tingkat}
                      </TableCell>
                    </TableRow>
                  ) : null}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}
      </Box>
    </Modal>
  );
};

export default DetailModal;
