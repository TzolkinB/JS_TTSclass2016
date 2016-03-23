//Rock Paper Scissors game using functions
var hands = ['rock', 'paper', 'scissors'];

function getHand() {
	return hands[parseInt(Math.random()*10)%3];
}

var person1 = {
	name: 'sam', 
	hand: getHand
};

var person2 = {
	name: 'ted', 
	hand: getHand
};

function playRound(person1, person2) {
	if (person1.hand() === person2.hand()) {
	console.log("tie")
	}
	else if (person1.hand() === 0 && person2.hand() === 1)
		console.log(person2 + " wins")


}

console.log(playRound());