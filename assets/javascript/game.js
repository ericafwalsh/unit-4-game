// to start the game, wins and losses are set to 0
var wins = 0;
var losses = 0;
var targetNumber;
var totalScore;

$(document).ready(function () {

    for (var i = 1; i < 5; i++) {

        var CrystalImage = $("<img>");
        CrystalImage.addClass("crystals");
        CrystalImage.attr("src", "../unit-4-game/assets/images/crystal" + i.toString() + ".png");
        CrystalImage.attr("data-crystalvalue",Math.floor(Math.random() * 12) + 1);
        $("#crystalDrawings").append(CrystalImage);
    }

    function resetGame () {
        targetNumber = Math.floor(Math.random() * 101) + 19;
        totalScore = 0;    
        document.getElementById("randomNumber").innerHTML = targetNumber;
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        document.getElementById("losses").innerHTML = "Losses: " + losses;    
        document.getElementById("scoreValue").innerHTML = "Your total score is: " + totalScore;

        //re-update the data-crystal value in the reset Game function
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


    $(".crystals").on("click", function () {

        var crystalValue = ($(this).attr("data-crystalvalue"));

        totalScore += parseInt(crystalValue);
        winOrLose();
    });

    resetGame();

});
