/* I. Section */

function getPlayerChoice(input) {

    /*let userInput = prompt("Provide Rock, paper or scissors");

    userInput = userInput.toLowerCase(); */
    
    return input;
}

function getComputerChoice() {

    let list = ["rock", "paper", "scissors"];
    let answer = list[Math.floor(Math.random()*list.length)];

    return answer;
}

/* II. Section   */


function playRound(user, computer) {

    userInput = user;
    
    answer = computer();

    if( userInput == answer) {

        return "Draw"
    }

    else if(userInput == "rock" &&  answer == "paper") {

        return "You lose. Paper beats rock"
    }

    else if(userInput == "paper" &&  answer == "rock") {

        return "You win. Paper beats rock"     
    }

    else if(userInput == "rock" &&  answer == "scissors") {

        return "You win. Rock beats scissors"
    }

    else if(userInput == "scissors" &&  answer == "rock") {

        return "You lose. Rock beats scissors"
    }

    else if(userInput == "scissors" &&  answer == "paper") {

        return "You win. Scissors beats paper"
    }

    else if(userInput == "paper" &&  answer == "scissors") {

        return "You lose. Scissors beats paper"
    }

}


/* III. Section 

function game() {

    for(let i = 0; i < 5; i++){

        console.log(playRound(getPlayerChoice,getComputerChoice));
    }  

}

*/

const board = document.querySelector(".roundBoard");
const btn = document.querySelectorAll(".buttons");
const uScore = document.querySelector("#userScore");
const cScore = document.querySelector('#computerScore');

function showMe(e){
    console.log(e.composedPath());
    return e.composedPath()[0].innerText.toLowerCase();

}

function updateScore(){
    if(board.textContent.split(" ").includes("win.") == true){
        uScore.textContent ++;
        if( uScore.textContent == 5){
            board.textContent = "user wins. please refresh the page to play again."

        }
    }
    else if(board.textContent.split(" ").includes("lose.") == true){
        cScore.textContent++;
        if( cScore.textContent == 5){
            board.textContent = "computer wins. please refresh the page to play again."
        }
    }

}

    btn.forEach(a => a.addEventListener('click', function(e){
        if(uScore.textContent > 4 || cScore.textContent > 4){
            return
        }
        board.textContent = playRound(showMe(e),getComputerChoice);
    }));

    btn.forEach(a => a.addEventListener('click', function(){
        if(uScore.textContent > 4 || cScore.textContent > 4){
            return
        }
        updateScore();
    }));






