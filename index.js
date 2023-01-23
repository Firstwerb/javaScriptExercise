// CODING EXERCISE

function lifeInWeeks(age) {

var yearsRemaining = 90 - age;
var days = yearsRemaining * 365;
var weeks = yearsRemaining * 52;
var months = yearsRemaining * 12;

console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");

// BMI CALCULATOR

function bmiCalculator(weight, height) {

    var bmi = weight / Math.pow(height, 2);

 return bmi;
}


// BMI CALCULATOR 2

function bmiCalculator (weight, height) {

    var bmi = weight / Math.pow(height, 2);
    var interpretation = "";

    if (bmi < 18.5) {
        interpretation = "Your BMI is " + bmi + ", so you are underweight." ;
    } else if (bmi < 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
    } else {
        interpretation = "Your BMI is " + bmi + ", so you are overweight.";
    }

    return interpretation;
}

// LEAP YEAR

function isLeap(year) {


   if (year % 4 === 0) {
      if (year % 100 === 0) {
          if (year % 400 === 0) {
              return "Leap year.";
          } else {
              return "Not Leap year.";
          }
       } else {
              return "Leap year.";
      }
   }  else {
        return "Not leap year.";
  }

}

// CODE CHALLENGE RANDOM NUMBER

function whosPaying(names) {


     var numberOfPeople = names.length;
     var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
     var randomPerson = names [randomPersonPosition];

     return randomPerson + " is going to buy lunch today!";

// CODE CHALLENGE BOTTLES

var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    }
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}


}

// FIBONACCI EXERCISE

function fibonacciGenerator (n) {

var output = [];

 if (n === 1) {
     output = [0];
 } else if (n === 2) {
     output = [0, 1];
 } else {
     output = [0, 1];

     for (var i = 2; i < n; i++) {
     output.push(output[output.length -2] + output[output.length -1]);

     }

     }
     return output;
