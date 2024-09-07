const paper = document.querySelector(".paper");
const rock = document.querySelector(".rock");
const scissors = document.querySelector(".scissors");
const svg=document.querySelectorAll('svg');
let myScore=document.querySelector('.playerScore');
let compScore=document.querySelector('.compScore');
let reset =document.querySelector('.reset')

let userChoice ;


function User() {
  svg.forEach((n) => {
    n.addEventListener('click', () => {
       userChoice = n.getAttribute('data-value'); //
	  
	   playRound();
 
    });
  });

}
User()
function Computer(){
	let computerChoice=Math.floor(Math.random()*3)+1;
	if (computerChoice===1){
		 return 'rock';
	}
	if (computerChoice===2){
	 return	'paper';
	}
	if (computerChoice===3){
		 return 'scissors';
	}
}
function playRound() {
	
	computerChoice=Computer();
	if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice=== "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
	myScore.textContent = parseInt(myScore.textContent) + 1;

  console.log (
      "you choose " +
    userChoice +
      " and the computer choice  is " +
    computerChoice +
      " so you win"
    );


  } else if (userChoice === computerChoice) {
  alert( "its A draw");
  } else {
    compScore.textContent++;
   console.log (
      "you choose " +
      userChoice +
      " and the computer choice  is " +
      computerChoice +
      " so you lost"
    );
 
  
}
if (myScore.textContent > 5) {
	alert("Congratulations! You won the game!");
	myScore.textContent=0;
	compScore.textContent=0;
	  } else if (compScore.textContent > 5) {
		myScore.textContent=0;
	compScore.textContent=0;
		alert("Sorry, you lost the game.");
	  }
}

reset.addEventListener('click',()=>{


	myScore.textContent=0;
	compScore.textContent=0;
})
