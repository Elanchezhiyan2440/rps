// // variables

// let choices = ['rock', 'paper', 'scissors'];
// let playerScore = 0;
// let computerScore = 0;

// // functions

// function getComputerChoice(){
//     a = choices[~~(Math.random()*choices.length)]
//     return a;
// }

// function playRound(){
//     let rawInput = prompt("Enter your choice;");
//     let playerSelection = rawInput.toLowerCase();
//     let computerSelection = getComputerChoice();
//     if (playerSelection === computerSelection){
//         return "tie"
//     }
//     else if((playerSelection == "rock" && computerSelection == "scissors")||
//         (playerSelection == "scissors" && computerSelection == "paper") ||
//         (playerSelection == "paper" && computerSelection == "rock"))
//     {
//      playerScore++;
//      return "Player got a point"
//     }
//     else if((playerSelection == "scissors" && computerSelection == "rock")||
//     (playerSelection == "paper" && computerSelection == "scissors") ||
//     (playerSelection == "rock" && computerSelection == "paper"))
//     {
//        computerScore++;
//        return "Computer got a point"
//     }
//     else{
//         return ("That's not right!")
//     }
// }

// function updateScore(){
//     if (computerScore > playerScore){
//         return "The Computer wins!"
//     }
//     else if (computerScore < playerScore){
//         return "Player wins!"
//     }

//     else {
//         return "That's a tie"
//     }
// }

// function game(){
//     console.log (playRound())
//     console.log (playRound())
//     console.log (playRound())
//     console.log (playRound())
//     console.log (playRound())
//     console.log(updateScore());
// }

// game();

// console.log(playerScore)
// console.log(computerScore)


// UI code:

// Variables

let choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

const machineScoreBoard = document.getElementById("machineScoreBoard"); //machineScoreBoard to display the score of the machine irl time
machineScoreBoard.textContent = "00";

const cowboyScoreBoard = document.getElementById("cowboyScoreBoard"); //cowboyScoreBoard to display the score of the player irl time
cowboyScoreBoard.textContent = "00";


// functions:

const pointsAnnouncements = document.getElementById("pointsAnnouncement");
pointsAnnouncements.innerHTML = "Choose a weapon of the three choices to start!";


// function to let the computer choose a random value
function getComputerChoice(){  
    a = choices[~~(Math.random()*choices.length)]
    return a;
};


// playRound():
function playRound(playerSelection){
    let computerSelection = getComputerChoice();
    console.log(computerSelection);
    console.log(playerSelection);
    if (playerSelection === computerSelection){
            return roundResult = `You both chose ${computerSelection}. Tie! No one gets a point!`
        }
        else if((playerSelection == "rock" && computerSelection == "scissors")||
            (playerSelection == "scissors" && computerSelection == "paper") ||
            (playerSelection == "paper" && computerSelection == "rock"))
        {
         playerScore++;
         return roundResult = `Machine chose ${computerSelection} and lost the round.`
        }
        else if((playerSelection == "scissors" && computerSelection == "rock")||
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "rock" && computerSelection == "paper"))
        {
           computerScore++;
           return roundResult = `Machine defeated your ${playerSelection} with it's ${computerSelection}.`
        }
    };

// Click on Ui functions

    rock.addEventListener("click", function rockSelected(){ 
        playRound('rock')
        pointsAnnouncements.textContent = roundResult
        machineScoreBoard.textContent = "0" + computerScore;
        cowboyScoreBoard.textContent = "0" + playerScore;
    });

    
    paper.addEventListener("click", function paperSelected(){ 
        playRound('paper')
        pointsAnnouncements.textContent = roundResult;
        machineScoreBoard.textContent = "0" + computerScore;
        cowboyScoreBoard.textContent = "0" + playerScore;
    });

    
    scissors.addEventListener("click", function scissorsSelected(){ 
        playRound('scissors')
        pointsAnnouncements.textContent = roundResult;
        machineScoreBoard.textContent = "0" + computerScore;
        cowboyScoreBoard.textContent = "0" + playerScore;
    });