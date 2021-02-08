const inputColor = document.getElementById("color")
const colorBtn = document.getElementById("color-btn")
const mainBg = document.getElementById("main-background")

function changeBgCol() {
    mainBg.style.backgroundColor = inputColor.value;
}
