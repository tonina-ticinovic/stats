"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const MatchResult_1 = require("./MatchResult");
// const matchesFileReader = new CsvFileReader('football.csv');
// matchesFileReader.read();
// const matches = matchesFileReader.data;
const matchReader = new MatchReader_1.MatchReader('football.csv');
matchReader.read();
const matches = matchReader.data;
let manUnitedWins = 0;
for (let match of matches) {
    if ((match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) ||
        (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin)) {
        manUnitedWins++;
    }
}
// games that man united won as home or away team
console.log(`Manchester United won ${manUnitedWins} matches`);
