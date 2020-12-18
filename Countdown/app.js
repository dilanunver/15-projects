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
const items = document.querySelectorAll('.deadline-format h4');

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
console.log(tempDate)

//console.log(items)
//let futureDate = new Date(2020,11, 20, 12, 30, 00);
const futureDate = new Date(tempYear, tempMonth, tempDay + 18, 15, 44, 45)
console.log(futureDate)
//console.log(futureDate)

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes()
const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()]; // 3
//console.log(weekday) // wednesday


let month = months[futureDate.getMonth()];
//console.log(months[month])
//month = months[month];



// giveaway.innerHTML = year
giveaway.textContent = `giveaway ends on ${weekday} ${date} ${month} ${year} ${hours}: ${minutes}am`

// future time in ms

const futureTime = futureDate.getTime();
// console.log(futureTime) // 1554899537000

function getRemainingTime(){
  const today = new Date().getTime();
  //console.log(today) // 1608278416017
  const t = futureTime - today 
  //console.log(t) // 173416140
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60min
  // 1day = 24hr

  // values in ms 
  const oneDay = 24 * 60 * 60 * 1000;
  // console.log(oneDay) // 86400000
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // calculate all values
  let days = Math.floor(t / oneDay);
  // console.log(days) 2
  let hours = Math.floor((t % oneDay)/ oneHour); // 616140 / oneHour = 0.17115 = 0
   //  console.log(hours) 0
  let minutes = Math.floor((t % oneHour)/ (oneMinute))
 // console.log(minutes) // 3
  let seconds = Math.floor((t % oneMinute) / 1000);
  // console.log(seconds)

  // set values array; 
  const values = [days, hours, minutes,seconds];

  function format(item){
    if (item < 10) {
      return item = `0${item}`
    }
    return item
  }
  // console.log(values)
  items.forEach(function(item, index){
    //console.log(index)
    item.innerHTML = format(values[index]);
  });
  if (t<0){
    clearInterval(countdown)
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired.</h4>`
  }

}

// countdown

let countdown = setInterval(getRemainingTime, 1000)

getRemainingTime() 