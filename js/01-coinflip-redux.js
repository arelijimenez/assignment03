let coinFlip;
let choice = parseInt(prompt("How many times do you want to flip the coin?"));
for (i = 0; i < choice; i++) {
    let randomNum = Math.round(Math.random());
    //console.log(randomNum);
    coinFlip = randomNum;
    if (coinFlip === 0) {
        console.log("Heads");
    }
    else if (coinFlip === 1) {
        console.log("Tails");
    }
}