//1.input parameter  - empty

const today = new Date()
console.log(today); //2025-11-22T10:24:54.327Z

//2.input parameter - numbet milisec
const now = new Date(Date.now()) //Date.now return milisecond
console.log(now);


//3. input parameter - date string
const mydatetime = new Date("2025-11-22T18:39:15.100Z")
console.log(mydatetime); //2025-11-22T11:39:15.100Z    เวลาสากล -7 ถ้าใส่Zแปลว่าใช้ locaL timezone

//4. input parameter - year,monthIndex(0-11) ,day ,hh,mm,ss,sss
const myd = new Date(2025,11,22,18,39,15)
console.log(myd); //2025-12-22T11:39:15.000Z  
 //การแสดงผล

 console.log('----');
 
 // 1. toString()
  console.log(myd.toString()); //Mon Dec 22 2025 18:39:15 GMT+0700 (Indochina Time)//เวลาเครื่อง
 // 2. toISOstring() 
  console.log(myd.toISOString()); //2025-12-22T11:39:15.000Z    //ตามเครื่อง

// จัด format
 // 3. toLocaleString()
   console.log(myd.toLocaleString()); //12/22/2025, 6:39:15 PM
   console.log(myd.toLocaleString(`en-US`, { 
    dateStyle: "long",
    timeStyle: "long",
   })) //December 22, 2025 at 6:39:15 PM GMT+7
 // 4. Int1.DateTimeFormat()
const formatter = Intl.DateTimeFormat(`en-US`, { 
    dateStyle: "long",
    timeStyle: "long",})

console.log(formatter.format(myd));
 

const userPreference = Intl.DateTimeFormat().resolvedOptions()
console.log(userPreference.timeZone) //Asia/Bangkok
console.log(userPreference.locale) //en-US
 

