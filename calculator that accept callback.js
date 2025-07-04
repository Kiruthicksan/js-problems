function add(a,b){
    return a + b
}

function subtract(a,b){
    return a - b
}

function calculator(a,b,operatorcallback){
    return operatorcallback(a,b)
}

console.log(calculator(10 ,5, add))