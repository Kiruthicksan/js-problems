// Filter even numbers

let nums  = [1,2,3,4,5,6]

let evenNumber = nums.filter(num => num % 2 == 0)
console.log(evenNumber)

// Filter names with lenght > 4

let names = ["Ram", "Kiran", "Ajay", "Pradeep"];

let characters = names.filter(name => name.length > 4)
console.log(characters);

// Filter truthy values

let values = [0, 1, "", "hello", false, true];

let truth = values.filter(value => Boolean(value) == true)
console.log(truth)

// Filter marks above 60 

let marks = [35, 60, 75, 80, 50]

let changeMarks = marks.filter(mark => mark > 60)
console.log(changeMarks);

// Filter Words starting with A

let words = ["apple", "banana", "avocado", "grape", "apricot"]

let aWords = words.filter(word => word.startsWith("a"))
console.log(aWords)


