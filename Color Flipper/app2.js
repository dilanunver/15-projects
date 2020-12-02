let colors = ['red', 'green', "rgba(133, 122, 200)", "#f15025"];
let color = document.querySelector('.color');
let btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    let randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];

});

function getRandomNumber(){
 return Math.floor(Math.random() * colors.length);

}
