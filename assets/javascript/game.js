// to start the game, wins and losses are set to 0
var wins = 0;
var losses = 0;
var targetNumber;
var crystalValue1;
var crystalValue2;
var crystalValue3;
var crystalValue4;
var totalScore;

function resetGame () {
    targetNumber = Math.floor(Math.random() * 101) + 19;
    crystalValue1 = Math.floor(Math.random() * 12) + 1;
    crystalValue2 = Math.floor(Math.random() * 12) + 1;
    crystalValue3 = Math.floor(Math.random() * 12) + 1;
    crystalValue4 = Math.floor(Math.random() * 12) + 1;
    totalScore = 0;    
    document.getElementById("randomNumber").innerHTML = targetNumber;
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;    
    document.getElementById("scoreValue").innerHTML = "Your total score is: " + totalScore;
}

function winOrLose() {    

    document.getElementById("scoreValue").innerHTML = "Your total score is: " + totalScore;

    if (totalScore > targetNumber) {
        losses++;
        document.getElementById("announcement").innerHTML = "You lose";
        resetGame();
    }

    else if (totalScore === targetNumber) {
        wins++;
        document.getElementById("announcement").innerHTML = "You win!";
        resetGame(); 
    }
}


// When a crystal is clicked, generates a random number
$(document).ready(function () {

    $("#crystal1").on("click", function () {

        totalScore += crystalValue1;
        winOrLose();
    });

    $("#crystal2").on("click", function () {

        totalScore += crystalValue2;
        winOrLose();

    });

    $("#crystal3").on("click", function () {

        totalScore += crystalValue3;
        winOrLose();

    });

    $("#crystal4").on("click", function () {

        totalScore += crystalValue4;
        winOrLose();

    });

    resetGame();

});
