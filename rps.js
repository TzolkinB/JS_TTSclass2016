var userChoice;
var computerChoice;
var userScore = 0
var computerScore = 0

while (userScore < 3 && computerScore < 3) {

  userChoice = parseInt(Math.random()*10)%3;
  computerChoice = parseInt(Math.random()*10)%3;

    if (userChoice = 0) {
        userChoice = "rock";
    } 
    else if(userChoice = 1) {
        userChoice = "paper";
    } 
    else {
        userChoice = "scissors";
    } 

    if (computerChoice == 0) {
        computerChoice = "rock";
    } 
    else if(computerChoice == 1) {
        computerChoice = "paper";
    } 
    else {
        computerChoice = "scissors";
    } 

    console.log("Player1: " + userChoice);
    console.log("Player2: " + computerChoice); 
        
    if (userChoice === computerChoice) {
        console.log("The result is a tie! No score.");
    }
        
    else if (userChoice === "rock") {
      if (computerChoice === "scissors") {
        console.log("Player 1 wins with rock");
        userScore += 1;
      }  
      else { 
        console.log("Player 2 wins with paper");
        computerScore += 1; 
      }
    }   
    else if(userChoice === "paper") {
      if (computerChoice === "rock") {
         console.log("Player 1 wins with paper");
         userScore += 1;
      }
      else { 
          console.log("Player 2 wins with scissors");
          computerScore += 1; 
      }
    }    
    else if(userChoice === "scissors") {
      if (computerChoice === "rock"){ 
        console.log("Player 2 wins with rock");
          computerScore += 1;
      }
      else {
          console.log("Player 1 wins with scissors");
          userScore += 1;
      }
    }

    console.log("Player1: " + userScore, "Player 2: " + computerScore);

    if (userScore == 3)
      console.log("Player 1 wins!");
    else
       console.log("Player 2 wins!");
}
