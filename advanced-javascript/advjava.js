// const response1 = document.getElementById("response1");
// const inputField = document.getElementById("inputField");
// const btn = document.getElementById("btn");

// function processInput() {
//   const count = Number(inputField.value);

//   count >= 1000
//     ? (response1.innerText = "This is a large number.")
//     : count === 1000
//       ? (response1.innerText = "This is exactly one thousand.")
//       : (response1.innerText = "This is a small number.");
// }

// btn.addEventListener("click", processInput);
// /*
// price list
// coffee $2
// tea $1.5
// sandwich $5

// */

// function selectItem(item) {
//   let price = 0;

//   switch (item) {
//     case "coffee":
//       response1.innerText = "this coffee cost is $2";
//       price = 2;
//       break;

//     case "tea":
//       response1.innerText = "this tea cost is $1.5";
//       price = 1.5;
//       break;

//     case "sandwich":
//       response1.innerText = "this sandwich cost is $5";
//       price = 5;
//       break;

//     case "total":
//       response1.innerText = "the total price is $8.50";
//       price = 8.5;
//       break;

//     default:
//       response1.innerText = "item not found";
//   }
//   if ("coffee" === item || "tea" === item || "sandwich" === item) {
//     return `you selected ${item} and the price is $${price}`;
//   } else if ("total" === item) {
//     return `the total price is $${price}`;
//   }
//   return `item not found`;
// }

// const tea = ["tea", "coffee", "sandwich", "total"];
// console.log(selectItem(tea[1]));

// const namesAndAge = {
//   john: 25,
//   jane: 80,
//   doe: 22,
// };
// const { john, jane, doe } = namesAndAge;
// console.log(john);
// console.log(jane);
// console.log(doe);

// // let light = ["🔴", "🟡", "🟢"];

// // function displayLight(color) {
// //   console.log(color);
// // }

// // displayLight(light[0]);
// // setTimeout(displayLight, 3000, light[1]);
// // setTimeout(displayLight, 6000, light[2]);
// // setTimeout(displayLight, 9000, light[0]);
// // setTimeout(displayLight, 12000, light[1]);
// // setTimeout(displayLight, 15000, light[2]);
// // setTimeout(displayLight, 15000, light[0]);
// // let result = "Abuja";
// // function logAnswer(answer, points) {
// //   if (!inputField.value) {
// //     response1.innerText = "Please enter an answer.";
// //     return;
// //   }
// //   if (inputField.value.toLowerCase() === result.toLowerCase()) {
// //     response1.innerText = `The answer is ${result} of course! You got the answer correct, give yourself ${points} points.`;
// //   } else {
// //     response1.innerText = `The answer is  not ${result} of course! You didnt get the answer correct, give yourself 0 points.`;
// //   }
// // }

// // let question = "What is the capital of Nigeria?";
// // let points = 10;
// // response1.innerText = question;
// // btn.addEventListener("click", function () {
// //   setTimeout(() => logAnswer(inputField.value, points), 3000);
// // });

// const date = new Date();
// switch (date.getDay() - 0) {
//   case 0:
//     console.log("Today is Sunday");
//     break;
//   case 1:
//     console.log("today is Monday");
//     break;
//   case 2:
//     console.log("today is Tuesday");
//     break;
//   case 3:
//     console.log("today is Wednesday");
//     break;
//   case 4:
//     console.log("today is Thursday");
//     break;
//   case 5:
//     console.log("today is Friday");
//     break;
//   case 6:
//     console.log("today is Saturday");
//     break;
//   default:
//     console.log("Invalid day");
// }

// console.log();

// //fake stock price generator
// const stockName = document.getElementById("stock-name-value");
// const stockSymbol = document.getElementById("stock-symbol-value");
// const stockPrice = document.getElementById("stock-price-value");
// const stockTime = document.getElementById("stock-time-value");

// const stockNames = [
//   "TechCorp",
//   "HealthInc",
//   "GreenEnergy",
//   "FinServe",
//   "AutoMakers",
//   "Foodies",
//   "RetailGiant",
//   "MediaNow",
//   "EduFuture",
//   "Innovate",
// ];
// const stockSymbols = [
//   "TC",
//   "HI",
//   "GE",
//   "FS",
//   "AM",
//   "FD",
//   "RG",
//   "MN",
//   "EF",
//   "IN",
// ];

