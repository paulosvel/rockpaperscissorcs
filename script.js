document.addEventListener("DOMContentLoaded", function(event) {
  const icon1 = document.getElementById('rock');
  icon1.addEventListener('click', function() {
  playerchoice == 'rock';
});
});

document.addEventListener("DOMContentLoaded", function(event) {
  const icon1 = document.getElementById('paper');
  icon1.addEventListener('click', function() {
  playerchoice == 'paper';
});
});

document.addEventListener("DOMContentLoaded", function(event) {
  const icon1 = document.getElementById('scissors');
  icon1.addEventListener('click', function() {
  playerchoice == 'scissors';
});
});

function getComputerChoice()
{
switch(cpuchoice){
case 1:
  return 'rock';
  break;
case 2:
  return 'paper';
  break;
case 3:
  return 'scissors';
  break;
}
}

function count(playerscore,cpuscore)
{
if (playerchoice == 'rock' && cpuchoice == 'scissors')
{
playerscore = playerscore+1;
}
else if (playerchoice == 'scissors' && cpuchoice == 'paper')
{
playerscore = playerscore+1;
}
else if (playerchoice == 'paper' && cpuchoice == 'rock')
{
  playerscore = playerscore+1;
}
else if (playerchoice == 'paper' && cpuchoice == 'paper')
{
  playerscore = playerscore;
}
else if (playerchoice == 'rock' && cpuchoice == 'rock')
{
  playerscore = playerscore;
}
else if (playerchoice == 'scissors' && cpuchoice == 'scissors')
{
  playerscore = playerscore;
}
else
{
cpuscore = cpuscore+1;
}

}


function checkwinner() 
{

}

function game(){


for (let i = 0; i < 5; i++) {

}
}