const openTime = new Date("2025-11-19T12:00:00")
const closeTime = new Date("2025-11-20T12:00:00")
const myBookingTime = new Date("2025-11-20T11:59:00")
const aTime = new Date("2025-11-19T12:00:00")

//using >, <, >=,<= with date object (convert to millisecton automatically before comparing)

if (openTime < closeTime) console.log("opentime comes before closetime")
else console.log("opentime comes after closetime") //opentime comes before closetime

//not using === to check the same time because === compares referece of objects
if (openTime === openTime) console.log("both opentime is the same")
else console.log("both opentime are different") //both opentime is the same
if (openTime === aTime) console.log("opentime is the same as aTime")
else console.log("opentime is not the same as aTime") //opentime is not the same as aTime
/// ใช้เทียบเวลาไม่ได้ต้องใช้  milisecond
 
//when you want to compare both date objects are the same, using getTime() function
if (openTime.getTime() === aTime.getTime())
  //getTime - return millisecond of date object
  console.log("both openTime and aTime are the same ") //both openTime and aTime are the same