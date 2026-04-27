// ======================
// SOUND
// ======================// 🔊 SOUND efek benar & salah
const soundBenar = new Audio("yeay.mp3");
const soundSalah = new Audio("tetot.mp3");

const tapSound = new Audio("click.mp3"); // bisa beda file kalo mau

// ======================
// LOADING TAP BUTTON
// ======================
let progress = 0;
const bar = document.getElementById("progress");
const text = document.getElementById("text");
const btn = document.getElementById("tapBtn");
const loveClick = document.getElementById("love-click");

btn.onclick = function(event) {
  if (progress >= 100) return;

  // 🔊 sound tap
  tapSound.currentTime = 0;
  tapSound.play();

  // naik random
  progress += Math.floor(Math.random() * 10) + 5;
  if (progress > 100) progress = 100;

  bar.style.width = progress + "%";

  // love muncul di klik
  const x = event.clientX;
  const y = event.clientY;

  const love = document.createElement("div");
  love.classList.add("love-pop");
  love.innerText = "❤️";
  love.style.left = x + "px";
  love.style.top = y + "px";

  loveClick.appendChild(love);

  setTimeout(() => {
    love.remove();
  }, 1000);

  // pesan progress
  let message = "";
  if (progress < 30) message = "Klik lagi dong 😆";
  else if (progress < 60) message = "Dikit lagi 🥺";
  else if (progress < 90) message = "Hampirrr 💖";
  else if (progress < 100) message = "AYO DIKIT LAGI 🔥";
  else message = "YEEAAY 💖";

  text.innerText = progress + "% - " + message;

  // selesai loading → masuk verifikasi
  if (progress === 100) {
    setTimeout(() => {
      document.getElementById("loadingPage").classList.remove("aktif");
      document.getElementById("verifyPage").classList.add("aktif");

      loadQuestion(); // mulai quiz
    }, 500);
  }
};

// ======================
// QUIZ VERIFIKASI
// ======================
const questions = [
  {q: "Berapa tanggal lahir kamu?", answers: ["25", "27", "30"], correct: "27"},
  {q: "Apa warna favorit kamu?", answers: ["Merah", "Biru", "Hijau"], correct: "Biru"},
  {q: "Siapa nama kamu?", answers: ["Anisah", "Siti", "Giani Agnelly"], correct: "Giani Agnelly"},
  {q: "Dimana kita pertama kali kenal?", answers: ["Instagram", "Free Fire", "Sekolah"], correct: "Free Fire"},
  {q: "Dimana pertama kali kita main bareng?", answers: ["Gacoan", "Mixue", "Mie Ayam"], correct: "Mixue"}
];

let current = 0;
const questionText = document.getElementById("questionText");
const answersDiv = document.getElementById("answers");
const popup = document.getElementById("popupSalah");

function loadQuestion() {
  const q = questions[current];

  questionText.innerText = q.q;
  answersDiv.innerHTML = "";

  q.answers.forEach(ans => {
    const btn = document.createElement("button");
    btn.innerText = ans;

btn.onclick = () => {
  // 🔊 SOUND tombol jawaban
  
  if (ans === q.correct) {
    // 🔊 SOUND benar
    soundBenar.currentTime = 0;
    soundBenar.play();

    current++;
    if (current < questions.length) {
      loadQuestion();
    } else {
      document.getElementById("verifyPage").classList.remove("aktif");
      document.getElementById("mainPage").classList.add("aktif");
    }
  } else {
    // 🔊 SOUND salah
    soundSalah.currentTime = 0;
    soundSalah.play();

    popup.style.display = "flex";
    setTimeout(() => {
      popup.style.display = "none";
    }, 2000);
  }
};
    answersDiv.appendChild(btn);
  });
  
  
}