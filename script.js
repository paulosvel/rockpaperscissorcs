let playerchoice;
let cpuscore = 0;
let playerscore = 0;

document.addEventListener("DOMContentLoaded", function(event) {
  const rock = document.getElementById('rock');
  rock.addEventListener('click', function() {
    playerchoice = 'rock';
    game();
  });
});

document.addEventListener("DOMContentLoaded", function(event) {
  const paper = document.getElementById('paper');
  paper.addEventListener('click', function() {
    playerchoice = 'paper';
    game();
  });
});

document.addEventListener("DOMContentLoaded", function(event) {
  const scissors = document.getElementById('scissors');
  scissors.addEventListener('click', function() {
    playerchoice = 'scissors';
    game();
  });
});

function getcpuchoice() {
  let cpuchoice = Math.random();
  if (cpuchoice < 0.34) {
      cpuchoice = "rock";
  } else if(cpuchoice <= 0.67) {
      cpuchoice = "paper";
  } else {
      cpuchoice = "scissors";
  }
  return cpuchoice;
}

function checkwinner(playerchoice, cpuchoice) {
  if (playerchoice == 'rock' && cpuchoice == 'scissors') {
    playerscore++;
    return "player";
  } else if (playerchoice == 'scissors' && cpuchoice == 'paper') {
    playerscore++;
    return "player";
  } else if (playerchoice == 'paper' && cpuchoice == 'rock') {
    playerscore++;
    return "player";
  } else if (playerchoice == cpuchoice) {
    return "tie";
  } else {
    cpuscore++;
    return "cpu";
  }
}

function game() {
  let cpuchoice = getcpuchoice();
  let result = checkwinner(playerchoice, cpuchoice);
  console.log("Player chose: " + playerchoice);
  console.log("CPU chose: " + cpuchoice);
  console.log("Result: " + result);
  console.log("Player score: " + playerscore);
  console.log("CPU score: " + cpuscore);

  if ((playerscore || cpuscore) >= 5) 
  {
    console.log("Game over");
    console.log("Final score: Player " + playerscore + ", CPU " + cpuscore);
  }
}
