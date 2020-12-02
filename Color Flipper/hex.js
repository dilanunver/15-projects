const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    let hexColor = '#'
    for(let i=0; i<6; i++) {
        hexColor += hex[getNumberRandom()];   
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;

});

// function changeColor(){
//     let hexColor = '#'
//     for(let i=0; i<6; i++) {
//         hexColor += hex[getNumberRandom()];   
//     }
//     color.textContent = hexColor;
//     document.body.style.backgroundColor = hexColor;

// }
// setInterval(changeColor, 100)
function getNumberRandom() {
    return Math.floor(Math.random() * hex.length);
}