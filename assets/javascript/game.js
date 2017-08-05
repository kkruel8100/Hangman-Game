
//list of variables
var wins=0;
var losses=0; 
var toppings = ["pepperoni", "sausage", "sardine", "cheese", "jalapeno", "onion", "spinach", "pineapple", "mushroom", "chicken"];
var deadSound = new Audio("assets/sounds/funeral_march_by_chopin.mp3");
var winSound = new Audio("assets/sounds/stadium_applause.mp3");
var resetGame = false;

  
// "document.ready" makes sure that our JavaScript doesn't get run until the HTML document is finished loading.

$(document).ready(function() {



   	//jQuery to select the header with "click-me" as its class.
   	// Whenever it is clicked...
   	$("#clickStart").on("click", function() {
   		// If game has been reset, then reset wins and losses
   		if (resetGame===true) {
   			wins=0;
   			losses=0;
   		}
   		// Set variables here so that reset function operates
   		var wrgGuess=6;
   		var guessArray = []; 
		// Randomize computer choice for hidden word
		var computerChoice = toppings[Math.floor((Math.random() * (toppings.length)))];

		//Replace any character (.) in computerChoice with _
		var replaceChoice = computerChoice.replace(/./g, "_");  

		//Update HTML page
		
		document.getElementById("clickStart").style.visibility = "collapse";
		document.getElementById("currentWord").innerHTML = "Pizza Topping";
		document.getElementById("secretWord").style.visibility = "visible";
		document.getElementById("secretWord").innerHTML = replaceChoice;
		document.getElementById("letGuess").innerHTML = "Letters Guessed";
		document.getElementById("countDown").innerHTML = "Wrong Guesses remaining: " + wrgGuess;

 		//Capture keystroke from user and converts to lower case
		document.onkeyup = function (event) {
			var userguess = String.fromCharCode(event.keyCode). toLowerCase ();
			
			//test for userguess in guessArray - result is true or false
			var matchGA = new RegExp(userguess);
			var resultGA = matchGA.test(guessArray);

				if (resultGA===true) {
					alert("You've already guessed '" + userguess + "'.  Please try another letter.");
				}

				else {
					//push to guess array	
					guessArray.push(userguess);
					document.getElementById("letGuess").innerHTML = "Letters Guessed";
					document.getElementById("array").innerHTML = guessArray;
		
					//test for userguess in computerChoice - result is true or false
					var matchCC = new RegExp(userguess);
					var resultCC = matchCC.test(computerChoice);

					//Good Guess

					//return index position of all occurences and creates locations array
					if (resultCC===true) {
						var locations = [];
						for(i=0; i<computerChoice.length; i++) {
							if (computerChoice[i] === userguess) locations.push(i);
						}
					

						//Javascript function define to replace userguess character at identified matched locations 	
						String.prototype.replaceAt = function(locations,userguess) {
							return this.substr(0, locations) + userguess + this.substr(locations + userguess.length);
						}
						//For loop to run the replaceAt for all charactersi
						for (i=0; i<locations.length; i++) {
							replaceChoice = replaceChoice.replaceAt(locations[i],userguess);
							document.getElementById("secretWord").innerHTML = replaceChoice;
						}

						


						//All letters found	
						if (replaceChoice===computerChoice) {
							document.getElementById("secretWord").innerHTML = computerChoice;
							winSound.play();
							wins++;
							guessArray = [];
							wrgGuess = 6;
							document.onkeyup = function(event) {
								return false;
							}
							document.getElementById("array").innerHTML = guessArray;	
							document.getElementById("wins").innerHTML = "Wins: " + wins;
							document.getElementById("clickStart").style.visibility = "visible";

						}

					}//end of if resultCC===true

					//Bad Guess
					else {
						wrgGuess--;
						document.getElementById("countDown").innerHTML = "Wrong Guesses remaining: " + wrgGuess;
						if (wrgGuess===0) {
							deadSound.play();
							alert("You're Dead!  There is no pizza in the afterlife.");
							document.getElementById("secretWord").innerHTML = computerChoice;
							losses++;
							guessArray = [];
							wrgGuess = 6;
							document.onkeyup = function(event) {
								return false;
							}
							document.getElementById("array").innerHTML = guessArray;
							document.getElementById("losses").innerHTML = "Losses: " + losses;
							document.getElementById("clickStart").style.visibility = "visible";
						}
					}
				} //end of else
		};//onkeyup
		
	
	});//click-me game

	//jQuery to create reset button
	$("#reset").on("click", function () {
		var wins=0;
		var losses=0;
		var wrgGuess=6;
		var guessArray = [];
		document.getElementById("wins").innerHTML = "Wins: ";
		document.getElementById("losses").innerHTML = "Losses: ";
		document.getElementById("clickStart").style.visibility = "visible";
		document.getElementById("currentWord").innerHTML = "Pizza Topping";
		document.getElementById("secretWord").style.visibility = "hidden";
		document.getElementById("array").innerHTML = guessArray;
		document.getElementById("countDown").innerHTML = "Wrong Guesses remaining: " + wrgGuess;
		resetGame = true;
		
	});

});//document ready






