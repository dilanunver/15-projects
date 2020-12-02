const btn = document.getElementById('btn')
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    const resultColor = getRgbColor();
    setColorToHtml(resultColor)
});
function setColorToHtml(resultColor) {
    color.textContent = resultColor;
    document.body.style.backgroundColor = resultColor;
}
function getRandomRgbArray() {
    const rgbColor = [];
    for (let i = 0; i < 3; i++) {
        rgbColor.push(getRandomNumber(255))
    }
    return rgbColor;
}
function getRgbColor() {
    const rgbArray = getRandomRgbArray();
    const color1 = rgbArray[0];
    const color2 = rgbArray[1];
    const color3 = rgbArray[2];
    const resultColor = `rgb(${color1}, ${color2}, ${color3})`
    return resultColor;
}
function getRandomNumber(multiplier){
    return Math.floor(Math.random() * multiplier);
}
