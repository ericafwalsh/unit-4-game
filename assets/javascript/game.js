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
        $("#randomNumber").text(targetNumber);   
        $("#wins").text(wins);
        $("#losses").text(losses);
        totalScore = 0;
        $("#scoreValue").text(totalScore);
        
        //re-update the data-crystal value in the reset Game function
    }


    $(".crystals").on("click", function () {

        var crystalValue = ($(this).attr("data-crystalvalue"));

        totalScore += parseInt(crystalValue);
        
        $("#scoreValue").text(totalScore);

        if (totalScore > targetNumber) {
            losses++;
            $("#announcement").text("You lose");
            resetGame();
        }

        else if (totalScore === targetNumber) {
            wins++;
            $("#announcement").text("You win!");
            resetGame(); 
        }
    });

    resetGame();

});
