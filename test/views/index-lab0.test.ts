import 'jest-extended';
import { readFileSync } from 'fs';
const path = require('path');

const indexPugFilename = path.join('views', 'index.pug')
const contentIndex = readFileSync(indexPugFilename, 'utf-8');
const classementPugFilename = path.join('views', 'classement.pug')
const contentClassement = readFileSync(classementPugFilename, 'utf-8');

describe('views/index.pug', () => {
  it("should contain button.redemarrer Redémarrer", async () => {
    expect((contentIndex.indexOf("button#redemarrer Redémarrer") > -1) ||
    (contentIndex.indexOf("button.redemarrer Redémarrer") > -1)).toBeTrue();
  });

  it("should contain button.classement Classement", async () => {
    expect((contentIndex.indexOf("button#classement Classement") > -1) ||
    (contentIndex.indexOf("button.classement Classement") > -1)).toBeTrue();
  });

});

describe('views/classement.pug', () => {

  it("should contain button.home Accueil", async () => {
    expect((contentClassement.indexOf("button#home Accueil") > -1) ||
    (contentClassement.indexOf("button.home Accueil") > -1)).toBeTrue();
  });

});
