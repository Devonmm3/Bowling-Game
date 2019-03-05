
	
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

	
