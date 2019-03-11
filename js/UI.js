var generateBtn = document.getElementById("generated");
var userGameInput = docume.getElementById("user-game-input");
var displayScore = document.getElementById("display-score");

//need to call the BowlingGameWhole cosntructor from the bowlingGame.js

function generateScore() {
    var bowlScore = BowlingGameWhole(userGameInput.value);
    displayScore.textContent = bowlScore;
}

generateBtn.addEventListener("click", generate);

//enter button needs to show the score calculator

document.addEventListener("keydown", function(e) {
    if (e.keyCode === 13) {
        generate();
    }
})

userGameInput.addEventListener("keydown", function(e) {
    if (!e.key.match(
        /[0-9] |x|X|\/|-|Backspace|Delete|Enter|ArrowUp|ArrowDown|Control|ArrowLeft|ArrowRight|End|Alt|CapsLock|Shift/)) {
            e.preventDefauly();
            userGameInput.dClassName += " blue-btn";
            setTimeout(function() {
                userGameInput.dClassL.remove("blue-btn");
            }, 300);
        }
    }) 