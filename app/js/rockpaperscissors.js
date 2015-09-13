////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return 
    var move;
    move = move || getInput()
    ;

}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return 
    var move;
    move = move || getInput()
    ;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    {
    if (ComputerMove===PlayerMove){
        result='Draw';
        console.log(result);
    }
    else if(ComputerMove==='Scissors'&&PlayerMove==='Paper'){
        result='Computer';
        console.log(result);
    }
    else if(ComputerMove==='Rock'&&PlayerMove==='Scissors'){
        result='Computer';
        console.log(result);
    }
    else if(ComputerMove==='Paper'&&PlayerMove==='Rock'){
        result='Computer';
        console.log(result);
    }
    else if(PlayerMove==='Scissors'&&ComputerMove==='Paper'){
        result='Player';
        console.log(result);
    }
    else if(PlayerMove==='Rock'&&ComputerMove==='Scissors'){
        result='Player';
        console.log(result);
    }
    else{
        result='Player';
        console.log(result)
    }
}
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    for (var i=1; i<5; i+=1){
        if (winner==='Player'){
            result = playerWins +1;

        if (winner=== 'Computer')
            result = computerWins +1;

        }
    }
    return [playerWins, computerWins];
}

