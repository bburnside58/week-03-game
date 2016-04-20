var computerChoices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var wins = 0;
var losses = 0;
var guessesleft = 9;

document.onkeyup = function(event){

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

	if ((userGuess == 'a') || (userGuess == 'b') || (userGuess == 'c') || (userGuess == 'd') || (userGuess == 'e') || (userGuess == 'f') || (userGuess == 'g') || (userGuess == 'h') || (userGuess == 'i') || (userGuess == 'j') || (userGuess == 'k') || (userGuess == 'l') || (userGuess == 'm') || (userGuess == 'n') || (userGuess == 'o') || (userGuess == 'p') || (userGuess == 'q') || (userGuess == 'r') || (userGuess == 's') || (userGuess == 't') || (userGuess == 'u') || (userGuess == 'v') || (userGuess == 'w') || (userGuess == 'x') || (userGuess == 'y') || (userGuess == 'z')){
		if ((userGuess == 'a') && (computerGuess == 'a')){
			wins++;
		}
		if ((userGuess == 'a') && (computerGuess !== 'a')){
			losses++, guessesleft--;
		}
		if ((userGuess == 'b') && (computerGuess == 'b')){
			wins++;
		}
		if ((userGuess == 'b') && (computerGuess !== 'b')){
			losses++, guessesleft--;
		}
		if ((userGuess == 'c') && (computerGuess == 'c')){
			wins++;
		}
		if ((userGuess == 'c') && (computerGuess !== 'c')){
			losses++, guessesleft--;
		}
		if ((userGuess == 'd') && (computerGuess == 'd')){
			wins++;
		}
		if ((userGuess == 'd') && (computerGuess !== 'd')){
			losses++, guessesleft--;
		}
		if ((userGuess == 'e') && (computerGuess == 'e')){
			wins++;
		}
		if ((userGuess == 'e') && (computerGuess !== 'e')){
			losses++, guessesleft--;
		}
		if ((userGuess == 'f') && (computerGuess == 'f')){
			wins++;
		}
		if ((userGuess == 'f') && (computerGuess !== 'f')){
			losses++, guessesleft--;
		}
		if ((userGuess == 'g') && (computerGuess == 'g')){
			wins++;
		}
		if ((userGuess == 'g') && (computerGuess !== 'g')){
			losses++, guessesleft--;
		}
		if ((userGuess == 'h') && (computerGuess == 'h')){
			wins++;
		}
		if ((userGuess == 'h') && (computerGuess !== 'h')){
			losses++, guessesleft--;
		}
		if ((userGuess == 'i') && (computerGuess == 'i')){
			wins++;
		}
		if ((userGuess == 'i') && (computerGuess !== 'i')){
			losses++, guessesleft--;
		}
		if ((userGuess == 'j') && (computerGuess == 'j')){
			wins++;
		}
		if ((userGuess == 'j') && (computerGuess !== 'j')){
			losses++, guessesleft--;
		}
		if ((userGuess == 'k') && (computerGuess == 'k')){
			wins++;
		}
		if ((userGuess == 'k') && (computerGuess !== 'k')){
			losses++, guessesleft--;
		}
		if ((userGuess == 'l') && (computerGuess == 'l')){
			wins++;
		}
		if ((userGuess == 'l') && (computerGuess !== 'l')){
			losses++, guessesleft--;
		}
		if ((userGuess == 'm') && (computerGuess == 'm')){
			wins++;
		}
		if ((userGuess == 'm') && (computerGuess !== 'm')){
			losses++, guessesleft--;
		}
		if ((userGuess == 'n') && (computerGuess == 'n')){
			wins++;
		}
		if ((userGuess == 'n') && (computerGuess !== 'n')){
			losses++, guessesleft--;
		}
		if ((userGuess == 'o') && (computerGuess == 'o')){
			wins++;
		}
		if ((userGuess == 'o') && (computerGuess !== 'o')){
			losses++, guessesleft--;
		}
		if ((userGuess == 'p') && (computerGuess == 'p')){
			wins++;
		}
		if ((userGuess == 'p') && (computerGuess !== 'p')){
			losses++, guessesleft--;
		}
		if ((userGuess == 'q') && (computerGuess == 'q')){
			wins++;
		}
		if ((userGuess == 'q') && (computerGuess !== 'q')){
			losses++, guessesleft--;
		}
		if ((userGuess == 'r') && (computerGuess == 'r')){
			wins++;
		}
		if ((userGuess == 'r') && (computerGuess !== 'r')){
			losses++, guessesleft--;
		}
		if ((userGuess == 's') && (computerGuess == 's')){
			wins++;
		}
		if ((userGuess == 's') && (computerGuess !== 's')){
			losses++, guessesleft--;
		}
		if ((userGuess == 't') && (computerGuess == 't')){
			wins++;
		}
		if ((userGuess == 't') && (computerGuess !== 't')){
			losses++, guessesleft--;
		}
		if ((userGuess == 'u') && (computerGuess == 'u')){
			wins++;
		}
		if ((userGuess == 'u') && (computerGuess !== 'u')){
			losses++, guessesleft--;
		}
		if ((userGuess == 'v') && (computerGuess == 'v')){
			wins++;
		}
		if ((userGuess == 'v') && (computerGuess !== 'v')){
			losses++, guessesleft--;
		}
		if ((userGuess == 'w') && (computerGuess == 'w')){
			wins++;
		}
		if ((userGuess == 'w') && (computerGuess !== 'w')){
			losses++, guessesleft--;
		}
		if ((userGuess == 'x') && (computerGuess == 'x')){
			wins++;
		}
		if ((userGuess == 'x') && (computerGuess !== 'x')){
			losses++, guessesleft--;
		}
		if ((userGuess == 'y') && (computerGuess == 'y')){
			wins++;
		}
		if ((userGuess == 'y') && (computerGuess !== 'y')){
			losses++, guessesleft--;
		}
		if ((userGuess == 'z') && (computerGuess == 'z')){
			wins++;
		}
		if ((userGuess == 'z') && (computerGuess !== 'z')){
			losses++, guessesleft--;
		}

		var html = "<p>Guess what letter I'm thinking of</p>" +
		"<p>wins: " + 
		wins + 
		"</p>" +
		"<p>losses: " + 
		losses + 
		"</p>" +
		"<p>guesses left: " +
		guessesleft +
		"</p>";
		document.querySelector('#game').innerHTML = html;







	}
}













