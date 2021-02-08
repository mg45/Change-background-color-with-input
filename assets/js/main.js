const inputColor = document.getElementById("color")
const colorBtn = document.getElementById("color-btn")
const mainBg = document.getElementById("main-background")

function changeBgCol() {
    if (inputColor.value == 0) {
        alert("Please enter a Color 😀😀😀😀")
    } else {
        mainBg.style.backgroundColor = inputColor.value;
    }
}
