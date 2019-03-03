var expect = require("karma-chai")
var game = require("../bowlingGame")
describe("BowlingGameWhole", function() {
	

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

	it("should keep track of the gutterball game", function() {
		rollNumber(20, 0);
		expect(game.score()).to.equal(0);
	});

	it("should handle anytime there is 1 pin that falls", function() {
		rollNumber(20, 1);
		expect(game.score()).to.equal(20);
	});

	it("should handle 1 spare that is rolled", function() {
		rollsSpare();
		game.roll(3);
		rollNumber(17, 0);
		expect(game.score()).to.equal(16);
	});

	it("should handle when a strike (all ten pins at once) is rolled", function() {
		rollsStrike();
		game.roll(3);
		game.roll(4);
		rollNumber(16, 0);
		expect(game.score()).to.equal(24);
	});

	it("should handle a bowler doing a perfect game", function() {
		rollNumber(12, 10);
		expect(game.score()).to.equal(300);
	});
});
