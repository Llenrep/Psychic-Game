

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userGuesses = "";

var wins = 0;
var losses = 0;
var tries = 0;

// Randomly chooses a choice from the options array. This is the Computer's guess.


var userGuessesText = document.getElementById("userguesses-text");
var computerChoiceText = document.getElementById("computerchoice-text"); //will change this to be masked soon as I get it to work
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var triesText = document.getElementById("tries-text");

function startPlaying() { //allows the start button to begin the actual game
    var computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    var x = document.getElementById("start")
    userGuessesText.textContent = "You Chose: " + userGuesses;
    computerChoiceText.textContent = "The computer chose: " + computerChoice;
    winsText.textContent = "Your Wins: " + wins;
    lossesText.textContent = "Your Losses: " + losses;
    triesText.textContent = "Amount of Tries: " + tries;

    document.onkeyup = function (event) { //each key press is registered through this and the conditionals are what allow for additions and subtractions to the wins, losses, and ties

        var userGuess = event.key;

        if (userGuess === computerChoice) {
            wins++
            winsText.textContent = "Your Wins: " + wins;
            alert("You Guessed Right!");
            tries = 0;
            triesText.textContent = "Amount of Tries: " + tries;
            var userGuesses = "";
            userGuessesText.textContent = "You Chose: " + userGuesses;

            var computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)]
            computerChoiceText.textContent = "The computer chose: " + computerChoice;
        }
        if (userGuess !== computerChoice) {
            tries++;
            triesText.textContent = "Amount of Tries: " + tries;
            userGuessesText.textContent += userGuess + ", ";

        }
        if (tries === 13) {
            losses++;
            lossesText.textContent = "Your Losses: " + losses;
            alert("You Lose");
            tries = 0;
            triesText.textContent = "Amount of Tries: " + tries;
            var userGuesses = "";
            userGuessesText.textContent = "You Chose: " + userGuesses;

            var computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)]
            computerChoiceText.textContent = "The Computer Chose: " + computerChoice;
        }
    }
}
function stopPlaying() { //what allows the document to "stop playing"
    document.write("Okay, Good bye! Refresh page to play again!")
}
