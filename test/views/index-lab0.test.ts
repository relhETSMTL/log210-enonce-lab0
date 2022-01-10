import 'jest-extended';
import { readFileSync } from 'fs';
const path = require('path');

const indexPugFilename = path.join('views', 'index.pug')
const contentIndex = readFileSync(indexPugFilename, 'utf-8');
const classementPugFilename = path.join('views', 'classement.pug')
const contentClassement = readFileSync(classementPugFilename, 'utf-8');

describe('views/index.pug', () => {
  it("should contain button#redemarrer Redémarrer", () => {
    expect(contentIndex.includes("button#redemarrer Redémarrer")).toBeTruthy();
  });

  it("should contain button#classement Classement", () => {
    expect(contentIndex.includes("button#classement Classement")).toBeTruthy();
  });

});

describe('views/classement.pug', () => {

  it("should contain button.home Accueil", () => {
    expect(contentClassement.includes("button#home Accueil")).toBeTruthy();
  });

});
