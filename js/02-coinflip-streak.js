let coinFlip;
do {
    let randomNum = Math.round(Math.random());
    //console.log(randomNum);
    coinFlip = randomNum;
    if (coinFlip === 0) {
        console.log("Heads");
    }
    else if (coinFlip === 1) {
        console.log("Tails");
    }
} while (coinFlip != 1);