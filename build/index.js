"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MatchResult_1 = require("./MatchResult");
const matchesFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
matchesFileReader.read();
const matches = matchesFileReader.data;
let manUnitedWins = 0;
for (let match of matches) {
    if ((match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) ||
        (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin)) {
        manUnitedWins++;
    }
}
// games that man united won as home or away team
console.log(`Manchester United won ${manUnitedWins} matches`);
