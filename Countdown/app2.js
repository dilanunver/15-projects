const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4')

let tarih = new Date();
let yil = tarih.getFullYear();
let ay = tarih.getMonth();
let gun = tarih.getDate();
let hour = tarih.getHours()
let min = tarih.getMinutes()

const letfDay = new Date(yil, ay, gun + 22, 15, 45, 22)


//let anyDate = new Date(2021, 2, 12, 10, 19, 55,23);
/* let anyYear = anyDate.getFullYear();
let anyDay = anyDate.getDate();
let hour = anyDate.getHours();
let min = anyDate.getMinutes(); */
// let sec = anyDate.getSeconds(); no need for now

let weekday = weekdays[letfDay.getDay()]
const month = months[letfDay.getMonth()]

giveaway.textContent = `giveaway ends on ${weekday}, ${gun}, ${month}, ${yil}, ${hour}:${min}am`

// arrange the deadline 

const now = letfDay.getTime();

function howManyTimes(){
    const futureTime = new Date().getTime();
    const fark = now - futureTime

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMin = 60 * 1000;

    let days = Math.floor(fark / oneDay);
    let saat = Math.floor((fark % oneDay) / oneHour);
    let minutes = Math.floor((fark % oneHour) / oneMin);
    let saniye = Math.floor((fark % oneMin) / 1000)
   /*  console.log(days);
    console.log(saat);
    console.log(minutes);
    console.log(saniye); */

    const values = [days, saat, minutes, saniye];

    function format(item) {
        if(item < 10){
            return item = `0${item}`
        }
        return item
    }

    items.forEach(function(item,index){
        item.innerHTML = format(values[index])
    })

    if (fark < 0) {
        clearInterval(countdown)
        deadline.innerHTML = `<h4 class = "expired">sorry, this giveaway has expired.</h4>`
    }
    
}
let countdown = setInterval(howManyTimes, 1000)

howManyTimes()