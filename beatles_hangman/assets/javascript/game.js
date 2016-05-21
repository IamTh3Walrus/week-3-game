var userGuess = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	
var guess;
var guesses_remaining;
var wins;
var letters;

var computerChoices = ["Love Me Do", "From Me to You, She Loves You", "I Want to Hold Your Hand",
"Can't Buy Me Love", "A Hard Day's Night", "I Feel Fine", "Eight Days a Week", "Ticket to Ride",
"Help", "Yesterday", "Day Tripper", "We Can Work It Out", "Paperback Writer", "Yellow Submarine",
"Eleanor Rigby", "Penny Lane", "All You Need Is Love",
"Hello Goodbye", "Lady Madonna", "Hey Jude", "Get Back", "The Ballad of John and Yoko",
"Something", "Come Together", "Let It Be", "The Long and Winding Road"];

var showGuessesRemaining = 
	document.getElementById('guesses_remaining');

	var winTotal =
	document.getElementById('wins')

	var currentWord = 
	document.getElementById('word');

	var alreadyGuessed =
	document.getElementById('guess');

	var blankSpaces =
	document.getElementById('letters')

	
