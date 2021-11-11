import 'jest-extended';
import path from 'path';
import { readFileSync } from 'fs';

let content = ""
beforeAll(async () => {
  const filename = path.join('docs', 'Squelette.md');
  content = readFileSync(filename, 'utf-8');
});

describe('README identification', () => {
  it('devrait trouver votre nom', async () => {
    expect(content).not.toInclude("Entrer votre nom");
  });

  it('devrait trouver votre courriel', async () => {
    expect(content).not.toInclude("Entrer votre courriel");
  });

  it('devrait trouver Votre code moodle', async () => {
    expect(content).not.toInclude("Entrer votre code moodle obtenu à partir de Signets");
  });

  it("devrait trouver votre compte github", async () => {
    expect(content).not.toInclude("Entrer l'identifiant de votre compte github");
  });
});
