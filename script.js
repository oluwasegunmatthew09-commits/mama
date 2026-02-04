const correctPassword = "iloveyou"; // CHANGE THIS PASSWORD 

function unlock() {
  const input = document.getElementById("password").value;
  if (input === correctPassword) {
    document.getElementById("lock-screen").style.display = "none";
    document.getElementById("content").style.display = "block";
    document.getElementById("music").play();
    typeText();
  } else {
    document.getElementById("error").innerText = "Wrong password ❤️";
  }
}

const titleText = "Hey Mama 💖";
const letterText = `
I just want to take a moment to tell you how much I truly love you 💖. 
Every single day, I thank God 🙏 for bringing you into my life 
and for letting me experience your love and care. 
You mean the world to me 🌎, and I can never fully express how grateful I am 
for everything you’ve done for me.

Thank you for always being there, for taking care of me, 
for supporting me, and for loving me unconditionally 🥰. 
Your smile brightens my darkest days 🌞, and your hugs are my safe place 🤗. 
I appreciate every little thing you do, even the things you think go unnoticed 💕.

You are my heart, my peace, and my happiness ❤️. 
I pray that God continues to bless you with health, joy, and endless love 🙏✨. 
You deserve the world, Mama 🌹, and I promise to always love you, cherish you, 
and make you feel as special as you make me feel every day 💌.

I love you, Aminatta 😘❤️
`;

let i = 0;
let j = 0;

function typeText() {
  if (i < titleText.length) {
    document.getElementById("title").innerHTML += titleText.charAt(i);
    i++;
    setTimeout(typeText, 100);
  } else if (j < letterText.length) {
    document.getElementById("typed-text").innerHTML += letterText.charAt(j);
    j++;
    setTimeout(typeText, 30);
  }
}
