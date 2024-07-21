const containerEl = document.querySelector(".container")

for (let index = 0; index < 12; index++) {
  const colorContainerEl = document.createElement("div");
  colorContainerEl.classList.add("color-container");
  containerEl.appendChild(colorContainerEl);
  
}

const colorContanierEls = document.querySelectorAll(".color-container")

generateColors();

function generateColors(){
  colorContanierEls.forEach((containerEl)=>{
    const newColorCode = randomColor();
    containerEl.style.backgroundColor = "#" + newColorCode;
    containerEl.innerText = "#" + newColorCode;
  })
}

function randomColor(){
  const chars = "0123456789abcdf"
  const colorCodeLen = 6;
  let color = ""
  for (let index = 0; index < colorCodeLen; index++) {
    const randomNum = Math.floor(Math.random()*chars.length);
    color += chars.substring(randomNum,randomNum+1)
    
  }
  return color;
}