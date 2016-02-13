//Rock Paper Scissors game using functions
var hands = ['rock', 'paper', 'scissors'];

var player1Score = 0;
var player2Score = 0;

function getHand() {
	return hands[parseInt(Math.random()*10)%3];
}

function playRound(player1, player2) {
  var player1 = { 
    name: prompt("What is your name?"),
    hand: prompt("Hello" + name + "Please pick either Rock, Paper, or Scissors") };
  var player2 = { name: 'Computer',
  hand: getHand() };

  	if (player1.hand === player2.hand) {
  		console.log("It's a tie!")
  	}
  	else if ((player1.hand === 'rock' && player2.hand === 'scissors') || 
  		(player1.hand === 'scissors' && player2.hand === 'paper') ||
  		(player1.hand === 'paper' && player2.hand === 'rock')) {
  		player1Score += 1;
		console.log(player1.name + " wins this round")
	}
	else {
		console.log(player2Score += 1)
		console.log(player2.name + " wins this round")
	}
	return (player1.name + ': ' + player1.hand + " vs " + player2.name + ': ' + player2.hand);

  };

while (player1Score < 1 && player2Score < 1) {
    if (player1Score == 1)
    	console.log("Katy wins the game!!")
  //    console.log(player1.name + " wins the game!!"); 
//player1.name not defined bc it is in playRound function
    else
       console.log("Kim wins the game!!");
console.log(playRound());
}

playRound();

