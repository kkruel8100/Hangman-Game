

//list of variables
var wins=0;
var losses=0; 
var wrgGuess=6;
var toppings = ["pepperoni", "sausage", "sardine", "cheese", "jalapeno", "onion", "spinach", "pineapple", "mushroom", "chicken"];
var guessArray = []; 

  
// "document.ready" makes sure that our JavaScript doesn't get run until the HTML document is finished loading.

$(document).ready(function() {



   	//jQuery to select the header with "click-me" as its class.
   	// Whenever it is clicked...
   	$("#clickStart").on("click", function() {

      // ... we trigger an alert.
      alert("I've been clicked!");

		// Randomize computer choice for hidden word
		var computerChoice = toppings[Math.floor((Math.random() * (toppings.length)))];
		console.log("Computer chose " + computerChoice);

		//Replace any character (.) in computerChoice with _
		var replaceChoice = computerChoice.replace(/./g, "_");  

		//Update HTML page
		
		document.getElementById("clickStart").style.visibility = "collapse";
		document.getElementById("currentWord").innerHTML = "Pizza Topping";
		document.getElementById("secretWord").innerHTML = replaceChoice;
		document.getElementById("letGuess").innerHTML = "Letters Guessed";
		document.getElementById("countDown").innerHTML = "Wrong Guesses remaining: " + wrgGuess;

 		//Capture keystroke from user and converts to lower case
		document.onkeyup = function (event) {
			var userguess = String.fromCharCode(event.keyCode). toLowerCase ();
			console.log(userguess);
	
			//test for userguess in guessArray - result is true or false
			var matchGA = new RegExp(userguess);
			var resultGA = matchGA.test(guessArray);
			console.log(resultGA);
				if (resultGA===true) {
					alert("You've already guessed '" + userguess + "'.  Please try another letter.");
				}

				else {
					//push to guess array	
					guessArray.push(userguess);
					document.getElementById("letGuess").innerHTML = "Letters Guessed";
					document.getElementById("array").innerHTML = guessArray;
					console.log(guessArray);
		
					//test for userguess in computerChoice - result is true or false
					var matchCC = new RegExp(userguess);
					var resultCC = matchCC.test(computerChoice);
					console.log(resultCC);

					//Good Guess

					//return index position of all occurences and creates locations array
					if (resultCC===true) {
						var locations = [];
						for(i=0; i<computerChoice.length; i++) {
							if (computerChoice[i] === userguess) locations.push(i);
							console.log(locations);
						}
					

						//Javascript function define to replace userguess character at identified matched locations 	
						String.prototype.replaceAt = function(locations,userguess) {
							return this.substr(0, locations) + userguess + this.substr(locations + userguess.length);
						}
						//For loop to run the replaceAt for all charactersi
						for (i=0; i<locations.length; i++) {
							replaceChoice = replaceChoice.replaceAt(locations[i],userguess);
							document.getElementById("secretWord").innerHTML = replaceChoice;
							console.log(replaceChoice);
						}

						


						//All letters found	
						if (replaceChoice===computerChoice) {
							alert("Congratulations! You win to live another day!");
							wins++;
							console.log(wins);
							guessArray = [];
							wrgGuess = 6;
							console.log(guessArray);
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
						console.log(wrgGuess);
						document.getElementById("countDown").innerHTML = "Wrong Guesses remaining: " + wrgGuess;
						if (wrgGuess===0) {
							alert("You're Dead!  Hope you are a cat or you believe in Karma.");
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
		alert("You clicked reset");
		console.log("losses " + losses);
		console.log("wins " + wins);
		console.log("wrgGuess" + wrgGuess);
		console.log("guessArray" + guessArray);
		document.getElementById("wins").innerHTML = "Wins: ";
		document.getElementById("losses").innerHTML = "Losses: ";
		document.getElementById("countDown").innerHTML = "Wrong Guesses remaining: " + wrgGuess;
		document.getElementById("array").innerHTML = guessArray;
	});

});//document ready






