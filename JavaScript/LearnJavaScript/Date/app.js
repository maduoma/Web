// Array of Months of the year
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

// Array of Days of the week
const days = [
  "Monday",
  "Tuesday",
  "Wenesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// Define Date object and log it to the console
const date = new Date();
//const date = new Date("1/12/2004");
console.log(date);
//Get day and log it to the console
const day = date.getDay();
console.log(day, days[day]);
// Get today's date and log it to the console
const todaysDate = date.getDate();
console.log(todaysDate);
// Get month and log it to the console
const month = date.getMonth();
console.log(month, months[month]);
// Get full year and log it to the console
const year = date.getFullYear();
console.log(year);
// Putting all together
const today = `${days[day]}, ${todaysDate} ${months[month]} ${year}.`;
// Display/output on the browser page (document)
document.body.innerHTML = today;
