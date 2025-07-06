// print each number

let nums = [10,20,30,40]

nums.forEach(num => 
    console.log("Value:",num)
)

// print names in uppercase

let names = ["kiru", "ajay", "siva"]

names.forEach(name => 
    console.log(name.toUpperCase())
     
)

// Adding index

let items = ["pen", "book" , "bottle"]

items.forEach((item, index) => 
     console.log(`Item ${index}: ${item}`)

)
   
// Print only even numbers

let numbers = [1,4,7, 10, 13];

numbers.forEach(number => {
     if (number % 2 == 0){
        console.log(number)
     }}
)

// print total sum

let scores = [5,10,15]
let sum = 0
 
scores.forEach(score =>{
    sum += score;
}


)

console.log("Total", sum)