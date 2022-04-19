let d = new Date();
let s = d.getSeconds();

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
document.getElementById("jam").innerHTML = d.getHours();
document.getElementById("menit").innerHTML = d.getMinutes();

function showTime() {
  let d = new Date();
  let s = d.getSeconds(); // 0 - 59
  s = s < 10 ? "0" + s : s;
  document.getElementById("jamDigital").innerText = s;
  document.getElementById("jamDigital").textContent = s;
  setTimeout(showTime, 1000);
}
showTime();
