import 'jest-extended';
import { readFileSync } from 'fs';
const path = require('path');

let content = ""
beforeAll(async () => {
  const filename = path.join('views', 'index.pug')
  content = readFileSync(filename, 'utf-8');
});

describe('views/index.pug', () => {
  it("should contain button#redemarrerJeuNouvellePage Redémarrer Nouvelle Page", async () => {
    expect(content).toInclude("button#redemarrerJeuNouvellePage Redémarrer Nouvelle Page");
  });

});
