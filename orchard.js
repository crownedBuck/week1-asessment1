///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE

// ? Did you want total acres picked for each farm? Or the total of all the farms?

let totalAcres = 0

// considered creating 2nd variable creating an array of arrays so it would be a 
// more concise code. Decided against it for time/ease. K.I.S.S.

for (let loopingNumber = 0; loopingNumber < fujiAcres.length; loopingNumber++) {

    // console.log("Test " + fujiAcres[loopingNumber])
    totalAcres = totalAcres + fujiAcres[loopingNumber];
}

// second loop, this time for galaAcres
for (let loopingNumber = 0; loopingNumber < galaAcres.length; loopingNumber++) {
    totalAcres = totalAcres + galaAcres[loopingNumber]
}

// 3rd loop, this one for pink acres
for (let loopingNumber = 0; loopingNumber < pinkAcres.length; loopingNumber++) {
    totalAcres = totalAcres + pinkAcres[loopingNumber];
}

console.log("----------------------------")
console.log("Total for all orcherds: " + totalAcres)

// Added this for better visability in console
console.log("----------------------------")
// console.log("----------------------------")

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE


let averageDailyAcres = totalAcres / 7 // 7 days a week, so we need to divide by 7

console.log ("Average picked per day: " + averageDailyAcres)
console.log("----------------------------")


// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE

// expected result: 20 as 174/9 = 19.333...
// if not, there be a bug, arrrrrrrrr ye mateys

while (acresLeft > 0) {
    days = days + 1;
    acresLeft = acresLeft - averageDailyAcres;
}

console.log("Days it will take to pick what's left: " + days)

console.log("----------------------------")

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE


// changed to const to keep best practices
const fujiTons = []
const galaTons = []
const pinkTons = []

// loop for fuji
for (let loopingNumber = 0; loopingNumber < fujiAcres.length; loopingNumber++) {
    let tons = 6.5 * fujiAcres[loopingNumber];
    fujiTons.push(tons)
}

console.log("Fuji Tons: " + fujiTons)

// loop for gala
for (let loopingNumber = 0; loopingNumber < galaAcres.length; loopingNumber++) {
    let tons = 6.5 * galaAcres[loopingNumber];
    galaTons.push(tons)
}
console.log("Gala Tons: " + galaTons)

// loop for pink
for (let loopingNumber = 0; loopingNumber < pinkAcres.length; loopingNumber++) {
    let tons = 6.5 * pinkAcres[loopingNumber]
    pinkTons.push(tons)
}

console.log("Pink Tons: " + pinkTons)

console.log("----------------------------")
// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

let fujiPounds = 0
let galaPounds = 0
let pinkPounds = 0

// fuji's looping for pound total
for (let loopingNumber = 0; loopingNumber < fujiTons.length; loopingNumber++) {
    fujiPounds = fujiPounds + (2000 * fujiTons[loopingNumber]) // need to remember to add fujiPounds back in otherwise you won't get total
}

console.log("Total lbs for Fuji: " + fujiPounds)


// gala's looping for pound total
for (let loopingNumber = 0; loopingNumber < galaTons.length; loopingNumber++) {
    galaPounds = galaPounds + (2000 * galaTons[loopingNumber])
}

console.log("Totoal lbs for Gala: " + galaPounds)

// pink's looping for pound total
for (let loopingNumber = 0; loopingNumber < pinkTons.length; loopingNumber++) {
    pinkPounds = pinkPounds + (2000 * pinkTons[loopingNumber])
}

console.log("Total lbs for Pink: " + pinkPounds)

console.log("----------------------------")

// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

// if the price is per pound it's an easy multiplication of 'apple name'Pounds and 'apple name'Price
let fujiProfit = fujiPounds * fujiPrice
let galaProfit = galaPounds * galaPrice
let pinkProfit = pinkPounds * pinkPrice

console.log("Profit: $" + fujiProfit)
console.log("Profit: $" + galaProfit)
console.log("Profit: $" + pinkProfit)

console.log("----------------------------")

// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

let totalProfit = fujiProfit + galaProfit + pinkProfit //Just have to add everything together

console.log("Total profit for all apples: $" + totalProfit)

