const containerEl = document.querySelector(".container");

for (let index = 0; index < 12; index++) {
  const colorContainerEl = document.createElement("div");
  colorContainerEl.classList.add("color-container");
  containerEl.appendChild(colorContainerEl);
}

const colorContanierEls = document.querySelectorAll(".color-container");

generateColors();

function generateColors() {
  colorContanierEls.forEach((containerEl) => {
    const newColorCode = randomColor();
    console.log("Generated color:", newColorCode);
    containerEl.style.backgroundColor = "#" + newColorCode;
    containerEl.innerText = "#" + newColorCode;
    containerEl.addEventListener("click", () => {
      blinkBackground("#" + newColorCode);
    });
  });
}

function randomColor() {
  const chars = "0123456789abcdef";
  const colorCodeLen = 6;
  let color = "";
  for (let index = 0; index < colorCodeLen; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    color += chars.substring(randomNum, randomNum + 1);
  }
  return color;
}

function blinkBackground(color) {
  const shades = generateShades(color, 10);
  let index = 0;
  const interval = setInterval(() => {
    document.body.style.backgroundColor = shades[index];
    index = (index + 1) % shades.length;
  }, 300); // Adjust the blinking speed to be slower

  setTimeout(() => {
    clearInterval(interval);
    document.body.style.backgroundColor = color;
  }, 5000); 
}

function generateShades(color, numShades) {
  const shades = [];
  const rgb = hexToRgb(color);
  for (let i = 0; i < numShades; i++) {
    const factor = (i + 1) / (numShades + 1);
    const shade = `rgb(${Math.round(rgb.r * (1 - factor))}, ${Math.round(
      rgb.g * (1 - factor)
    )}, ${Math.round(rgb.b * (1 - factor))})`;
    shades.push(shade);
  }
  return shades;
}

function hexToRgb(hex) {
  const bigint = parseInt(hex.substring(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
}
