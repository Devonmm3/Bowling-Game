# Bowling-Game
Coding Exercise

# Description:

Problem Description

Create a program, which, given a valid sequence of throws for one game of American Ten-Pin
Bowling, produces the total score for the game. ​Your code will become the core of a bowling score
management system, so make sure it fully complies with the input and output requirements, and
represents your best code.

# The Rules:

To briefly summarize the scoring for this form of bowling:
● One game of bowling is made up of ten frames.
● In each frame, the bowler has two throws to knock down all the pins.
● Possible results for a frame:
o Strike (‘X’): the bowler knocks down all 10 pins on the first throw.
The frame is over early. The score for the frame is 10 plus the total pins knocked
down on the next two throws.
o Spare (‘/’): the bowler knocks down all 10 pins using two throws.
The score for the frame is 10 plus the number of pins knocked down on the next
throw.
o Open frame: the bowler knocks down less than 10 pins with his two throws. The score
for the frame is the total number of pins knocked down.

● The game score is the total of all frame scores.
● Special rules for the 10
th
frame:

o A strike in the tenth frame gives the bowler two bonus throws, to fill out the scoring
formula for the last frame.
o A spare in the tenth frame gives the bowler one bonus throw, to fill out the scoring
formula for the last frame.
o These throws count as part of the 10
th
frame.

o The process does not repeat – for example, knocking down all 10 pins on a bonus
throw does not provide any additional bonus throws.

# The Code:
BowlingGameWhole is the constructor in the BowlingGame.js file with two methods 1) rolls, which is the called function when the player rolls the ball and the knocked down pins make the argument and 2) currentPlayerSore, which is called at the end of the game.

# Tests: 
Continue to get an error for the firefox and IE browsers, the terminal says that my platform does not support them.
(photo of terminal attached in images folder in the repo).

Initial test, just to check on what happens if there is a gutterball:

describe("BowlingGameWhole", function() {
	it("keeps track of gutterball game", function() {
		var game = new BowlingGameWhole();
		for (var i = 0; i < 20; i++) {
			game.roll(0);
		}
		expect(game.score()).to.equal(0);
	});
});

--continued to get the error that firefox is not working

Second Test, checked gutterballs and also each number of pins that fall:

describe("BowlingGameWhole", function() {
	var game;

	beforeEach(function(){
		game = new BowlingGameWhole();
	});

	function rollNumber (n, pins) {
		for (var i = 0; i < n; i++) {
			game.roll(pins)
		}
	}

	it("keeps track of gutterball game", function() {
		rollNumber(20, 0);
		expect(game.score()).to.equal(0);
	});

	it("handles anytime there is 1 pin that falls", function() {
		rollNumber(20, 1);
		expect(game.score()).to.equal(20);
	});
});

--continute to get the error, and the request is "02 03 2019 19:44:33.175:ERROR [launcher]: No binary for Firefox browser on your platform.
  Please, set "FIREFOX_BIN" env variable."
  
  --added "process.env["FIREFOX_BIN"] = "production";
process.env["IE_BIN"] = "production";" to the karma.config.js page, now getting error:
Killing extra IE process failed. Error: Command failed: wmic.exe Path win32_Process where "Name='iexplore.exe' and CommandLine Like '%SCODEF:undefined%'" call Terminate
/bin/sh: wmic.exe: command not found

Did third test, added the situation to handle a spare being rolled (ten pins knocked down but not all together), along with any other number of pins and gutterballs

describe("BowlingGameWhole", function() {
	var game;

	this.beforeEach(function(){
		game = new BowlingGameWhole();
	});

	function rollNumber (n, pins) {
		for (var i = 0; i < n; i++) {
			game.roll(pins)
		}
	}

	function rollsSpare() {
		game.roll(5);
		game.roll(5);
	}

	it("keeps track of the gutterball game", function() {
		rollNumber(20, 0);
		expect(game.score()).to.equal(0);
	});

	it("handles anytime there is 1 pin that falls", function() {
		rollNumber(20, 1);
		expect(game.score()).to.equal(20);
	});

	it("handles 1 spare that is rolled", function() {
		rollsSpare();
		game.roll(3);
		rollNumber(17, 0);
		expect(game.score()).to.equal(16);
	});
});

-Fourth Test, added the testing needed for when the bowler rolls a strike:

describe("BowlingGameWhole", function() {
	var game;

	this.beforeEach(function(){
		game = new BowlingGameWhole();
	});

	function rollNumber (n, pins) {
		for (var i = 0; i < n; i++) {
			game.roll(pins)
		}
	}

	function rollsSpare() {
		game.roll(3);
		game.roll(7);
    }
    
    function rollsStrike() {
        game.roll(10);
    }

	it("keeps track of the gutterball game", function() {
		rollNumber(20, 0);
		expect(game.score()).to.equal(0);
	});

	it("handles anytime there is 1 pin that falls", function() {
		rollNumber(20, 1);
		expect(game.score()).to.equal(20);
	});

	it("handles 1 spare that is rolled", function() {
		rollsSpare();
		game.roll(3);
		rollNumber(17, 0);
		expect(game.score()).to.equal(16);
    });
    
    it("handles when a strike (all ten pins at once) is rolled", function() {
        rollsStrike();
        game.roll(3);
        game.roll(4);
        rollNumber(16,0);
        expect(game.score()).to.equal(24);
    })
});

Final Test:

describe("BowlingGameWhole", function() {
	var game;

	beforeEach(function(){
		game = new BowlingGameWhole();
	});

	function rollNumber (n, pins) {
		for (var i = 0; i < n; i++) {
			game.roll(pins)
		}
	}

	function rollsSpare() {
		game.roll(3);
		game.roll(7);
	}

	function rollsStrike() {
		game.roll(10);
	}

	it("keeps track of the gutterball game", function() {
		rollNumber(20, 0);
		expect(game.score()).to.equal(0);
	});

	it("handles anytime there is 1 pin that falls", function() {
		rollNumber(20, 1);
		expect(game.score()).to.equal(20);
	});

	it("handles 1 spare that is rolled", function() {
		rollsSpare();
		game.roll(3);
		rollNumber(17, 0);
		expect(game.score()).to.equal(16);
	});

	it("handles when a strike (all ten pins at once) is rolled", function() {
		rollsStrike();
		game.roll(3);
		game.roll(4);
		rollNumber(16, 0);
		expect(game.score()).to.equal(24);
	});

	it("handles a bowler doing a perfect game", function() {
		rollNumber(12, 10);
		expect(game.score()).to.equal(300);
	});
});


# Sources:

https://www.meziantou.net/2018/03/15/test-javascript-code-using-karma-mocha-chai-and-headless-browsers

# Packages installed:
npm install

npm i --save-dev karma karma-mocha karma-chai

npm i --save-dev karma-chrome-launcher karma-firefox-launcher karma-ie-launcher

npm i --save-dev mocha chai

# Langauges used:
Javascript/nodeJS
Bootstrap, CSS and HTML to demonstrate very minimal styling, as this assignment is focused on testing and data.
