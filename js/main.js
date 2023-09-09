'use strict'


// Gets the current day 
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let displayDay = document.getElementById('currDay');
displayDay.innerHTML = days[new Date().getDay()];

// Gets the current  UTC

let displayUtc = document.getElementById('utc');
displayUtc.innerHTML = new Date ().getTime();