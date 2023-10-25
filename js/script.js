let playGame = confirm("shall we play rock paper or scissors?");

if(playGame){
    let playerChoice = prompt("Please enter rock, paper or scissors.");

    if(playerChoice){
        let playerOne = playerChoice.trim().toLowerCase();
        if(playerOne === "rock" || playerOne === "paper" || playerOne === "scissors"){
            let computerChoice = Math.floor(Math.random()*3 + 1);
            let computer = computerChoice === 1? "rock" : computerChoice === 2? "paper" : "scissors"; 

            let result = playerOne === computer ? "Tie Game!" : playerOne === "rock" && computer === "paper"?  `Player One : ${playerOne} \n Computer: ${computer} \n Computer wins !. `: playerOne ==="paper" && computer === "scissors"? `Player One : ${playerOne} \n Computer: ${computer} \n Computer wins !. ` : playerOne ==="scissors" && computer === "rock"?  `Player One : ${playerOne} \n Computer: ${computer} \n Computer wins !. `: `Player One : ${playerOne} \n Computer: ${computer} \n Player One wins !. `;

            alert(result);

            let playAgain = confirm("Play Again ? ");
            playAgain ? location.reload() : alert("Ok Thanks for Playing .. ");
        }
        else{
            alert("You didnt enter rock, paper or scissors");
        }
    }
    else{
        alert("I guess you chnaged your mind.. May be next time!")
    }
}
else{
    alert("Ok May be next time!");
}