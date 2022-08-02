function getCom() {
    /* 0 will be rock, 1 will paper, 2 will scissors */ 
    let choiceCom = Math.floor(Math.random() * 3);
    if (choiceCom == 0) {
        return 'rock';
    } else if (choiceCom == 1) {
        return 'paper';
    } else {
        return 'scissors';
    }

}

function playRound(playerSelection, ComputerSelection) {
    playerSelection.toLowerCase();
    if ((playerSelection == 'rock' &&  ComputerSelection == 'paper') || 
    (playerSelection == 'paper' && ComputerSelection == 'scissors') || 
    (playerSelection == 'scissors' && ComputerSelection == 'rock')) {
        console.log('palyer '+ playerSelection + ' computer ' + ComputerSelection);
        return 'computer wins';
    } else if (playerSelection == ComputerSelection){
        console.log('palyer '+ playerSelection + ' computer ' + ComputerSelection);
        return 'tie game';
    }
    else if((ComputerSelection == 'rock' &&  playerSelection == 'paper') || 
    (ComputerSelection == 'paper' && playerSelection == 'scissors') || 
    (ComputerSelection == 'scissors' && playerSelection == 'rock')) {
        console.log('palyer '+ playerSelection + ' computer ' + ComputerSelection);
        return 'player wins';
    }else {
        console.log('error wrong input');
    }
}

function game() {
    let scorec = 0;
    let scorep = 0;
    for (i = 0; i<5; i++){
        const playerc = prompt('Rock, Paper, or Scissors?');
        const comc = getCom();
        let result = playRound(playerc,comc);
        if (result == 'computer wins') {
            scorec += 1;
        }else if (result == 'player wins'){
            scorep += 1;
        } else if (result == 'tie game'){
            scorec += 1;
            scorep += 1;
        }else{
            alert('invalid input: check spelling');
            i--;
            console.log(i);
        }
    }

    if (scorec > scorep) {
        console.log('computer wins!')
    } else if (scorec < scorep) {
        console.log('player wins!');
    }else {
        console.log('tie game');
    }
    console.log(scorec + ' computer');
    console.log(scorep  + ' player');
}

game();

