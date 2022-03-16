const p1Choice = document.getElementById('p1-choices');
p1Choice.addEventListener('click',getSelection);

const playermsg = document.getElementById('player-msg');
const pcmsg = document.getElementById('pc-msg');

let gameFinished = false;
let playerScore = 0;
let computerScore = 0;
let winner ='';

function getSelection(e){
    if(gameFinished==false){
        const rock=document.querySelector('div[data-choice=rock]');
        const paper=document.querySelector('div[data-choice=paper]');
        const scissors=document.querySelector('div[data-choice=scissors]');
        
        if ((e.target == document.querySelector('div[data-choice=rock]'))
            ||(e.target == document.querySelector('img[data-choice=rock]'))
            ||(e.target == document.querySelector('p[data-choice=rock]'))){
                
                paper.classList.remove('selected');
                scissors.classList.remove('selected');    
                rock.classList.add('selected');
                getRoundWinner('rock');
        } else if ((e.target == document.querySelector('div[data-choice=paper]'))
            ||(e.target == document.querySelector('img[data-choice=paper]'))
            ||(e.target == document.querySelector('p[data-choice=paper]'))){
                
                rock.classList.remove('selected');
                scissors.classList.remove('selected');
                paper.classList.add('selected');
                getRoundWinner('paper');
        } else if ((e.target == document.querySelector('div[data-choice=scissors]'))
            ||(e.target == document.querySelector('img[data-choice=scissors]'))
            ||(e.target == document.querySelector('p[data-choice=scissors]'))) {
                
                rock.classList.remove('selected');
                paper.classList.remove('selected');
                scissors.classList.add('selected')
                getRoundWinner('scissors');
            }        
    }
}

function computerChoice() {
    let choice = Math.floor(Math.random()*3 + 1);
    
    const rock=document.getElementById('rock-pc');
    const paper=document.getElementById('paper-pc');
    const scissors=document.getElementById('scissors-pc');
    try {
        rock.classList.remove('selected');
        paper.classList.remove('selected');
        scissors.classList.remove('selected');
    } catch {}

    if (choice === 1) {
        rock.classList.add('selected');
        choice = 'rock';
    } else if (choice === 2){
        paper.classList.add('selected');
        choice = 'paper';
    } else {
        scissors.classList.add('selected');
        choice = 'scissors';
    }
    return choice;
}

function getRoundWinner(playerChoice){
    let computer = computerChoice();

    if ((playerChoice=='paper' && computer=='rock')
        ||(playerChoice=='rock' && computer=='scissors')
        ||(playerChoice=='scissors' && computer=='paper')){
        
        playerScore++;
        playermsg.textContent='Player Wins the round!!!';
        pcmsg.textContent='Player Wins the round!!!';
    } else if (playerChoice==computer){
        playermsg.textContent='Draw';
        pcmsg.textContent='Draw';
    } else {
        computerScore++;
        playermsg.textContent='Computer Wins the round!!!';
        pcmsg.textContent='Computer Wins the round!!!';
    }
    return setScore(playerScore, computerScore);
}

function setScore (playerScore, computerScore) {
    const playerCounter = document.getElementById('playerScore').textContent = `${playerScore}`;
    const computerCounter = document.getElementById('pcScore').textContent = `${computerScore}`;

    if (playerScore >= 3){
        gameFinished = true;
        showWinner('Player Wins !!!');
    } else if (computerScore >= 3){
        gameFinished = true;
        showWinner('computer Wins !!!');
    }    
}

function showWinner (winner){
    const msgWindow = document.querySelector('[class=overlay-msg]');
    msgWindow.style.visibility = 'visible';

    const text = document.getElementById('winmsg').textContent = `${winner}`;

    const newGame = document.getElementById('newGame');
    newGame.addEventListener('click', restart);
}

function restart () {
    window.location.reload();
}
