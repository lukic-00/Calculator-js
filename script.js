const b1 = document.querySelector(".b1")
const b2 = document.querySelector(".b2")
const b3 = document.querySelector(".b3")
const b4 = document.querySelector(".b4")
const b5 = document.querySelector(".b5")
const b6 = document.querySelector(".b6")
const b7 = document.querySelector(".b7")
const b8 = document.querySelector(".b8")
const b9 = document.querySelector(".b9")
const b0 = document.querySelector(".b0")
const addButton = document.querySelector(".addButton")
const subButton = document.querySelector(".subButton")
const multiButton = document.querySelector(".multiButton")
const divideButton = document.querySelector(".divideButton")

const enter = document.querySelector(".enter")

const finalResult = document.querySelector(".finalResult")
let clicked = ""
let firstValue = ""
let secondValue = ""
let operator;

function add(firstNumber, secondNumber){
    return firstNumber + secondNumber
}

function subtract(firstNumber, secondNumber){
    return firstNumber - secondNumber
}

function multiply(firstNumber, secondNumber){
    return firstNumber * secondNumber
}

function divide(firstNumber, secondNumber){
    return firstNumber / secondNumber
}

b1.addEventListener("click", function(){
    if(clicked != "done"){
        firstValue += 1
        finalResult.textContent = firstValue
    } else {
        secondValue += 1
        finalResult.textContent = secondValue
    }
    console.log(firstValue)
    console.log(secondValue)

    
})

b2.addEventListener("click", function(){
    if(clicked != "done"){
    firstValue += 2
    finalResult.textContent = firstValue

    } else {
        secondValue += 2
        finalResult.textContent = secondValue

    }
    console.log(firstValue)
    console.log(secondValue)

})

b3.addEventListener("click", function(){
    if(clicked != "done"){
    firstValue += 3
    finalResult.textContent = firstValue

    } else {
    secondValue += 3
    finalResult.textContent = secondValue

    }
    console.log(firstValue)
    console.log(secondValue)
})

b4.addEventListener("click", function(){
    if(clicked != "done"){
    firstValue += 4
    finalResult.textContent = firstValue

    } else {
    secondValue += 4
    finalResult.textContent = secondValue

    }
    console.log(firstValue)
    console.log(secondValue)
})

b5.addEventListener("click", function(){
    if(clicked != "done"){
    firstValue += 5
    finalResult.textContent = firstValue

    } else {
    secondValue += 5
    finalResult.textContent = secondValue

    }
    console.log(firstValue)
    console.log(secondValue)
})

b6.addEventListener("click", function(){
    if(clicked != "done"){
    firstValue += 6
    finalResult.textContent = firstValue

    } else {
    secondValue += 6
    finalResult.textContent = secondValue

    }
    console.log(firstValue)
    console.log(secondValue)
})

b7.addEventListener("click", function(){
    if(clicked != "done"){
    firstValue += 7
    finalResult.textContent = firstValue

    } else {
    secondValue += 7
    finalResult.textContent = secondValue

    }
    console.log(firstValue)
    console.log(secondValue)
})

b8.addEventListener("click", function(){
    if(clicked != "done"){
    firstValue += 8
    finalResult.textContent = firstValue

    } else {
    secondValue += 8
    finalResult.textContent = secondValue

    }
    console.log(firstValue)
    console.log(secondValue)
})

b9.addEventListener("click", function(){
    if(clicked != "done"){
    firstValue += 9
    finalResult.textContent = firstValue

    } else {
    secondValue += 9
    finalResult.textContent = secondValue

    }
    console.log(firstValue)
    console.log(secondValue)
})

b0.addEventListener("click", function(){
    if(clicked != "done"){
    firstValue += 0
    finalResult.textContent = firstValue

    } else {
    secondValue += 0
    finalResult.textContent = secondValue

    }
    console.log(firstValue)
    console.log(secondValue)
})

addButton.addEventListener("click", function(){
    clicked = "done"
    operator = add
})

subButton.addEventListener("click", function(){
    clicked = "done"
    operator = subtract
})

multiButton.addEventListener("click", function(){
    clicked = "done"
    operator = multiply
})

divideButton.addEventListener("click", function(){
    clicked = "done"
    operator = divide
})

enter.addEventListener("click", function() {
    let firstNumber = parseInt(firstValue);
    let secondNumber = parseInt(secondValue);
    let result = operator(firstNumber, secondNumber);
    console.log("Result: " + result);
    finalResult.textContent = result
    firstValue = ""
    secondValue = ""
    firstNumber = ""
    secondNumber = ""
    clicked = ""
});