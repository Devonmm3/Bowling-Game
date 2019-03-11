//getting the calculator to display the User input:

//the input into the generator box needs to be a string of the amount of pins that is knocked down.

//generate score button will activate the JS and display the score

//function that includes a string that is 1-9.  If ten pins are knocked it is a X(strike).  splits will demonstrate that each is a seperate roll.



function bowlingScore(userGame) {

    userGame = userGame.toUpperCase();
    var playerRolls = userGame.split("");

    console.log("The Rolls are: " + playerRolls);

    //needs to push the pins that were knocked down and parse them so they can be added. need to be integers/
    var bonusBowl;
        if (userGame.charAt(userGame.length - 3) === "X") {
            bonusBowl = 2;
        } else if (userGame.charAt(userGame.length - 2) === "/") {
            bonusBowl = 1;
        } else {
            bonusBowl = 0;
        }

    var frame = [];
    for (i=0; i < playerRolls.length; i++) {
        if (playerRolls[i] === "X") {
            frame.push(10);
        } else if (playerRolls[i] === "0") {
            frame.push(0);
         } else if (playerRolls[i] === "/") {
             frame.push(10 - playerRolls[i-1]);
            } else { frame.push( parseInt(playerRolls[i]));}

        }

        var totalScore = 0;
        for (i=0; i < playerRolls.length - bonusBowl; i++) {
            totalScore += frame[i];

            if (playerRolls[i] === "/") {
                totalScore += frame[i+1] + frame[i+2];
            }
        }

        console.log("Your Final Score is: " + totalScore);
        if (totalScore.toString() === "NaN") {
            return "Game is showing error, try again";
        } else {
            return totalScore;
        }

    }

      
        
        












