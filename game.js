/* I. Section */

function getPlayerChoice() {

    let userInput = prompt("Provide Rock, paper or scissors");

    userInput = userInput.toLowerCase();
    
    return userInput;
}

function getComputerChoice() {

    let list = ["rock", "paper", "scissors"];
    let answer = list[Math.floor(Math.random()*list.length)];

    return answer;
}

/* II. Section   */


function playRound(user, computer) {

    userInput = user();
    
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


// III. Section 

function game() {

    for(let i = 0; i < 5; i++){

        console.log(playRound(getPlayerChoice,getComputerChoice));
    }  

}


    
