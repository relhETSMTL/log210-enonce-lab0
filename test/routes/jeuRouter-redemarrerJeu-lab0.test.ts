// Vous devez insérer les nouveaux tests ici
import { assert } from 'console';
import supertest from 'supertest';
import 'jest-extended';
import { Joueur } from '../../src/core/joueur';
import { JeuDeDes } from '../../src/core/jeuDeDes';
import app from '../../src/app';

const request = supertest(app);

describe('redemarrerJeu.test.ts', () => {
  it("should implement test", async () => {
    throw new Error("Ce test n'a pas été défini")
  });
});

// Creation des joueurs
let joueur1
let joueur2

beforeAll(async () => {
  joueur1 = new Joueur('yvan');
  joueur2 = new Joueur('roberto');
});

// New test suite
describe ('GET /api/v1/jeu/redemarrerJeu',  () => {

  // scenario principal
  it('scénario principal', async () => {
    const response = await request.get('/api/v1/jeu/redemarrerJeu');
    const resultat = JSON.parse(response.body.resultat);
    expect(response.status).toBe(200);  // status
    expect(response.type).toBe("application/json"); // type de response
  });

  // post condition, le nombre de joueurs egal a 0
  it('validation de la postcondition', async () => {
    // obtien la reponse de l'appel
    const response = await request.get('/api/v1/jeu/redemarrerJeu');
    expect(response.status).toBe(200);  // response correcte
    expect(response.type).toBe("application/json"); // response retourne a json

    let controller: JeuDeDes;
    controller = new JeuDeDes();
    controller.joueurs
    // const resultat = JSON.parse(response.body.resultat);
    // methode joueurs()
  });


});



// let controller: JeuDeDes;
//  beforeEach(async () => {
//    controller = new JeuDeDes();
//  });

// Note: Exactement au debut, donc on peut creer l'object jdd ici.
// let jdd: JeuDeDes;
// beforeEach(async () => {
//   jdd = new JeuDeDes();
// });

// it(`devrait n'avoir aucun joueur au début`, async () => {
//   expect(jdd.joueurs).toEqual("[]")
// });