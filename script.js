const photos = [
  "images/photo1.jpg", "images/photo2.jpg", "images/photo3.jpg", "images/photo4.jpg", "images/photo5.jpg",
  "images/photo6.jpg", "images/photo7.jpg", "images/photo8.jpg", "images/photo9.jpg", "images/photo10.jpg",
  "images/photo11.jpg", "images/photo12.jpg", "images/photo13.jpg", "images/photo14.jpg", "images/photo15.jpg"
];

const messages = [
  "পুচি, প্রথম দেখা ৬ই আগস্ট ২০২৪ – সেই দিন থেকেই তুই আমার পৃথিবী ❤️",
  "তোর হাত ধরা, হেঁটে চলা – এটা যেন ছিল স্বপ্নের মতো 😍",
  "প্রথম চকলেট আর গোলাপ – তুই হেসেছিলি, আর আমি পাগল হয়েছিলাম 😊",
  "তোর প্রতিটা হাসি আমার হৃদয়ের ছন্দ 🎵",
  "তোর সাথে কাটানো মুহূর্তগুলো অমূল্য 💖",
  "ভালোবাসা মানেই তুই, পুচি 🌸",
  "আমার জীবনের সেরা সিদ্ধান্ত ছিল তোকে ভালবাসা 😘",
  "তোর চোখে যে ভালোবাসা দেখি, তা চিরন্তন 💫",
  "তুই আছিস বলেই জীবনটা এত রঙিন 🌈",
  "তুই পাশে থাকলেই সব ভয় কেটে যায় 🥺",
  "আমরা মিলে একটা সুন্দর গল্প লিখছি ✍️",
  "তুই না থাকলে আমি অসম্পূর্ণ 💔",
  "তুই আমার ভরসা, আমার আপন ❤️",
  "এক বছর, ৩৬৫ দিনের ভালোবাসা আজ পূর্ণ হলো 🕊️",
  "Happy 1st Anniversary Puchi! – ভালবাসা দিয়ে পুচি 💍💞"
];

const container = document.getElementById("letters-container");
let current = 0;

function showNextLetter() {
  if (current < photos.length) {
    const letter = document.createElement("div");
    letter.className = "letter active";
    letter.innerHTML = `<img src="${photos[current]}" /><p>${messages[current]}</p>`;
    container.appendChild(letter);
    letter.addEventListener("click", () => {
      letter.classList.remove("active");
      current++;
      showNextLetter();
    });
  }
}

showNextLetter();

document.getElementById("music-btn").addEventListener("click", () => {
  const audio = document.getElementById("bg-music");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

// Starfield animation
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];
for (let i = 0; i < 150; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5,
    speed: Math.random() * 0.5 + 0.2
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'white';
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
  });
}

function updateStars() {
  stars.forEach(star => {
    star.y += star.speed;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  });
}

function animateStars() {
  drawStars();
  updateStars();
  requestAnimationFrame(animateStars);
}

animateStars();
function showButterfly() {
  const butterfly = document.getElementById("butterfly");
  butterfly.style.opacity = "1";
  butterfly.style.animation = "flyAway 5s ease-in forwards";
}

function showNextLetter() {
  if (current < photos.length) {
    const letter = document.createElement("div");
    letter.className = "letter active";
    letter.innerHTML = `<img src="${photos[current]}" /><p>${messages[current]}</p>`;
    container.appendChild(letter);
    letter.addEventListener("click", () => {
      letter.classList.remove("active");
      current++;
      if (current === photos.length) {
        // সব ছবি শেষ হলে প্রজাপতি উড়বে
        showButterfly();
      } else {
        showNextLetter();
      }
    });
  }
}
