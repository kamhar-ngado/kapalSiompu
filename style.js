const d = new Date();

const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
let day = days[d.getDay()];
document.getElementById("hari").innerHTML = day;

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
