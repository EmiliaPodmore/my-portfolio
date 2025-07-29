const typewriter = document.querySelector(".typewriter");
const text = typewriter.textContent;
let charIndex = 0;

typewriter.textContent = "";

setInterval(() => {
  typewriter.textContent += text[charIndex];
  charIndex++;
  if (charIndex >= text.length) {
    charIndex = 0;
  }
}, 80);
