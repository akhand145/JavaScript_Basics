///////////////////// Date and Time ///////////////////////////

// current date
// let date = new Date();

// the hour in your current time zone
// console.log( date.getHours() );

// the hour in UTC+0 time zone (London time without daylight savings)
// console.log( date.getUTCHours() );

// Setting Date components

// setFullYear(year, [month], [date])
// setMonth(month, [date])
// setDate(date)
// setHours(hour, [min], [sec], [ms])
// setMinutes(min, [sec], [ms])
// setSeconds(sec, [ms])
// setMilliseconds(ms)
// setTime(milliseconds)


////////////////////////////// Tasks: //////////////////////////////////////

// 1. Create a Date object for the date: Feb 20, 2012, 3:12am. The time zone is local.

//new Date(year, month, date, hour, minute, second, millisecond)
let d1 = new Date(2012, 1, 20, 3, 12);
console.log( d1 );

// We could also create a date from a string, like this:
//new Date(datastring)
let d2 = new Date("February 20, 2012 03:12:00");
console.log( d2 );


// 2. Write a function getWeekDay(date) to show the weekday in short format:
//    ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.

function getWeekDay(date1) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  
    return days[date1.getDay()];
  }
  
  let date1 = new Date(2014, 0, 3); // 3 Jan 2014
  console.log( getWeekDay(date1) ); // FR


// 3. European countries have days of week starting with Monday (number 1), 
//     then Tuesday (number 2) and till Sunday (number 7). 

let date2 = new Date(2012, 0, 3);  // 3 Jan 2012
  function getLocalDay(date2) {

    let day = date2.getDay();  
    if (day == 0) { // weekday 0 (sunday) is 7 in european
      day = 7;
    }  
    return day;
  }
  console.log( getLocalDay(date2) );       // tuesday, should show 2


// 4. Which day of month was many days ago?

let date3 = new Date(2015, 0, 2);

function getDateAgo(date3, days) {
    date3.setDate(date3.getDate() - days);
    return date3.getDate();
  }

console.log( getDateAgo(date3, 1) ); // 1, (1 Jan 2015)
console.log( getDateAgo(date3, 2) ); // 31, (31 Dec 2014)
console.log( getDateAgo(date3, 365) ); // 2, (2 Jan 2014)


// 5. Last day of the month ?

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
  }
  
  console.log( getLastDayOfMonth(2012, 0) ); // 31
  console.log( getLastDayOfMonth(2012, 1) ); // 29
  console.log( getLastDayOfMonth(2013, 1) ); // 28


// 6. How many seconds till tomorrow  ?

getSecondsToTomorrow() == 3600

function getSecondsToTomorrow() {
    let now = new Date();
  
    // tomorrow date
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
  
    let diff = tomorrow - now; // difference in ms
    return Math.round(diff / 1000); // convert to seconds
  }

// 7. Format the relative Data

function formatDate(date) {
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let diffMs = new Date() - date;
    let diffSec = Math.round(diffMs / 1000);
    let diffMin = diffSec / 60;
    let diffHour = diffMin / 60;
  
    // formatting
    year = year.toString().slice(-2);
    month = month < 10 ? '0' + month : month;
    dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;
  
    if (diffSec < 1) {
      return 'right now';
    } else if (diffMin < 1) {
      return `${diffSec} sec. ago`
    } else if (diffHour < 1) {
      return `${diffMin} min. ago`
    } else {
      return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
    }
  }
  
console.log( formatDate(new Date(new Date - 1)) ); // "right now"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"

console.log( formatDate(new Date(new Date - 86400 * 1000)) );
// yesterday's date like 31.12.2016 20:00
  
///////////////////////////////////////////////////////////////////////

