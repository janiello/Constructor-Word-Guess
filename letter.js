var letter = {
    character: "",
    isGuessed: false,
    showLetter: function() {
        if (this.isGuessed === true) {
            console.log(this.character);
        } else {
            console.log("_");
        };
    },
    userGuess: function(guess) {
        if (guess === this.character) {
            this.isGuessed = true
        };
    }
};

letter.userGuess(process.argv[2]);
letter.showLetter();