var dt = new Date();

// dt.getMonth() will return a month between 0 - 11
// we add one to get to the last day of the month 
// so that when getDate() is called it will return the last day of the month
 var month = dt.getMonth() + 1 ;
 var year = dt.getFullYear();

// this line does the magic (in collab with the lines above)
 var daysInMonth = new Date(year, month, 0 ).getDate();
console.log(daysInMonth);