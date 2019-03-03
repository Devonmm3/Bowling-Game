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
