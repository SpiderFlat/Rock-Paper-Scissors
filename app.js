const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll("button") // selecting ALL buttons within DOM
let userChoice 
let computerChoice
let result

// waiting for user input and will generate computer output
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

// generate computer output and assign rock = 1, paper = 2, scissors = 3
function generateComputerChoice() { 
    const randomNumber = Math.floor( Math.random() * possibleChoices.length + 1)
    if (randomNumber === 1) {
        computerChoice = "rock"
    }
    if (randomNumber === 2) {
        computerChoice = "paper"
    }
    if (randomNumber === 3) {
        computerChoice = "scissors"
    }
    computerChoiceDisplay.textContent = computerChoice
}

function getResult () {
    if(computerChoice === userChoice) {
        result = 'draw'
    }
    if(computerChoice === "rock" && userChoice === "paper") {
        result = 'win'
    }
    if(computerChoice === "rock" && userChoice === "scissors") {
        result = 'loss'
    }
    if(computerChoice === "paper" && userChoice === "rock") {
        result = 'loss'
    }
    if(computerChoice === "paper" && userChoice === "scissors") {
        result = 'win'
    }
    if(computerChoice === "scissors" && userChoice === "paper") {
        result = 'lose'
    }
    if(computerChoice === "scissors" && userChoice === "rock") {
        result = 'win'
    }
   
    resultDisplay.textContent = result
}

