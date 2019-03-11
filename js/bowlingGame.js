//need var for the game, and a function to wrap the number of bowling rolls and the current roll the player is on.  
//Use of ".this" keyword, since it is wrapped in a function it is refering to the global object.

//var for the whole game will contain functions/prototypes for each roll and score.

//constuctor is BowlingGameWhole, why it is captilized


var BowlingGameWhole = function () {
   
    this.roll = [];
    this.currentPlayerRoll = 0;
};

//All JavaScript objects inherit properties and methods from a prototype:
//The JavaScript prototype property also allows you to add new methods to objects constructors:

BowlingGameWhole.prototype.rollBall = function (pinNumber) {
    this.rolls[this.currentPlayerRoll++] = pinNumber;

};

BowlingGameWhole.prototype.currentScore = function () {
    var currentScore = 0;
    var frameNumber = 0;
    var player = this;

    //need functions from the spare bonus, the strike bonus, a strike, a spare

    function bonusFromStrike() {
        return player.rolls[frameNumber + 1] + player.rolls[frameNumber + 2];
    }

    function bonusFromSpare() {
        return player.rolls[frameNumber + 2];
    }

    function rollStrike() {
        return player.rolls[frameNumber] === 10;
    }

    function rollSpare() {
        return player.rolls[frameNumber] + player.rolls[frameNumber + 1] === 10;
    }

    function ballSumFrame() {
        return player.rolls[frameNumber] + player.rolls[frameNumber + 1];
    }

    //need for loop to keep the score moving through each roll and to keep the code working as the player plays each frame until the last one at #10

    for (var frame = 0; frame < 10; frame++) {
        if (rollSpare()) {
            currentScore += 10 + bonusFromSpare();
            frameNumber++;
        } else if (rollStrike()) {
            currentScore += 10 + bonusFromStrike();
            frameNumber += 2;
        } else {
            currentScore += ballSumFrame();
            frameNumber += 2;
        }
    }

    
    console.log("X-X-X-X-X-X-X-X-X-X-XX")
    return currentScore;



}