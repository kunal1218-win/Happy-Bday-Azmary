const lyricsLines = [
  "We are still kids and we're so in love",
  "Fightin' against all odds",
  "I know we'll be alright this time",
  "Darling, just hold my hand",
  "Be my girl, I'll be your man",
  "I see my future in your eyes
  /* STEP 2 : IMAGES */

const imagesPage = document.getElementById("imagesPage");
const imageSlider = document.getElementById("imageSlider");
const imagesNextBtn = document.getElementById("imagesNextBtn");

const imageList = [
  "images/pic1.jpg","images/pic2.jpg","images/pic3.jpg",
  "images/pic4.jpg","images/pic5.jpg","images/pic6.jpg",
  "images/pic7.jpg","images/pic8.jpg","images/pic9.jpg",
  "images/pic10.jpg","images/pic11.jpg","images/pic12.jpg",
  "images/pic13.jpg","images/pic14.jpg","images/pic15.jpg"
];

// Inject images
imageList.forEach(src => {
  const img = document.createElement("img");
  img.src = src;

  img.addEventListener("click", () => {
    const zoom = document.createElement("div");
    zoom.className = "zoom";
    zoom.innerHTML = `<img src="${src}">`;
    zoom.onclick = () => zoom.remove();
    document.body.appendChild(zoom);
  });

  imageSlider.appendChild(img);
});

// Enable next button after user scrolls
imageSlider.addEventListener("scroll", () => {
  imagesNextBtn.disabled = false;
});

// Button click → go to videos page (STEP 3 later)
imagesNextBtn.onclick = () => {
  document.querySelector(".page.active").classList.remove("active");
  imagesPage.classList.remove("active");
  document.getElementById("videosPage").classList.add("active");
};
/* STEP 3 : VIDEOS */

const videosPage = document.getElementById("videosPage");
const videoSlider = document.getElementById("videoSlider");
const videosNextBtn = document.getElementById("videosNextBtn");

const videoList = [
  "videos/video1.mp4",
  "videos/video2.mp4",
  "videos/video3.mp4",
  "videos/video4.mp4"
];

let videoPlayed = false;

// Inject videos
videoList.forEach(src => {
  const wrap = document.createElement("div");
  wrap.className = "video-slide";

  const video = document.createElement("video");
  video.src = src;
  video.controls = false;
  video.playsInline = true;

  video.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      videoPlayed = true;
      videosNextBtn.disabled = false;
    } else {
      video.pause();
    }
  });

  wrap.appendChild(video);
  videoSlider.appendChild(wrap);
});

// Button click → FINAL PAGE
videosNextBtn.onclick = () => {
  document.querySelector(".page.active").classList.remove("active");
  videosPage.classList.remove("active");
  document.getElementById("finalPage").classList.add("active");
};
/* STEP 4 : FINAL PAGE */

const finalTextEl = document.getElementById("finalText");
const bgSong = document.getElementById("bgSong");

const finalLines = [
  "We’ve shared moments that words can’t fully describe.",
  "Memories that stay, even when time keeps moving.",
  "",
  "You are special — not just today,",
  "but in every silent prayer and every smile.",
  "",
  "May your life be filled with love, peace,",
  "and everything your heart quietly wishes for.",
  "",
  "Happy Birthday 🤍"
];

let lineIndex = 0;

function typeFinalText() {
  if (lineIndex < finalLines.length) {
    finalTextEl.innerHTML += finalLines[lineIndex] + "\n";
    lineIndex++;
    setTimeout(typeFinalText, 1200);
  }
}

// Start final page effects
document.getElementById("videosNextBtn").addEventListener("click", () => {
  setTimeout(() => {
    bgSong.volume = 0.6;
    bgSong.play();
    typeFinalText();
  }, 800);
});
