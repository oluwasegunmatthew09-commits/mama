const correctPassword = "mylove123"; // CHANGE THIS PASSWORD

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
I just want to take a moment to tell you how much you truly mean to me 💕.

I thank God every day for bringing you into my life 🙏.
Meeting you, knowing you, and loving you is one of my greatest blessings.

Thank you for taking care of me, for your patience, kindness,
and the sweet love you give me 🥰.

You bring peace to my heart, joy to my soul,
and light into my life 🌸.

I appreciate everything you do for me —
even the things you don’t realize 💞.
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
