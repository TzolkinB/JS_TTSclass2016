/* var player1 = "name", player2 = "names" */
var player1 = "katy";
var player2 = "notnamed";
var player1WinCount = 0;
var player2WinCount = 0; 
var player1Hand;
var player2Hand;

while(player1WinCount < 3 || player2WinCount > 2) {
	player1Hand = parseInt(Math.random()*10)%3;
	player2Hand = parseInt(Math.random()*10)%3;

    console.log(player1Hand,player2Hand);

/* using a function would make the r/p/s easier but we don't know functions yet so only if/else statements */
    if(player1Hand === 0) {
    	if(player2Hand === 1) {
    		player2WinCount++;
    	} else if (player2Hand === 2) {
    		player1WinCount++;
    	}
    }
}

console.log('Katy has ' + player1WinCount + "wins");