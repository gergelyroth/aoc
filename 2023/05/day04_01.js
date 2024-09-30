const fs = require("fs");

const data = fs.readFileSync('./input.txt', 'utf8').trim().split("\n").map(line => {
    const [cardNr, value] = line.split(/: +/);
    const [winningNr, playingNr] = value.split(/ \| +/);
    const winningNrs = winningNr.split(/ +/);
    const playingNrs = playingNr.split(/ +/);

    let match = 0;

    for (const winning of winningNrs) {
        for (const playing of playingNrs) {
            if (winning === playing) {
                match++;
            }
        }
    }
    return Math.floor(2 ** (match - 1));
}).reduce((a, b) => a + b, 0);

console.log(data);
