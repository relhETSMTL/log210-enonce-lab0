import 'jest-extended';
import { readFileSync } from 'fs';
const path = require('path');

let content = ""
beforeAll(async () => {
  const filename = path.join('public', 'lib', 'main.js')
  content = readFileSync(filename, 'utf-8');
});

describe('public/lib/main.js', () => {
  it("devrait utiliser fetch pour le bouton redémarrer", async () => {
    expect(content).toInclude("redemarrer.addEventListener(\"click\", function () {");
    expect(content).toInclude("fetch(\"/api/v1/jeu/redemarrerJeu\", {");
  });
  it("devrait utiliser fetch pour le bouton redémarrerJeuNouvellePage", async () => {
    expect(content).toInclude("redemarrerJeuNouvellePage.addEventListener(\"click\", function () {");
    expect(content).toInclude("fetch(\"/api/v1/jeu/redemarrerJeuNouvellePage\")");
  });

});


