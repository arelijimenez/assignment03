let num = 0;
while (num < 100) {
    if(num % 3 === 0 && num % 5 === 0) {
        console.log (num + " - Marco! Polo!");
    } else if (num % 5 == 0) {
        console.log (num + " - Polo!");
    } else if (num % 3 == 0) {
        console.log (num + " - Marco!");
    }
    num++;
}