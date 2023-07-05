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
        watchForWinner();
    });

    
    paper.addEventListener("click", function paperSelected(){ 
        playRound('paper')
        pointsAnnouncements.textContent = roundResult;
        machineScoreBoard.textContent = "0" + computerScore;
        cowboyScoreBoard.textContent = "0" + playerScore;
        watchForWinner();
    });

    
    scissors.addEventListener("click", function scissorsSelected(){ 
        playRound('scissors')
        pointsAnnouncements.textContent = roundResult;
        machineScoreBoard.textContent = "0" + computerScore;
        cowboyScoreBoard.textContent = "0" + playerScore;
        watchForWinner();
    });

// update score 

const resultScreen = document.getElementById("resultScreen");

const resultText = document.getElementById("resultText");
resultText.innerHTML = `You won this game. You saved humanity! YAAYY...you should get a medal but...uhhh
we are on a budget so yeah, bear with us. :(
    xoxoxox`

function watchForWinner(){
    if (computerScore === 5){
        resultScreen.style.zIndex = "99999";
        resultText.textContent = `Machines won this game! HUMANITY IS DOOMED!
        Well, that was ridiculous, wasn't it? I'm glad this wasn't real and humanity wasn't depending on you.
        You sucked, no offense. Try again, maybe. Lets see if you'll see suck any lesser this time.
        \n PRESS F5 or Refresh this page to play again.`;
        resultScreen.style.zIndex = "99999";
        resultText.style.visibility = "visible";
    }
    if (playerScore === 5){
        resultText.textContent = `You won this game. You saved humanity! YAAYY...you should get a medal but...uhhh
        we are on a budget so yeah, bear with us. :(
            XOXOXOX! PRESS F5 or Refresh this page to play again.`
        resultScreen.style.zIndex = "99999";
        resultText.style.visibility = "visible";
    }
}