// variables

let choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

// functions

function getComputerChoice(){
    a = choices[~~(Math.random()*choices.length)]
    return a;
}

function playRound(){
    let rawInput = prompt("Enter your choice;");
    let playerSelection = rawInput.toLowerCase();
    let computerSelection = getComputerChoice();
    if (playerSelection === computerSelection){
        return "tie"
    }
    else if((playerSelection == "rock" && computerSelection == "scissors")||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock"))
    {
     playerScore++;
     return "Player got a point"
    }
    else if((playerSelection == "scissors" && computerSelection == "rock")||
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "rock" && computerSelection == "paper"))
    {
       computerScore++;
       return "Computer got a point"
    }
    else{
        return ("That's not right!")
    }
}

function updateScore(){
    if (computerScore > playerScore){
        return "The Computer wins!"
    }
    else if (computerScore < playerScore){
        return "Player wins!"
    }

    else {
        return "That's a tie"
    }
}

function game(){
    console.log (playRound())
    console.log (playRound())
    console.log (playRound())
    console.log (playRound())
    console.log (playRound())
    console.log(updateScore());
}

game();

console.log(playerScore)
console.log(computerScore)