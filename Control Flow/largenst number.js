let numbers = [1,44,55,33,23,45,75,34]
let largest = numbers[0]
for (i = 1; i < numbers.length; i++){
    if (numbers[i] > largest){
        largest = numbers[i]
    }
    
}
console.log(largest)