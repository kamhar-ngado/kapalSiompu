function showDate() {
  let d = new Date();

  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  let day = days[d.getDay()];
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
  let year = d.getFullYear();

  let tanggal = day + ", " + month + " " + year;

  document.getElementById("tanggal").innerHTML = tanggal;
}

showDate();

function showTime() {
  let d = new Date();
  let s = d.getSeconds(); // 0 - 59
  let m = d.getMinutes();
  let h = d.getHours();

  if (h < 10) {
    h = "0" + h;
  } else {
    h;
  }
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  let time = h + ":" + m + ":" + s;
  document.getElementById("jamDigital").innerHTML = time;
  setTimeout(showTime, 1000);
}
showTime();
