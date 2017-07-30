console.log("Does this work?");

var toppings = ["pepperoni", "sausage", "sardine", "cheese", "jalapeno", "onion", "spinach", "pineapple", "mushroom", "chicken"];

console.log(toppings);

var wins=0;
var wrgGuess=0;
var gameOver=false;

var computerChoice = toppings[Math.floor((Math.random() * (toppings.length)))];
console.log("Computer chose " + computerChoice);

var ccArray = computerChoice.split("");
console.log(ccArray);
console.log(ccArray.length);

console.log(gameOver);

//	do {
//		console.log(wrgGuess);
//		wrgGuess++;
//	}
//	while (wrgGuess<6);	


/*	if (wrgGuess<6) {
*/
	document.onkeyup = function (event) {
		var userguess = String.fromCharCode(event.keyCode). toLowerCase ();
		console.log(userguess);
		console.log(wrgGuess);
		
		for (var s=0; s < ccArray.length-1; s++) {
					if (ccArray[s] === userguess) {
					console.log("Match");
					}

					if (ccArray.indexOf(userguess) === -1) {
					wrgGuess++;
					console.log("Loser");
					console.log("Wrong Guesses: " + wrgGuess);
					break;
					}
				}	
				
				if (wrgGuess>=6) {
					console.log(wrgGuess);
					gameOver=true;
					console.log("You are Dead! Game Over");	
					
					alert("Game Over");		
				}
	}
		

/*
var fruits = ["apple", "banana", "orange"];
var hiddenWord = 


var cText = ccArray.length;
console.log(cText);
var changeText = cText(len +1).join("_ ");
*/
	

//document.querySelector('#game').innerHTML = changeText;

//while (gameOver=false) {
//	}
// 
//while (!finished) {
//		if (wrgGuess===6) {
//			console.log("You're Dead! Game Over!");
//		}
//}
//		if (wrgGuess===6) {		
//			console.log("You're Dead! Game Over!");
//	while (!finished) {
//			finished=true;}
