// // //sync
// // console.log("starting...");
// // console.log("loading...");
// // console.log("ending...");
// // //asynchronous programming
// // console.log("starting...")
// // setTimeout(() => console.log("working#2..."), 5000)
// // //setTimeout asynchoronous function
// // console.log("ending...")

function doSomething(hasProblem) {
  return new Promise((resolve, reject) => {
    setTimeout(() => (hasProblem ? resolve("pass") : reject("fail")), 5000)
  })
}
//1. using .then().catch


console.log("starting...")
doSomething(true)
 .then((workingstatus) =>  {
    console.log(workingstatus);
    console.log('ending...');
    
 })
.catch((errorMessage) => {
    console.log(errorMessage);
    
})



//2. async-await
async function runworking() {
  console.log("starting...")
  try {
    const workStatus = await doSomething(false)
    console.log(workStatus)
    console.log("ending...")
  } catch (error) {
    console.log(error)
  }
}
runworking()
