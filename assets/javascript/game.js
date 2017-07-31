// Array for hidden words
var toppings = ["pepperoni", "sausage", "sardine", "cheese", "jalapeno", "onion", "spinach", "pineapple", "mushroom", "chicken"];

console.log(toppings);

// List variables
var wins=0;
var losses=0;
var wrgGuess=6;
var gameOver=false;
var ugArray=[];
var mhArray=[];


// Randomize computer choice for hidden word
var computerChoice = toppings[Math.floor((Math.random() * (toppings.length)))];
console.log("Computer chose " + computerChoice);

//Split computer chosen word into single character array
var ccArray = computerChoice.split("");
console.log(ccArray);
console.log(ccArray.length);


//Create Screen display for number of letters in hidden word
	for (var i=0; i < ccArray.length; i++) {
		myHash = ccArray[i].replace(ccArray[i], "_");
		mhArray.push(myHash);

	}
//Makes array a string with spaces for display	
var display = mhArray.join(" ");

console.log(display);



//Changes HTML and Displays computer choice
var changeText = "<p>Current Word</p>" +
	display;

document.querySelector('#start').innerHTML = changeText;


//Capture keystroke from user and converts to lower case
	document.onkeyup = function (event) {
		var userguess = String.fromCharCode(event.keyCode). toLowerCase ();
		console.log(userguess);
		console.log(wrgGuess);

//Compares user keystroke with characters in computer array		
		for (var i=0; i < ccArray.length-1; i++) {
			if (ccArray[i] === userguess) {
				console.log("Match");
			//	display = display.replace(userguess);
				function setCharAt (display, i, userguess) {
					if (i > display.length-1) return display;
					return display.substr(0, i) + userguess + display.substr(i+1);
				}
	//			console.log(display);
//				var display = mhArray.join(" ");
			}
//No match result equals indexOf -1 & number of guesses decreases by one
			if (ccArray.indexOf(userguess) === -1) {
				wrgGuess--;
				console.log("Loser");
				console.log("Wrong Guesses: " + wrgGuess);
				break;
			}
		}	
				
		if (wrgGuess===0) {
			console.log(wrgGuess);
			gameOver=true;
			console.log("You are Dead! Game Over");	
					
			alert("Game Over");		
		}
//Pushes user guesses into array
		ugArray.push(userguess);
				
//Changes HTML file text with below text
		var changeText = "<p>Number of Wrong Guesses Remaining: " + wrgGuess + "</p>" +
			"<p>Letters already guessed: </p>"+ 
			ugArray +
			"<p></p>" +
			"<p></p>" +
			"<p>Wins: " + wins + "</p>" +
			"<p>Losses: " + losses + "</p>";

		document.querySelector('#progress').innerHTML = changeText;			

	}
		

/*
var fruits = ["apple", "banana", "orange"];
var hiddenWord = 


var cText = ccArray.length;
console.log(cText);
var changeText = cText(len +1).join("_ ");
*/
	

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
//	do {
//		console.log(wrgGuess);
//		wrgGuess++;
//	}
//	while (wrgGuess<6);	


/*	if (wrgGuess<6) {
*/