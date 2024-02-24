/*------------------
		Typed js
	--------------------*/
if ($("#typed-text").length > 0) {
  var typed2 = new Typed("#typed-text", {
    strings: [
      "제 이름은 무하마드 무스토파 입니다",
      "제 고향은 툴룽가궁 왔습니다",
      "지금은 부산 에 살고 있습니다",
      "감사합니다🫰🫰",
    ],
    typeSpeed: 150,
    loop: true,
    backDelay: 7000,
  });
}

if ($("#typed-text-id").length > 0) {
  var typed2 = new Typed("#typed-text-id", {
    strings: [
      "Nama saya Muhamad Mustofa",
      "Saya berasal dari Tulungagung",
      "Saya sekarang tinggal di Busan",

      "Terima kasih 🫰🫰",
    ],
    typeSpeed: 70,
    loop: true,
    backDelay: 3000,
  });
}

$("document").ready(function () {
  var trigger = $("#hamburger"),
    isClosed = false;

  trigger.click(function () {
    burgerTime();
  });

  function burgerTime() {
    if (isClosed == true) {
      trigger.removeClass("is-open");
      trigger.addClass("is-closed");
      isClosed = false;
    } else {
      trigger.removeClass("is-closed");
      trigger.addClass("is-open");
      isClosed = true;
    }
  }
});

const text1 = baffle(".header-mobile h2");
text1.set({
  characters: "░░█ /<▒▓▒ ▒░▒█/ █/▒ ▒▓/█▒ ▓▒░▓ ██░ ▒░▓░ ▒░▓█",
  speed: 150,
});
text1.start();
text1.reveal(15000);

function init() {
  startTime();
  myclock();
  randomQuote();
}

cari = true;

function myclock() {
  $(".myclock").show();
}
jalan = false;

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  document.querySelector(".jam").innerHTML = h + ":" + m;
  document.querySelector(".detik").innerHTML = s;
  var t = setTimeout(startTime, 500);
  mytanggal();
  if (cari) {
    if (h > 20) tulis("malam", "seharusnya kamu sudah tidur");
    else if (h > 18) tulis("malam", "waktunya mengisi energi");
    else if (h > 17) tulis("petang", "selamat menikmati senja");
    else if (h > 14) tulis("sore", "selamat menjalani hari");
    else if (h > 13) tulis("siang", "tetap semangat");
    else if (h > 9) tulis("siang", "selamat bekerja");
    else if (h > 4) tulis("pagi", "selamat beraktivitas");
    else tulis("malam", "seharusnya kamu sudah tidur");
    if (h > 18) document.querySelector("img").src = "img/boy_malam.jpg";
    else if (h > 4) document.querySelector("img").src = "img/boy_siang.jpg";
    else document.querySelector("img").src = "img/boy_malam.jpg";
  }
}
function tulis(waktu, ucapan) {
  $("#spannama2").text("Selamat " + waktu + ", " + ucapan + ".");
}
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
var elem = document.documentElement;
fs = false;

function mytanggal() {
  var hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  var bulan = [
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
    "Nopember",
    "Desember",
  ];
  var d = new Date();
  var dayName = hari[d.getDay()];
  var monthName = bulan[d.getMonth()];
  tanggal = dayName + ", " + d.getDate() + " " + monthName;
  $(".tanggal").text(tanggal);
}

const quotes = [
  {
    quote:
      "Bila kau tak tahan lelahnya belajar, maka kau harus tahan menanggung perihnya kebodohan",
    source: "Imam Syafi'i",
  },
  {
    quote: "Just because I carry it all so well doesn't mean it's not heavy",
    source: "❤️",
  },
  {
    quote: "Semesta memiliki alurnya masing-masing",
    source: "❤️",
  },
  {
    quote: "You don't lose, You learn",
    source: "❤️",
  },
  {
    quote: "I own my own life and my own decission",
    source: "❤️",
  },
  {
    quote:
      "Every failure, rejection, betrayal should be the reason for you to come back stronger in life by working on goals and achiving them",
    source: "❤️",
  },
  {
    quote:
      "Masa lalu dan frustasi merupakan fondasi dasar untuk menciptakan kembali kehidupan baru yang lebih baik",
    source: "Anthony Robbins",
  },
  {
    quote:
      "Ada kalimat yang ingin aku dapatkan dari dia tapi aku dapat dari orang lain",
    source: "❤️",
  },
  {
    quote:
      "People doesn't want to end their life, they just wanted to end the pain",
    source: "❤️",
  },
  {
    quote: "Need someone to talk about life, but sitting alone is much better",
    source: "❤️",
  },
  {
    quote:
      "Seorang bahagia bukan karena semua benar dalam hidupnya, tapi sikap terhadap hidupnya yang benar",
    source: "Sundar Pichai",
  },
  {
    quote:
      "Jangan pernah pikirkan perkataan orang pikirkanlah apa yang mau kita gapai karena orang lain tidak dapat mencampuri urusan hidup kita",
    source: "❤️",
  },
];
setInterval(randomQuote, 15000);
function randomQuote() {
  let random = quotes[Math.floor(Math.random() * quotes.length)];
  quotation.innerText = `"${random.quote}"`;
  source.innerText = random.source;
}

var auto_refresh = setInterval(function () {
  $(".logo-m").load(location.href + " .logo-m");
}, 5600);
