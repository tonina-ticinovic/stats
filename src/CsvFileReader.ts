import * as fs from 'fs';

export class CsvFileReader {
  constructor(public filename: string) {}

  data: string[][] = [];

  read(): void {
    this.data = fs
      .readFileSync(this.filename, { encoding: 'utf-8' })
      .split('\n')
      .map((row) => row.split(','));
  }
}
