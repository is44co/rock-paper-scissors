const paper = document.querySelector(".paper");
const rock = document.querySelector(".rock");
const scissors = document.querySelector(".scissors");
const svg=document.querySelectorAll('svg');
let myScore=document.querySelector('.playerScore');
let compScore=document.querySelector('.compScore');
let reset =document.querySelector('.reset')
let result=document.querySelector('.result')
let userChoice ;


function User() {
  svg.forEach((n) => {
    n.addEventListener('click', () => {
   
      
       userChoice = n.getAttribute('data-value'); 
     
    
     
	   playRound(n);
 
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

 result.textContent= "you choose " +
  userChoice +' and the computer choice  is ' +
 computerChoice +" so you win";


  } else if (userChoice === computerChoice) {
  result.textContent=( ` you choose ${userChoice} and the computer choose ${computerChoice} so  its A draw`);
  } 





if (myScore.textContent >= 3) {
	result.textContent="Congratulations! You won the game!";
  
  setTimeout(resetGame,1000)
 
	  } else if (compScore.textContent >= 3) {
      
 
	result.textContent="Sorry, you lost the game.";
  setTimeout(resetGame,1000)
	  }
}

reset.addEventListener('click',()=>{

  resetGame()

})
function resetGame(){
	myScore.textContent=0;
	compScore.textContent=0;
  result.textContent='';

}
