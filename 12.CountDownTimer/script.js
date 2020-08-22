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


  // Adding 10 days to the giveaway after checking current date functionality
  let tempDate = new Date();
  let tempYear = tempDate.getFullYear();
  let tempMonth = tempDate.getMonth();
  let tempDay = tempDate.getDate();

  const futureDate = new Date(tempYear, tempMonth, tempDay+13, 11, 30, 0);


  // let futureDate  = new Date(2020, 9, 30, 22, 30, 0);
  // console.log(futureDate);

  // console.log(year); prints defined year...
  const year = futureDate.getFullYear();
  const hours = futureDate.getHours();
  const minutes = futureDate.getMinutes();



  let month = futureDate.getMonth();
  month = months[month]
  // console.log(month);  returns the numeral for the month..

  // date of the particular month...
  const date = futureDate.getDate();
  // Day of the month...
  let weekday = futureDate.getDay();
  weekday = weekdays[weekday]; 
  // console.log(weekday);

  giveaway.textContent = `Giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours} : ${minutes}`;

  // Future time in ms

  const futureTime = futureDate.getTime();
  // console.log(futureTime);

  function getRemainingTime(){
    const today = new Date().getTime();
    // console.log(today);

    const t = futureTime - today;
    /*
      1s = 1000ms
      1m = 60s
      1hr = 60min
      1day = 24hr
    */
   const oneDay = 24*60*60*1000;
   const oneHour = 60*60*1000;
   const oneMin = 60*1000;
    // Calculating Days Left...
   let daysLeft = t/oneDay;
   daysLeft = Math.floor(daysLeft);
   console.log(daysLeft);

  //  Calculating Hours
  let hoursLeft = Math.floor((t % oneDay) / oneHour);
    // console.log(hoursLeft);
  let minutesLeft = Math.floor(( t % oneHour ) / oneMin);
    // console.log(minutesLeft);
  let secondsLeft = Math.floor(( t % oneMin ) / 1000);
    // console.log(secondsLeft);

  // Setting Values to the DOM

  const values = [daysLeft, hoursLeft, minutesLeft, secondsLeft];

  // Adding 0 ahead of values less than 10...
  function format(item){
    if(item < 10){
      return item = `0${item}`;
    }
    return item;
  }

  // Looping through the items (DOM Countdown)
  items.forEach(function (item,index) {
    item.innerHTML = format(values[index]);
  });

  if(t < 0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired"> Sorry! This giveaway has ended</h4>`;
  }
}
// Automatic CountDown

// Takes (whatFunctionToCall, InWhatIntervalInMiliSecond)
let countdown = setInterval(getRemainingTime, 1000);


  getRemainingTime();