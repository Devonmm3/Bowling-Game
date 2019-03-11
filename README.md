# Bowling-Game
Coding Exercise-Enter your bowling scores from each frame, press the button and check the console for your score.

# URL Link:
	https://devonmm3.github.io/Bowling-Game/

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
Front End- used 2 JS files, one for the bowling terms and setting up the code for the various points, and one for the UI, which controls the buttons and the HTML page.  When the numbers are added to the bar, the total score is generated and displayed in the console

# Tests: 
BowlingGameWhole is the constructor in the BowlingGame.js file with two methods 1) rolls, which is the called function when the player rolls the ball and the knocked down pins make the argument and 2) currentPlayerSore, which is called at the end of the game.

Continue to get an error for the firefox and IE browsers, the terminal says that my platform does not support them.
(photo of terminal attached in images folder in the repo).

  --added "process.env["FIREFOX_BIN"] = "production";
process.env["IE_BIN"] = "production";"
process.env["FIREFOX_DEVELOPER_BIN] = "production";
process.env{"FIREFOX_NIGHTLY_BIN"] = "production;
to the karma.config.js page, now getting error:
Killing extra IE process failed. Error: Command failed: wmic.exe Path win32_Process where "Name='iexplore.exe' and CommandLine Like '%SCODEF:undefined%'" call Terminate
/bin/sh: wmic.exe: command not found

Input the first example from the assignment in the console log ("X-X-X-X-X-X-X-X-X-X-XX").

Initial test, just to check on what happens if there is a gutterball:


	describe("BowlingGameWhole", function() {
	it("should keep track of the gutterball game", function() {
		var game = new BowlingGameWhole();
		for (var i = 0; i < 20;i++) {
		// rollNumber(20, 0);
		game.rollBall(0);
	}
		expect(game.currentScore()).to.equal(0);
	});
});
	
--Photo of the test working in assets/images/Test1Success


Second Test, to check checked gutterballs and also each number of pins that fall:


	describe("BowlingGameWhole", function() {
	var game;

	this.beforeEach(function(){
		game = new BowlingGameWhole();
	});

	function rollNumber (n, pins) {
		for (var i = 0; i < n; i++) {
			game.rollBall(pins)
		}
	}
	
	it("should keep track of the gutterball game", function() {
		rollNumber(20,0);
		expect(game.currentScore()).to.equal(0);
	});

	it("should handle any time 1 or more pin falls", function() {
		rollNumber(20,1);
		expect(game.currentScore()).to.equal(20);
	});
});

--screen shot of the successful test is in assets/images/Test2Success
  


Did third test, added the situation to handle a spare being rolled (ten pins knocked down but not all together), along with any other number of pins and gutterballs

	describe("BowlingGameWhole", function() {
	var game;
	this.beforeEach(function(){
		game = new BowlingGameWhole();

	function rollNumber (n, pins) {
		for (var i = 0; i < n; i++) {
			game.rollBall(pins)
		}
	}

	function rollsSpare() {
		game.rollBall(5);
		game.rollBall(5);	
	}
	
	it("should keep track of the gutterball game", function() {
		rollNumber(20,0);
		expect(game.currentScore()).to.equal(0);
	});

	it("should give data any time 1 or more pin falls", function() {
		rollNumber(20, 1);
		expect(game.currentScore()).to.equal(20);
	});

	it("should be able to give data for spare", function() {
		rollsSpare();
		game.rollBall(3);
		rollNumber(16, 0);
		expect(game.currentScore()).to.equal(21);
	});
	});

-Fourth Test, added the testing needed for when the bowler rolls a strike:
	
	describe("BowlingGameWhole", function() {
	var game;
	this.beforeEach(function(){
		game = new BowlingGameWhole();

	function rollNumber (n, pins) {
		for (var i = 0; i < n; i++) {
			game.rollBall(pins)
		}
	}

	function rollsSpare() {
		game.rollBall(5);
		game.rollBall(5);	
	}

	function rollsStrike() {
		game.rollBall(10);
	}
	
	it("should keep track of the gutterball game", function() {
		rollNumber(20,0);
		expect(game.currentScore()).to.equal(0);
	});

	it("should give data any time 1 or more pin falls", function() {
		rollNumber(20, 1);
		expect(game.currentScore()).to.equal(20);
	});

	it("should be able to give data for spare", function() {
		rollsSpare();
		game.rollBall(3);
		rollNumber(16, 0);
		expect(game.currentScore()).to.equal(21);
	});

	it("should be able to give data for a strike", function() {
		rollsStrike();
		game.rollBall(3);
		game.rollBall(4);
		rollNumber(16, 0);
		expect(game.currentScore()).to.equal(24);
	});
	});
	});

--ran into an error that says "Connected on socket q74F83uukOHl7Ok0AAAA with id 51053655
HeadlessChrome 72.0.3626 (Mac OS X 10.14.0): Executed 0 of 0 ERROR (0.003 secs / 0 secs)".  Sources on Stack OverFlow and Git are suggesting a rollback of Mac software to correct it, which I do no feel comfortable doing.  Screen shot of the testing working to launch the various browsers in assets/images/Test4Error.


Final Test:

--this test should handle a bowler that rolls a perfect game.

		
describe("BowlingGameWhole", function() {
	var game;
	this.beforeEach(function(){
		game = new BowlingGameWhole();

	function rollNumber (n, pins) {
		for (var i = 0; i < n; i++) {
			game.rollBall(pins)
		}
	}

	function rollsSpare() {
		game.rollBall(5);
		game.rollBall(5);	
	}

	function rollsStrike() {
		game.rollBall(10);
	}
	
	it("should keep track of the gutterball game", function() {
		rollNumber(20,0);
		expect(game.currentScore()).to.equal(0);
	});

	it("should give data any time 1 or more pin falls", function() {
		rollNumber(20, 1);
		expect(game.currentScore()).to.equal(20);
	});

	it("should be able to give data for spare", function() {
		rollsSpare();
		game.rollBall(3);
		rollNumber(16, 0);
		expect(game.currentScore()).to.equal(21);
	});

	it("should be able to give data for a strike", function() {
		rollsStrike();
		game.rollBall(3);
		game.rollBall(4);
		rollNumber(16, 0);
		expect(game.currentScore()).to.equal(24);
	});
	it("should give data for a perfect game", function() {
		rollNumber(12, 10);
		expect(game.currentScore()).to.equal(300);
	})
	});
	});

-continued to get the same error from the 4th test, included a screen shot in assets/images/Test5error


**INCLUDED FINAL CODE HOW I WOULD CONTINUE WITH THE CODE IF IT WAS TESTING CORRECRLT**

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
