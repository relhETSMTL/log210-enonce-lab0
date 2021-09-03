import 'jest-extended';
import { readFileSync } from 'fs';
const path = require('path');

const indexPugFilename = path.join('views', 'index.pug')
const contentIndex = readFileSync(indexPugFilename, 'utf-8');
const classementPugFilename = path.join('views', 'classement.pug')
const contentClassement = readFileSync(classementPugFilename, 'utf-8');

describe('views/index.pug', () => {
  it("should contain button#redemarrer Redémarrer", async () => {
    expect(contentIndex).toInclude("button#redemarrer Redémarrer");
  });

  it("should contain button#classement Classement", async () => {
    expect(contentIndex).toInclude("button#classement Classement");
  });

});

describe('views/classement.pug', () => {

  it("should contain button.home Accueil", async () => {
    expect(contentClassement).toInclude("button#home Accueil");
  });

});
