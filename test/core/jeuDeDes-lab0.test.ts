import 'jest-extended';
import { readFileSync } from 'fs';
const path = require('path');

let content = ""
beforeAll(async () => {
  const filename = path.join('src', 'core', 'jeuDeDes.ts')
  content = readFileSync(filename, 'utf-8');
});

describe('src/core/jeuDeDes.ts', () => {
  it("should contain redemarrerJeu() {", async () => {
    expect(content).toInclude("redemarrerJeu() {");
  });

  it("should contain this._joueurs.clear()", async () => {
    expect(content).toInclude("this._joueurs.clear()");
  });

  it("should contain this._d3 = new De()", async () => {
    expect(content).toInclude("this._d3 = new De()");
  });
  it("should contain this._d3.brasser()", async () => {
    expect(content).toInclude("this._d3.brasser()");
  });
  it("should contain const v3 = this._d3.valeur", async () => {
    expect(content).toInclude("const v3 = this._d3.valeur");
  });
  it("should contain const somme = v1 + v2 + v3", async () => {
    expect(content).toInclude("const somme = v1 + v2 + v3");
  });
  it("should contain <= 10", async () => {
    expect(content).toInclude("<= 10");
  });
  it("should contain v3: this._d3.valeur", async () => {
    expect(content).toInclude("v3: this._d3.valeur");
  });
});


