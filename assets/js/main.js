const inputColor = document.getElementById("color")
const colorBtn = document.getElementById("color-btn")
const mainBg = document.getElementById("main-background")

function changeBgCol() {
    if (inputColor.value != 0) {
        mainBg.style.backgroundColor = inputColor.value;
    } else {
        alert("Please enter a Color 😀😀😀😀")
    }
}
