const d = new Date();
document.getElementById("hari").innerHTML = d.getDay();

const months = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

let month = months[d.getMonth()];
document.getElementById("bulan").innerHTML = month;
document.getElementById("tahun").innerHTML = d.getFullYear();