// // function RandomStockName() {
// //   const randomNum = Math.floor(Math.random() * stockNames.length);
// //   const randomSym = stockSymbols[randomNum];
// //   stockName.innerText = stockNames[randomNum];
// //   stockSymbol.innerText = randomSym;
// //   return stockNames[randomNum];
// // }

// // function randomPrice() {
// //   const price = (Math.random() * 10).toFixed(2);
// //   stockPrice.innerText = `$${price}`;
// //   return price;
// // }

// // function colorChange() {
// //   const pricing = randomPrice();
// //   if (pricing > 5) {
// //     stockPrice.style.color = "green";
// //   } else {
// //     stockPrice.style.color = "red";
// //   }
// //   return pricing;
// // }

// // function randomTime() {
// //   const time = new Date();
// //   stockTime.innerText = time.toTimeString().split(" ")[0];
// //   return time;
// // }

// // const intervalId = setTimeout(() => {
// //   RandomStockName();
// //   randomPrice();
// //   colorChange();
// //   randomTime();
// // }, 500);

// // localStorage.setItem("stockName", "hello world");
// // let output = JSON.parse(localStorage.getItem("stockName"));
// // console.log(output);

// // clearTimeout(intervalId);

// async function fetchData() {
//   const response = await fetch("https://dog.ceo/api/breeds/image/random");
//   if (!response.ok) {
//     console.log("error fetching data");
//     return;
//   }
//   const data = await response.json();
//   console.log(data);
// }
// fetchData();


// function randomDog(){
//    setInterval(() => {
//    fetch("https://dog.ceo/api/breeds/image/random")
//   .then((response) => response.json())
//   .then((data) => {
//     const dogImage = document.getElementById("dog");
//     dogImage.src = data.message;
//     dogImage.style.width = "600px";
//     dogImage.style.height = "600px";
//     dogImage.style.objectFit = "cover";
//     dogImage.style.margin = 'auto';
    
//   })
//   .catch((error) => console.log(error));
// }, 1500);
// }
// randomDog();

// const reducedData = [1, 2, 3, 4, 5];

// const dataSum = reducedData.reduce((acc, curr) => acc + curr, 0);
// console.log(dataSum *5);



// //using geolocation API to get the user's current location and display it on a map
// function geoFindMe() {
//   const status = document.querySelector("#status");
//   const mapLink = document.querySelector("#map-link");

//   mapLink.href = "";
//   mapLink.textContent = "";

//   function success(position) {
//     const latitude = position.coords.latitude;
//     const longitude = position.coords.longitude;

//     status.textContent = "";
//     mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
//     mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
//   }

//   function error() {
//     status.textContent = "Unable to retrieve your location";
//   }

//   if (!navigator.geolocation) {
//     status.textContent = "Geolocation is not supported by your browser";
//   } else {
//     status.textContent = "Locating…";
//    localStorage.setItem("options", JSON.stringify( navigator.geolocation.getCurrentPosition(success, error)));
//    return JSON.parse(localStorage.getItem("options"));
//   }
// }

// document.querySelector("#find-me").addEventListener("click", geoFindMe);


// async function startGame(){
//   const response = await fetch("https://opentdb.com/api.php?amount=1&type=multiple");
//   if (!response.ok) {
//     console.log("error fetching data");
//     return;
//   }
//   const data = await response.json();
//   const question = document.getElementById('dog')
//   console.log('data is here', data);
//   const number = Math.floor(Math.random() * 60);
//   console.log('number is here',data.results)
//   console.log(data.results[0].question[number])

//   question.innerText = data.results[0].question[number]
// }

// startGame();


async function postInformation(){
  const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
    method:'POST',
    body:JSON.stringify({
      title:'foo',
      body:'bar',
      userId:1,
    }),
    headers:{
      'Content-Type':'application/json; charset=UTF-8'
    }
  });
  if (!response.ok) {
    console.log("error fetching data");
    return;
  }
  const data = await response.json()
  console.log( data);
}

// async function getInformation(){
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts/101");
//   if (!response.ok) {
//     console.log("error fetching data");
//     return;
//   }
//   const data = await response.json()
//   console.log(data);
// }


// postInformation();
// // getInformation();


const promise = new Promise((Resolve, Reject)=>{
  const success = Math.random() > 0.4;
 
  if(success){
    Resolve('Promise resolved successfully!');
  
  }Reject('Promise rejected!');
})


promise.then((message)=>{
  console.log(message);
}).catch((error)=>{
  console.log(error);
})