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