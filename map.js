// Double the numbers

let nums = [2,4,6]

let double = nums.map(num => num *  2)

console.log(double)

// Add Mr to names

let names = ["Ravi","Kiran","Sam"]
let addingTitle = names.map(name => 'Mr. ' + name )
console.log(addingTitle)

// Get string lengths

let fruits = ["apple","banana","Kiwi"]

let findindLength = fruits.map(fruit => fruit.length)
console.log(findindLength)


// Convert to boolean

let values = [0, "hello",  "",  42, null];

let booleanConvert = values.map(value => Boolean(value) )
console.log(booleanConvert)

// Add 100 to marks 

let marks = [50, 70 , 80]

let add = marks.map(mark => mark + 100)
console.log(add)