let results = {
    scissors: {
        scissors: 0,
        rock: -1,
        paper: 1
    },
    rock: {
        scissors: 1,
        rock: 0,
        paper: -1
    },
    paper: {
        scissors: -1,
        rock: 1,
        paper: 0
    }
}

let pcPlay = () => {
    let a = Math.random().toFixed(4);
    if (a < 1/3){
        return "scissors";
    } else if (a < 2/3) {
        return "rock";
    } else {
        return "paper";
    }
}

let scoreYou = 0, scorePC = 0;

let game = (choice) => {
    let pcChoice = pcPlay();
    let showChoices = "Your choice = " + choice + "\n" + "PC choice = " + pcChoice + "\n"
    if (results[choice][pcChoice] == 1){
        scoreYou++;
        return showChoices + "You win";
    } else if (results[choice][pcChoice] == -1){
        scorePC++;
        return showChoices + "You lose";
    } else {
        return showChoices + "It's a tie";
    }
}

let i = 0;
while (i < 100){
    console.log(game(pcPlay()));
    console.log("Score: You = " + scoreYou + " PC " + scorePC + "\n");
    i++;
}