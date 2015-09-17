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


var move;
var winner;
var result;
var computerMove;
var playerMove;
var playerWins;
var computerWins;

function getPlayerMove(move) {
    return move = playerMove || getInput()
    ;

}

function getComputerMove(move) {

    return move = computerMove || randomPlay()
    ;
}

function getWinner(playerMove,computerMove) {
    console.log("computer chose " + computerMove)
    var winner;

    {
    if (computerMove==playerMove){
        return 'Draw';
    
    }
    else if(playerMove=='scissors'&&computerMove=='paper'){
        return 'Player';
    }
    else if(playerMove=='rock'&&computerMove=='scissors'){
        return 'Player';
    }
    else if (playerMove=='paper'&&computerMove=='rock'){
        return 'Player';
    }
    else return 'Computer'
    
    }

    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (computerWins<5&&playerWins<5) {
        var playerMove= getInput();
        var computerMove= randomPlay();
        var winner = getWinner (playerMove, computerMove);
        
        if (winner=='Player'){
            playerWins +=1;
        }
    

        else if (winner=='Computer'){
            computerWins +=1;
        }
        
    console.log("Player has "+playerWins+" points and computer has "+computerWins+" points");
    
    if (playerWins== 5){
    console.log('Player Wins!');}

        if (computerWins== 5){
    console.log('Computer Wins!');
}}
    getWinner(playerMove, computerMove)
    return [computerWins, playerWins];
    }



playToFive(computerMove, playerMove)