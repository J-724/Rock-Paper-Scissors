console.log('Mi Ryuk!');

/* player choice
computer choice
winner
rockPaperScissor
new game */

function playerChoice() {
    let choice; 
    do {
        choice = window.prompt("Chosse your movement \n Rock    Paper    Scissors");
        choice = choice.toLowerCase();
    } while ((choice != 'rock')&&(choice != 'paper')&&(choice != 'scissors')); 
    return choice;
}

function computerChoice() {
    let choice = Math.floor(Math.random()*3 + 1);
    if (choice === 1) {
        choice = 'rock';
    } else if (choice === 2){
        choice = 'paper';
    } else {
        choice = 'scissors';
    }
    return choice;
}

// paper wins rock
// rock wins scissors
// scissor wins paper

function roundwinner() {
    let player= playerChoice();
    let computer = computerChoice();

    if ((player=='paper' && computer=='rock')||(player=='rock' && computer=='scissors')||(player=='scissors' && computer=='paper')){
        console.log ('Player choice: '+player+' Computer choice: '+computer);
        return 'Player Wins!';
    } else if (player==computer){
        console.log ('Player choice: '+player+' Computer choice: '+computer);
        return 'Tie';
    } else {
        console.log ('Player choice: '+player+' Computer choice: '+computer);
        return 'Computer Wins!'
    }
}

function rockPaperScissor() {
    //The game will be set to play for 3 out 5
    let winner;
    let playerWins=0;
    let computerWins=0;
    let tie=0;

    for (let i=0;i<5;i++){
        winner=roundwinner();
        console.log(winner);
        if (winner == 'Player Wins!'){
            playerWins++;
            console.log('player wins: '+playerWins);
            if (playerWins>=3){
                console.log('The Player won the game!');
                break;
            }
        } else if (winner == 'Tie'){
            tie++;
            console.log('Ties: '+tie);
            if (tie>=3){
                console.log('The game end in a Tie');
                break;
            }
        } else {
            computerWins++;
            console.log('Computers wins: '+computerWins);
            if (computerWins>=3){
                console.log('The Computer won the game!');
                break;
            }
        }

        if ((computerWins==2)&&(playerWins==2)&&(i=5)){
            console.log('The game end in a Tie');
            break;
        }
    }

}

rockPaperScissor();

function newGame() {

}

