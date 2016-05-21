var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var userGuess = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;



document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	
	var computerGuess = computerChoices[Math.floor(Math.random()* computerChoices.length)];
	 if(computerChoices === userGuess){
	 	wins++;
	 }else if(computerChoices !== userGuess)
	 	losses++;

	 	if(losses === 8){
	 		alert('You Lose')
	 		
	 		
		}

	 var html = "<h1>The Psychic Game</h1>" +
		"<p>wins: " + 
		wins + 
		"</p>" +
		"<p>losses: " + 
		losses + 
		"</p>";
		
		document.querySelector('#game').innerHTML = html;

	}



