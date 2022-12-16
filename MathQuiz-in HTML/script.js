let number1 = document.querySelector('.number1')
let number2 = document.querySelector('.number2')
let operatorDOM = document.querySelector('.operator')
let categories = document.querySelector('.categories')
let options = document.querySelector('.options')
let result = document.querySelector('.result')
let rightWrong = document.querySelector('.right-wrong')

let operator = '+'

let realResult = 0;

//Thay operator
categories.addEventListener('click', function(e) {
    if (e.target.id) {
        operator = e.target.id
    }
    operatorDOM.textContent = operator
    makeAQuest(operator)
})


//Make a question
function makeAQuest(operator) {
    result.textContent = "?"
    rightWrong.textContent = ""

    operatorDOM.textContent = operator
    num1 = randomNumber(operator)
    num2 = randomNumber(operator)

    let result1 = 0

    console.log(operator)

    switch(operator) {
        case "+":
            result1 = num1 + num2
            break
        case "-":
            result1 = num1 - num2
            break
        case "*":
            result1 = num1 * num2
            break
        case "/":
            result1 = num1 / num2
            break
    }

    realResult = result1;

    number1.textContent = num1
    number2.textContent = num2


    let randomLo = randomLocationResult()
    console.log(randomLo, options.children)

    options.children[randomLo].textContent = result1

    randomNumberForOptions(options.children)
    
}

makeAQuest(operator)

//Pass random numbers for options
function randomNumberForOptions(arr) {
    for (let option of arr) {
        if(!option.textContent) {
            option.textContent = randomNumber(operator)
        }
    }
    if (arr[0].textContent === arr[1].textContent || arr[0].textContent === arr[2].textContent || arr[1].textContent === arr[2].textContent) {
        return randomNumberForOptions(arr)
    }
}

//random vị trí kết quả
function randomLocationResult() {
    return Math.floor(Math.random() * 3)
}

//Random -10 đến 10 hoặc -50 đến 50
function randomNumber(operator) {
    if (operator === "*" || operator === "/") {
        return Math.floor(Math.random() * 20 - 10)
    } else {
        return Math.floor(Math.random() * 100 - 50)
    }
}

//Click chọn đáp án
for (let option of options.children) {
    option.addEventListener('click', function() {
        result.textContent = this.textContent
        if (realResult == this.textContent) {
            rightWrong.textContent = "✔"
        } else {
            rightWrong.textContent = "❌"
        }
    })
}





