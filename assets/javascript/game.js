// to start the game, wins and losses are set to 0, the variable target number is define
// and the variable total score is defined
var wins = 0;
var losses = 0;
var targetNumber;
var totalScore;


$(document).ready(function () {

    // creates the 4 crystal images with an attribute for value and 
    // assigns the initial random value to each crystal
    for (i = 1; i < 5; i++) {

        var CrystalImage = $("<img>");
        CrystalImage.addClass("crystals");
        CrystalImage.attr("src", "../unit-4-game/assets/images/crystal" + i.toString() + ".png");
        CrystalImage.attr("data-crystalvalue",Math.floor(Math.random() * 12) + 1);
        $("#crystalDrawings").append(CrystalImage);
    }

    // defines a function for resetting the game, which reassigns a new crystal value to each crystal,
    // picks a new target number, and prints the wins, losses, and starts the score over to 0
    function resetGame () {
        
        $(".crystals").each(function(){
            $(this).attr("data-crystalvalue",Math.floor(Math.random() * 12) + 1);
        });        

        targetNumber = Math.floor(Math.random() * 101) + 19;
        $("#randomNumber").text(targetNumber);   

        $("#wins").text(wins);
        $("#losses").text(losses);

        totalScore = 0;
        $("#scoreValue").text(totalScore);

    }


    // listener for clicks on each crystal
    $(".crystals").on("click", function () {

        // assigns the value of each crystal based on the attribute crystal value
        var crystalValue = ($(this).attr("data-crystalvalue"));

        // adds the crystal value to the total score
        totalScore += parseInt(crystalValue);
        
        // prints the total score
        $("#scoreValue").text(totalScore);

        // if statement to determine when a loss or win happens
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
