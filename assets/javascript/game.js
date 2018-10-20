var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    var wins = 0;
    var losses = 0;
    var remaining = 9;
    var guesses = [];

    var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(randomLetter);


    document.onkeydown = function(event) {
        var playerGuess = event.key;

        if (playerGuess === randomLetter) {
            wins++;
            remaining = 9;
            guesses = [];
        }

        if (playerGuess !== randomLetter) {
            remaining--;
            guesses.push(playerGuess);
        }

        if (remaining === 0) {
            losses++;
            remaining = 9;
            guesses = [];
        }

        document.getElementById('won').innerHTML = wins;
        document.getElementById('lost').innerHTML = losses;
        document.getElementById('attempts').innerHTML = remaining;
        document.getElementById('guessed').innerHTML = guesses.join(" ");

    }




  