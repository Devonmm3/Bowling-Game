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

    

        //bonus stuff-this is the extra rolls that are allowed after the final roll.
        
        











//need var for the game, and a function to wrap the number of bowling rolls and the current roll the player is on.  
//Use of ".this" keyword, since it is wrapped in a function it is refering to the global object.

//var for the whole game will contain functions/prototypes for each roll and score.

//constuctor is BowlingGameWhole, why it is captilized








// function playerScore(thisGame) {
//     thisGame = thisGame.moveUp();

//     var playerRolls = thisGame.split("");

//     console.log("Player's Rolls: " + playerRolls);
// }

// var BowlingGameWhole = function () {
   
//     this.roll = [];
//     this.currentPlayerRoll = 0;
// };

//All JavaScript objects inherit properties and methods from a prototype:
//The JavaScript prototype property also allows you to add new methods to objects constructors:

// BowlingGameWhole.prototype.playerRolls = function (pinNumber) {
//     this.rolls[this.currentPlayerRoll++] = pinNumber;

// };

// BowlingGameWhole.prototype.currentScore = function () {
//     var currentScore = 0;
//     var frameNumber = 0;
//     var player = this;

//     //need functions from the spare bonus, the strike bonus, a strike, a spare

//     function bonusFromStrike() {
//         return player.rolls[frameNumber + 1] + player.rolls[frameNumber + 2];
//     }

//     function bonusFromSpare() {
//         return player.rolls[frameNumber + 2];
//     }

//     function rollStrike() {
//         return player.rolls[frameNumber] === 10;
//     }

//     function rollSpare() {
//         return player.rolls[frameNumber] + player.rolls[frameNumber + 1] === 10;
//     }

//     function ballSumFrame() {
//         return player.rolls[frameNumber] + player.rolls[frameNumber + 1];
//     }

//     //need for loop to keep the score moving through each roll and to keep the code working as the player plays each frame until the last one at #10

//     for (var frame = 0; frame < 10; frame++) {
//         if (rollSpare()) {
//             currentScore += 10 + bonusFromSpare();
//             frameNumber++;
//         } else if (rollStrike()) {
//             currentScore += 10 + bonusFromStrike();
//             frameNumber += 2;
//         } else {
//             currentScore += ballSumFrame();
//             frameNumber += 2;
//         }
//     }

    
//     console.log("X-X-X-X-X-X-X-X-X-X-XX")
//     return currentScore;
    }
