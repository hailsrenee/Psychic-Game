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
            guesses = [];
            remaining = 9;
        }


        if (guesses.indexOf(playerGuess) >= 0) {

        } else {
            guesses.push(playerGuess);
            document.getElementById('playerGuess').innerHTML = remaining;
            console.log(guesses);
        }

        document.getElementById('won').innerHTML = wins;
        document.getElementById('lost').innerHTML = losses;
        document.getElementById('attempts').innerHTML = remaining;
        document.getElementById('guessed').innerHTML = guesses;

    }

//    var html = 
//    "<h1> The Psychic Game </h1>" +
//    "<p>Guess what letter I'm thinking of!</p>" +
//    "<p>Wins: " + wins + "</p>" +
//    "<p>Losses: " + losses + "</p>" +
//    "<p>Guesses Left: " + numGuesses + "</p>" +
//    "<p>Your Guesses so far: " + guessChoices.join(", ") + "</p>";

//    document.querySelector("#game").innerHTML = html;

   
//    }
// };


  