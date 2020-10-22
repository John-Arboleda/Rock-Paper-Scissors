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

let s = 0, p = 0, r = 0;
let pcPlay = () => {
    let a = Math.random().toFixed(4);
    if (a < 1/3){
        s++;
        return "scissors";
    } else if (a < 2/3) {
        r++;
        return "rock";
    } else {
        p++;
        return "paper";
    }
}

let i = 1;

while (i <= 10000){
    pcPlay();
    i++;
}

console.log(
    "scissors = " + s,
    "rock = " + r,
    "paper = " + p
)



