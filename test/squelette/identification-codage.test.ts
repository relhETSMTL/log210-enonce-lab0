import 'jest-extended';
import { readFileSync } from 'fs';

let content = ""
beforeAll(async () => {
  content = readFileSync('Squelette.md', 'utf-8');
});

describe('README identification', () => {
  it('should replace Entrer votre nom', async () => {
    expect(content).not.toInclude("Entrer votre nom");
  });

  it('should replace Entrer votre courriel', async () => {
    expect(content).not.toInclude("Entrer votre courriel");
  });

  it('should replace Entrer votre code moodle obtenu à partir de Signets', async () => {
    expect(content).not.toInclude("Entrer votre code moodle obtenu à partir de Signets");
  });

  it("should replace Entrer l'identifiant de votre compte github", async () => {
    expect(content).not.toInclude("Entrer l'identifiant de votre compte github");
  });
});


