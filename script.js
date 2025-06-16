const messages = [
  "activity",
  "THANK YOU!",
  "Thank you — for your time, your patience, and for inspiring me to grow into a better version of myself.",
  "Thank you for sharing those notes, for helping me through exams.",
  "Thank you for all the laughter, the smiles, and the unforgettable moments we shared.",
  "Thank you for the beautiful memories — those fun, heartwarming conversations.",
  "Thank you for three wholesome years — from our first meetup to the final goodbye.",
  "Special thanks for this rare, beautiful friendship. It means the world to me.",
  "Thank you for introducing me to [Name of Person] —\nthe genius with a glare, a heart of gold, and a PhD in getting irritated.\nHe/She’s a walking exam paper with mood swings... and somehow, I’m still a fan. 😅❤️"
];

const logos = [
  "image/logo1.png", "image/logo2.png", "image/logo3.png", "image/logo4.png",
  "image/logo5.png", "image/logo6.png", "image/logo7.png", "image/logo8.png"
];

// Detect if mobile
const isMobile = window.innerWidth <= 768;

// Backgrounds for desktop vs mobile
const backgroundsDesktop = [
  "image/bg1.jpg", "image/bg2.jpg", "image/bg3.jpg", "image/bg4.jpg",
  "image/bg5.jpg", "image/bg6.jpg", "image/bg7.jpg", "image/bg8.jpg"
];

const backgroundsMobile = [
  "image/mbg1.jpg", "image/mbg2.jpg", "image/mbg3.jpg", "image/mbg4.jpg",
  "image/mbg5.jpg", "image/mbg6.jpg", "image/mbg7.jpg", "image/mbg8.jpg"
];

const backgrounds = isMobile ? backgroundsMobile : backgroundsDesktop;

let stage = 0;
let charIndex = 0;
const abc = "abcdefghijklmnopqrstuvwxyz";
const thank = "THANK YOU!";

document.getElementById("clickBtn").onclick = () => {
  const content = document.getElementById("content");

  if (stage === 0) {
    // First stage: letter animation
    content.innerHTML = '<button id="plusBtn">Click me First</button><div id="letters"></div>';
    document.getElementById("plusBtn").onclick = () => {
      if (charIndex < 20) {
        const next = document.createElement("span");
        next.className = "char";
        next.textContent = abc[charIndex % 26];
        document.getElementById("letters").appendChild(next);
        charIndex++;
      } else if (charIndex < 29) {
        const next = document.createElement("span");
        next.className = "char";
        next.textContent = thank[charIndex - 20];
        document.getElementById("letters").appendChild(next);
        charIndex++;
        if (charIndex === 29) {
          document.getElementById("plusBtn").remove();
        }
      }
    };
  } else if (stage < messages.length) {
    // Show message
    content.textContent = messages[stage];

    // Update logo and correct background based on device type
    if (stage - 1 < logos.length) {
      document.getElementById("logo").src = logos[stage - 1];
      document.body.style.backgroundImage = `url('${backgrounds[stage - 1]}')`;
    }
  } else {
    // Final stage
    document.getElementById("container").style.display = "none";
    document.getElementById("finalPage").style.display = "flex";
    startEmojiRain();
  }

  if (stage !== 0) charIndex = 0;
  stage++;
};

// Emoji Rainfall Effect
function startEmojiRain() {
  const container = document.getElementById("emojiRain");
  const emojis = ["❤️", "✨", "💫", "💖", "💗"];

  setInterval(() => {
    const emoji = document.createElement("div");
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.position = "absolute";
    emoji.style.fontSize = Math.random() * 20 + 20 + "px";
    emoji.style.left = Math.random() * window.innerWidth + "px";
    emoji.style.animation = "fall 5s linear";
    container.appendChild(emoji);
    setTimeout(() => emoji.remove(), 5000);
  }, 200);
}

// Inject emoji animation
const style = document.createElement("style");
style.textContent = `
  @keyframes fall {
    0% { transform: translateY(-10%); opacity: 1; }
    100% { transform: translateY(100vh); opacity: 0; }
  }
`;
document.head.appendChild(style);
