// let userName = prompt("ismingizni kiriting");
// let userAge = prompt("yoshingizni kiriting");
// if (userAge >= 3 && userAge < 7) {
//    console.log("bog'chaga go");
// } else if (userAge >= 7 && userAge < 18) {
//    console.log("maktabga go");
// } else if (userAge >= 18 && userAge < 25) {
//   console.log("institutga go");
// } else if (userAge >= 25 && userAge < 50) {
//    console.log("ishga go");
// } else if (userAge >= 50) {
//    console.log("pensiyaga go");
// }

// let elTitle = document.querySelector(".title");
// let userGender = prompt("jinsingizni kiriting");
// let userName = prompt("ismingizni kirirting");

// if (userGender == "male") {
//   elTitle.textContent = `Assalomu alaykum janob ${userName}`;
// } else if (userGender == "female") {
//   elTitle.textContent = `Assalomu alaykum xonim ${userName}`;
// }



// let selectNumber = prompt("Son kiriting");
// let elNumber1 = document.querySelector(".number1");
// let elNumber2 = document.querySelector(".number2");
 
// if (selectNumber % 2 == 0) {
//    elNumber1.textContent = `Siz tanlagan son ${selectNumber}`;
//    elNumber2.textContent = `Bu son juft son`;
// } else if (selectNumber % 2 ==)

// let elText = document.querySelector(".number")
// let selectNumber = prompt("Son kiriting");


// if (selectNumber % 3 == 0  && selectNumber % 5 != 0) {
//    elText.textContent = `fizz`;
// } else if (selectNumber % 3 != 0  && selectNumber % 5 == 0) {
//    elText.textContent = `buzz`;
// } else if (selectNumber % 3 == 0  && selectNumber % 5 == 0) {
//    elText.textContent = `fizzbuzz`;
// } else  {
//    elText.textContent = `no fizzbuzz`;
// } 

// let userName = prompt (`Ismingizni kiriting`);
// let userMoney = prompt(`Jamg'armangizni kiriting`); 
// if (userMoney >= 10750000) {
//    console.log(`Amerikaga go`);
// } else if (userMoney < 10750000) {
//    console.log(`Hali ozgina sabir qilish kerak ekan`);
// }
 
let userName = prompt(`Ismingizni kirirting`);
let elTitle = document.querySelector(`.title`);
let selectNumber = prompt(`Jamg'armangizni kiriting`);

if (selectNumber >= 10750000) {
   elTitle.textContent = `Oq yo'l, ${userName}`
} else if (selectNumber < 10750000) {
   elTitle.textContent = `Uzr hurmatli ${userName} hali ozgina sabir qilish kerak Alisher`
}