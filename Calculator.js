let number1 = 10
let number2 = 20

let operators = prompt("Enter the operator: ")

if (operators == '+'){
    console.log(number1 + number2)
}

else if (operators == '-'){
    console.log(number1 - number2)
}

else if (operators == '*'){
    console.log(number1 * number2)
}

else if (operators == '/' && number2 !== 0){
    console.log(number1 / number2)
}

else if (operators == '/' && number2 == 0){
    console.log("Cannot divide by zero")
}

else{
    console.log("Enter the correct operator")
}