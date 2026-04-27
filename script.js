const sound = new Audio("click.mp3");
sound.volume = 0.5;

const tetot = new Audio("tetot.mp3"); // ⬅️ TAMBAH INI
tetot.volume = 0.7;

let klik = 0;
let sedangMain = false;

const overlay = document.getElementById("overlay");
const img = document.getElementById("popupImg");

function klikNo() {
  if (sedangMain) return;

// 🔊 SOUND TETOT
tetot.currentTime = 0;
tetot.play();

  klik++;

  let src = "";

  if (klik === 1) {
    src = "1.png";
  } else if (klik === 2) {
    src = "2.png";
  } else {
    src = "3.png";
  }

  img.src = src;
  overlay.style.display = "flex";

  sedangMain = true;

  setTimeout(() => {
    overlay.style.display = "none";
    sedangMain = false;
  }, 1000);
}


function pindah() {
  // 🔊 SOUND
  sound.currentTime = 0;
  sound.play();

  setTimeout(() => {
    window.location.href = "halaman1.html";
  }, 150);
}

const container = document.getElementById("love-container");

/* Buat elemen random (love / sparkle) */
function createElement() {
  const el = document.createElement("div");

  // tentuin jenis (lebih banyak love daripada sparkle)
  const isLove = Math.random() > 0.3; // 70% love, 30% sparkle

  el.classList.add("love");
  el.innerText = isLove ? "❤️" : "✨";

  // posisi random
  el.style.left = Math.random() * 100 + "vw";

  // ukuran beda
  el.style.fontSize = (15 + Math.random() * 20) + "px";

  // durasi beda (biar ga barengan)
  el.style.animationDuration = (6 + Math.random() * 6) + "s";

  // opacity beda
  el.style.opacity = isLove ? 0.5 : 0.7;

  container.appendChild(el);

  // hapus setelah selesai
  setTimeout(() => {
    el.remove();
  }, 10000);
}

/* Spawn terus */
setInterval(createElement, 400);


document.addEventListener("click", function (e) {
  // kalau klik tombol, skip (biar ga double)
  if (e.target.tagName === "BUTTON") return;

  sound.currentTime = 0;
  sound.play();
});