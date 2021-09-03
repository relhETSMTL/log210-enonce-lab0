import 'jest-extended';
import { readFileSync } from 'fs';
const path = require('path');

let content = ""
beforeAll(async () => {
  const filename = path.join('public', 'lib', 'main.js')
  content = readFileSync(filename, 'utf-8');
});

describe('public/lib/main.js', () => {
  it("should contain $('button.redemarrer').click(function () {", async () => {
    // try-catch to do logical OR
    try {
      expect(content).toInclude("$('button.redemarrerJeu').click(function () {");
    } catch {
      expect(content).toInclude("$(\"button.redemarrerJeu\").click(function () {");
    }
  });
  // try-catch to do logical OR
  it("should contain $.get('/api/v1/jeu/redemarrerJeu'", async () => {
    try {
      expect(content).toInclude("$.get('/api/v1/jeu/redemarrerJeu'");
    } catch {
      expect(content).toInclude("$.get(\"/api/v1/jeu/redemarrerJeu\"");
    }
  });
});

