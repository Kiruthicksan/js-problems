// Add all mumbers

let nums = [10, 20, 30, 40];

let sums = nums.reduce((sum, num) => sum + num, 0);
console.log(sums); 


// Multipy all numbers

let numbers = [2, 3, 4];

let product = numbers.reduce((total, num) => total * num, 1);
console.log(product); 


// Find the longest word

let words = ["apple", "banana", "grape", "watermelon"];

let longestword = words.reduce((longest, word) => {
    return word.length > longest.length ? word : longest
})

console.log(longestword)

// count total characters

let names = ["Ram", "Ajay", "Kiran"];

let totalChar = names.reduce((total,name) =>  total + name.length,0)
console.log(totalChar)

//highert mark

let marks = [55, 88, 74, 99, 62];

let highest = marks.reduce((high, mark) => mark > high ? mark : high )
console.log(highest)

