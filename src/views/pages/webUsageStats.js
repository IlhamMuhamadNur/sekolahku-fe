// Data derived from https://gs.statcounter.com/os-market-share/desktop/worldwide/2023
// And https://gs.statcounter.com/os-market-share/mobile/worldwide/2023
// And https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/worldwide/2023
// For the month of December 2023

export const kehadiranMurid = [
  {
    label: "Kelas XII",
    value: 10,
  },
  {
    label: "Kelas XI",
    value: 30,
  },
  {
    label: "Kelas X",
    value: 60,
  },
];

export const kehadiranGuru = [
  {
    label: "Perbulan",
    value: 100,
  },
];

const normalize = (v, v2) => Number.parseFloat(((v * v2) / 100).toFixed(2));

export const km = [
  ...kehadiranMurid.map((v) => ({
    label: v.label === "Other" ? "Other (Desktop)" : v.label,
    value: normalize,
  })),
];

export const valueFormatter = (item) => `${item.value}%`;
