/*Create a new function named "getComputerChoice"
getComputerChoice will randomly return strings "rock," "paper" or "scissors"
Use "Math.random" to return one of the choices
Note: Maybe try setting 0-0.33 return rock, 0.34-0.66 retun paper 0.66-1 return scissors*/

/* function getComputerChoice
return Math.random
console.log(getRandom());
if getComputerChoice is < 3 return rock
else if getComputerChoice is >= 3 && <= 6 return paper
else return scissors
*/

let computerScore = 0;
let humanScore = 0;

/*Generates Rock, Paper or Scissors*/
function getComputerChoice() {
    let num = Math.floor(Math.random() * 10);
    if (num <= 3) {
        console.log("Rock");
    } else if (num >= 3 && num <= 6) {
        console.log("Paper");
    } else {
        console.log("Scissors");
    }
}

/*Gets human's input*/
function getHumanChoice() {
    let pick = prompt("Enter Rock, Paper or Scissors");
    let actualPick = pick.toLowerCase();
    return actualPick.chatAt(0).toUpperCase(1) + actualPick.slice(1);
    }
    

function playRound(humanChoice, computerChoice) { 
    
    humanChoice = getHumanChoice();
    computerChouce = getComputerChoice();
    
    if (humanChoice === computerChoice) {
        console.log("Tie");
    } else if (humanChoice === "Rock" && computerChoice === "Paper") {
        console.log("You lost. Paper beats Rock.");
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        console.log("You lost. Rock beats Scissors");
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        console.log("You lost. Scissors beats Paper");
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log("You win. Rock beats Scissors!");
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log("You win. Scissors beats Paper!");
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("You win. Paper beats Rock!");
    } else
        console.log("You broke the machine!");
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);