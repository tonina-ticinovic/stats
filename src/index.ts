import { CsvFileReader } from './CsvFileReader';

const matchesFileReader = new CsvFileReader('football.csv');
matchesFileReader.read();
const matches = matchesFileReader.data;

enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

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
