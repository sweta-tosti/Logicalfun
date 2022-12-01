// var weather = "sunny";
// var temp = "warm";

// if (weather == "sunny" && temp == "warm") {
//     console.log("Take sun-glass & t-shirt.");

// }

// var first = float(promt("Enter first number: "));
// var second = float(promt("Enter second number: "));

// if (first > 10 && second > 10){
//     console.log("both numbers are greater than 10.");
// }else {
//     console.log("one of the number is greater than 10.");
//


// var weather = prompt("What is the weather. ");
// var temperature = prompt("What is the weather. ");

// if ( weather == "raining" &&  temperature =="cold") {
//     console.log("take an umbrella and a warm jacket.");

// }
// else if ( weather == "raining" &&  temperature =="warm") {
//     console.log("take an umbrella and a t-shirt.");

// }
// else if ( weather == "sunny" &&  temperature =="cold") {
//     console.log("take sunglasses and a warm jacket.");

// }
// else if ( weather== "sunny" &&  temperature =="warm") {
//     console.log("take sunglasses and a t-shirt.");

// }

// else {
//     console.log("stay home!");
// }
// var num1 =12;
// var num2 = 11;

// if (num1 < 10 || num2 < 10){
//     console.log("both numbers are less than 10.");
//  }
// else {
//     console.log("both numbers are not less than 10.");

//  }

// var lan1 = prompt("lan1");
// var lan2 = prompt("lan2");

// if (lan1 == "Python" && lan2 == " JavaScript" ){
//     console.log (" it is a good course.");
// }
// else if (lan1 == "Python" || lan2 == " JavaScript" ){
//     console.log (" this is the Thinking and Creating with Code course.");
// }
// var num1 = prompt("num1");
// var color = "blue"

// if (num1 > 10 || color == "blue" ){
//     console.log (" the test is true.");
// }
// if (num1 < 10 || color != "blue" ){
//     console.log (" the test is true.");
// }


// var userNum = 10 ;
// var userColor = prompt("Type input guess color : ");


// if (userColor == "red" && userNum == 20 ){
//     console.log("You've found both the secret number and the secret color!");
// }
// else if (userColor == "red" || userNum == 20) {
//     console.log("You found at least one of the secrets!");
// }
// else{
//     console.log("You didn't find any of the secrets! and Better luck next time!");
// }
// console.log("Try again! ");



// function userValue(num, color) {
//     if (color == "red" && num == 20 ){
//         console.log("You've found both the secret number and the secret color!");
//     }
//     else if (color == "red" || num == 20) {
//         console.log("You found at least one of the secrets!");
//     }
//     else{
//         console.log("You didn't find any of the secrets! and Better luck next time!");
//     }
//     console.log("Try again! ");
// }
// var userNum = 20 ;
// var userColor = prompt("Type input guess color : ");


// userValue(userNum,userColor)


// This function takes a boolean parameter
// that says if password was entered correctly
// (true = yes, false = no)




 function logIn(passwordIsCorrect) {
    if (passwordIsCorrect != true) {console.log("Your password is not correct, you can't log in");

  }else {

    console.log("Welcome back! You are now signed in.");
  }
//   }
// logIn(true);

// function litersToGallons(liters) {
//     var result = liters * 0.264172
//     var message = liters.toString() + " liters are " + result.toString() + " gallons.";
//     console.log(message);
//   }
// litersToGallons(2);


function isGreatherThan10(number) {
     if (number > 10){
        return "The number is greater than 10.";

     } else if (number < 10){
        return "The number is smaller than 10.";

     } else{
        return "The number 10.";

     }
  }

console.log(isGreatherThan10(12)) ;
