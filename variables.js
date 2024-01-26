//////////////////PROBLEM 1////////////////////
/* Create a variable called 'myName' with a value that is your name as a string. */

//CODE HERE 

let myName = "Laura Hart";

//////////////////PROBLEM 2////////////////////
/* Create a variable called 'faveNum' with a value that is your favorite number. */

//CODE HERE

let faveNum = 9

//////////////////PROBLEM 3////////////////////
/* Create a variable called 'lovesCode' and assign it a boolean value. */

//CODE HERE

const lovesCode = true

//////////////////PROBLEM 4////////////////////
/*
  Write an if-statement that checks if the faveNum variable is 
  equal to 13. If it is, console.log('lucky 13!'). 
  If it's not, console.log('not lucky 13').
*/

//CODE HERE

// Since faveNum = 9, expect "Not lucky 13." Otherwise, bugged.

if (faveNum === 13) {
  console.log("Lucky 13!")
} else {
  console.log("Not lucky 13.")
}

//////////////////PROBLEM 5////////////////////
/*
  Write a for loop that prints out your faveNum 5 times.
*/

//CODE HERE

// Expect 9 to be printed out 5 times in the console, if not it's bugged

for (let loopingNumber = 0; loopingNumber < 5; loopingNumber++) {
  console.log(faveNum)
}
