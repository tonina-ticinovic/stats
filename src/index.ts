import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

// const matchesFileReader = new CsvFileReader('football.csv');
// matchesFileReader.read();
// const matches = matchesFileReader.data;

const matchReader = new MatchReader('football.csv');
matchReader.read();
const matches = matchReader.data;

let manUnitedWins = 0;

for (let match of matches) {
  if (
    (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) ||
    (match[2] === 'Man United' && match[5] === MatchResult.AwayWin)
  ) {
    manUnitedWins++;
  }
}

// games that man united won as home or away team
console.log(`Manchester United won ${manUnitedWins} matches`);
