import 'jest-extended';
import { readFileSync } from 'fs';
const path = require('path');

let content = ""
beforeAll(async () => {
  const filename = path.join('views', 'index.pug')
  content = readFileSync(filename, 'utf-8');
});

describe('views/index.pug', () => {
  it("should contain button.redemarrer Redémarrer", async () => {
    expect((content.indexOf("button#redemarrer Redémarrer") > -1) ||
    (content.indexOf("button.redemarrer Redémarrer") > -1)).toBeTrue();
  });

});
