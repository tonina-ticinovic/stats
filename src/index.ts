import fs from 'fs';

const matches = fs
  .readFileSync('football.csv', { encoding: 'utf-8' })
  .split('\n')
  .map((row) => row.split(','));

let manUnitedWins = 0;

for (let match of matches) {
  if (
    (match[1] === 'Man United' && match[5] === 'H') ||
    (match[2] === 'Man United' && match[5] === 'A')
  ) {
    manUnitedWins++;
  }
}

// games that man united won as home or away team
console.log(`Manchester United won ${manUnitedWins} matches`);
