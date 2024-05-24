let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// computer choice
const genCompChoice = () => {
    // Rock, Paper Scisscors
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

// when game is draw both of the computer and user choices.
const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
}

// Show winner both of any one
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats Computer ${compChoice}`;
        msg.style.backgroundColor = "green"
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost. Computer ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    //we generate a random choice from a computer then choose a win computer or win user and update a score board.

    //Computer Choices
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            // paper, scissors
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            // scissors, rock
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            // paper, rock
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

// Selected choice for a users or event from a user and computer
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})