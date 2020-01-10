# LOG210 - Lab 1 - Tutoriel sur les technologies

Cet exercice, sous forme de tutoriel, a l'objectif de vous apprendre les technologies utilisées pour le laboratoire de LOG210. 
Pour atteindre ce but, on vous propose d'ajouter une fonctionnalité au **Jeu de Dés** que vous trouverez dans ce dépôt, qui sert de squelette que votre vrai projet de LOG210 doit suivre.

> C'est un travail individuel, dans un dépôt privé, pour que chaque personne dans le cours puisse apprendre et contribuer efficacement dans son équipe.

Cet exercice sera noté selon la grille suivante:

| Grille de correction  | 2 | 1 | 0 |
|---|---|---|---|
| Complétude  |   |   |   |
| Correction  |   |   |   |
| Respect du délai  |   |   |   |

## Préalables

Dans les cours préalalbes à LOG210, vous devriez avoir déjà vu:

- Les dépôts de code source en git (ici, c'est GitHub)
- La programmation orientée objet (ici, c'est TypeScript)
- Les test unitaires (ici, c'est Mocha/Chai)

## Technologies vues dans cet exercice

Cet exercice permet de comprendre de manière basique les technologies suivantes:

- [Node.js](https://nodejs.org/en/docs/guides/)
  - [TypeScript](https://www.typescriptlang.org/docs/home.html)
  - [Express](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)
  - [Mocha/Chai](https://mochajs.org/api/)
- [PUG](https://pugjs.org/api/getting-started.html) (anciennement Jade)

Le déploiement de la solution fonctionne comme le diagramme suivant:

![Déploiement](https://www.plantuml.com/plantuml/svg/0/NP0nJyD038Nt-nLMftO84enCBL9LbG5LJIk6Xi4aRZb8V2UVar0X_ZjEQ1dmOFdytlCdtJmfYhPDxTA7vuY23IGzrsHTVFbFAKCJ0nDhFbfCl7EEGqKmUP3G9n9ex2LC4_XoOFMNWCC6JvIWfrUOHWaTCR8MNDbEgOargasR_MfMC2ayOeTvAJxg2s22rNxjlg-edAIZLk3PJZtPvkOzNN6UbUI89S4sj6h08JoC96uq71Onrhv4zO4BNdv6ePGAdkxEaNvvin5eDZSG3GoP-DERPjFB8RY7nMODssM-0_OTOGktxY9bLUWv6zDpuie-w0S0 "Déploiement")

Quant à la méthodologie de travail, ce tutoriel vous permettra aussi de savoir comment utiliser les outils suivants:

- [VisualStudio Code](https://code.visualstudio.com/docs/getstarted/introvideos)
- [PlantUML](http://plantuml.com/fr/guide) (pour les modèles UML)
- [GitHub Markdown](https://guides.github.com/features/mastering-markdown/) (pour la documentation)

## Objectif de l'exercice

Cet exercice va vous amener à travers des étapes pour ajouter une nouvelle fonctionnalité au **Jeu de Dés** : le cas d'utilisation *Redémarrer* qui va simplement redémarrer le jeu.
Pour respecter le processus de génie logiciel enseigné dans LOG210, il faudra passer par les étapes suivantes:

- actualiser la documentation de la fonctionnalité (cas d'utilisation)
- actualiser des modèles de conception (diagrammes de séquence système et réalisations de cas d'utilisation);
- écrire des tests pour la fonctionnalité;
- écrire le code source;
- remettre (anglais *commit*) les changements.

Les chargés de laboratoire seront disponibles pour vous aider si vous avez des questions.

## Étapes

Vous pouvez cochez chaque étape dans la liste suivante:

### 0. préparer votre machine pour ce tutoriel;

- [ ] jeter un oeil sur la [documentation du squelette](ReadMeSquelette.md)
- [ ] [installer node.js](https://nodejs.org/en/download/) sur votre machine
- [ ] [installer VSCode](https://code.visualstudio.com/Download) sur votre machine
- [ ] [installer GitHub Desktop](https://help.github.com/en/desktop/getting-started-with-github-desktop/installing-github-desktop) sur votre machine
- [ ] [cloner le code de ce squelette](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) sur votre machine
- [ ] faire un build du code
  - Ouvrir le projet en VSCode en cliquant sur le bouton **Open in Visual Studio Code**
  - Dans VSCode, ouvrir un terminal dans le menu **Terminal > New Terminal**
  - Dans le terminal, taper `npm install` pour installer les bibliothèques node du projet (une fois seulement).
  - Dans le terminal, taper `npm run-script build` pour compiler le code source.
    Normalement, on devrait voir les messages comme:
    ```
    ...
    [23:43:06] Finished 'jsonAssets' after 25 ms
    [23:43:06] Finished 'cssAssets' after 45 ms
    [23:43:06] Finished 'jsAssets' after 46 ms
    [23:43:08] Finished 'scripts' after 1.62 s
    [23:43:08] Finished 'build' after 1.62 s
    ```
- [ ] exécuter les tests
  - Dans le terminal, taper `npm test` pour exécuter les tests.
   Normalement, on devrait voir les messages comme:
    ```
    ...
    GET /api/v1/jeu/terminerJeu/Jean-Marc 200 0.434 ms - 86
    √ responds with successful call for player Jean-Marc
    GET /api/v1/jeu/terminerJeu/Jean-Marc 404 0.288 ms - 51
    √ Call responds with bad request when player does not exist Jean-Marc
    
    
      27 passing (542ms)    
    ```  
- [ ] exécuter le serveur sur localhost
  - Dans le terminal, `npm start`
- [ ] exécuter l'application avec un browser moderne à l'URL [http://localhost:3000](http://localhost:3000)

> Note: il est fortement recommandé de faire un commit (et push) du code (au moins) à la fin de chaque étape à partir de maintenant.

### 1. actualiser la documentation de la fonctionnalité;

La documentation des fonctionnalités se trouve dans le fichier ReadMe.md. Dans cette étape, vous devez:

- [ ] dans le fichier `ReadMeSquelette.md` qui sert de documentation, ajouter le cas d'utilisation *Redémarrer* (texte) juste après [le texte du cas d'utilisation *Jouer aux dés*](ReadMeSquelette.md#jouer-aux-dés):
  ```markdown
  #### Redémarrer

  1. Le Joueur demande à redémarrer l'application.
  1. Le Système termine tous les jeux en cours et redémarre l'application.
  ```
- [ ] ajouter le cas d'utilisation [au diagramme UML](docs/dcu.puml) (PlantUML)
  - installer l'extension [PlantUML](https://marketplace.visualstudio.com/items?itemName=jebbs.plantuml) dans VSCode
  - visionner [cette vidéo](https://www.youtube.com/watch?v=xkwJ9GwgZJU) (*activer les sous-titres en français*) pour savoir comment créer et modifier un diagramme PlantUML
  - modifier `docs/dcu.puml` pour inclure un nouveau cas d'utilisation `(Redémarrer) as R #powderblue` et le lien avec l'acteur `J -- R` comme dans l'exemple partiel suivant:
  ```
  ...
  rectangle "Système" {
    (Jouer aux dés) as JP #powderblue
    (Redémarrer) as R #powderblue
    J -- JP
    J -- R
  }
  ...
  ```

  Vous devriez voir un diagramme comme ceci:  
  ![dcu](https://www.plantuml.com/plantuml/svg/0/NOz1YiCm303lVeLeBxk7_g7dd9OKzgxQIjRKbeCiquRI_xJlwCUg19OjUp62cP7HlYgAjfnSea512qWSVnH25F8Q2xjwYZoXO8QgSo9x9Vgr-2CJ-XEET5Y59NnZHsEZbCR1brG4L92h8U9tAz20BUbGM1apmJT9G4Q7NgtfIgCcW1Kwjwn77ksZpM6k-hndsi3L0Nmibadj0k7vg9-h_WNRgPm3oJ4rMgIU36OK8LcD_f_GmMvdsU_KkvlR4mUxzmK0 "dcu")

  <details>
     <summary>Facultatif : faire en sorte que la documentation soit correctement liée aux fichiers `.puml`</summary><p>

  *Question*: Comment faire en sorte que `ReadMeSquelette.md` affiche la version modifiée du fichier `docs/dcu.puml` après un *push* des fichiers vers GitHub?  
  *Réponse*: Il faut modifier le markdown suivant dans `ReadMeSquelette.md`:

  ```markdown
  ### Diagramme de cas d’utilisation

  ![Diagramme de cas d'utilisation](http://www.plantuml.com/plantuml/proxy?cache=no&fmt=svg&src=https://raw.githubusercontent.com/profcfuhrmanets/log210-jeu-de-des-node-express-ts/master/docs/dcu.puml)
  ```

  La partie de l'URL `src=https://raw.githubusercontent.com/profcfuhrmanets/log210-jeu-de-des-node-express-ts/master/docs/dcu.puml` doit pointer sur le fichier dans *votre* dépôt plutôt que sur celui duquel ce projet a été copié. 

  Pour obtenir l'URL "raw" d'un fichier sur GitHub, navigez vers le fichier, cliquez sur le bouton **Raw**, puis copiez l'URL du browser. Finalement, cela doit être fait une seule fois pour chaque diagramme `.puml` et les changements vont suivre automatiquement dans la documentation. Cependant, il peut prendre quelques minutes avant que le cache du browser se rafraichisse. Pour en savoir plus, lire [la question sur StackOverflow](https://stackoverflow.com/questions/32203610/how-to-integrate-uml-diagrams-into-gitlab-or-github).

</p></details>

### 2. actualiser des modèles de conception (diagrammes de séquence système et réalisations de cas d'utilisation)

- [ ] ajouter un nouveau DSS `docs/dss-redemarrer.puml` pour le cas d'utilisation (PlantUML)
  
  Faire un diagramme en PlantUML qui ressemble à ceci:  
  ![DSS pour le scénario Redémarrer](https://www.plantuml.com/plantuml/svg/0/NOynQWD134NxEOLmvHGXlJ6B0waCQRAGNin-6v4TpKRI52RuFl4vzcAPf4c8Yjyy_d_euC4MhSp9tqGNDYxaSPdHqoJ_8nDEtEOuLGtb0dg5JQpyjult1isWZqJzdk7EPppESbRAq82bQmg9BdWQHrfgC_gMvVMcR59fByCBflLMs0osVv0XSOvgjDaTQqEp3R5JJbqNacLXZOx6YyVwMV03FUNxmMb7zZjqHDlU9Jf0f_xI5m00 "DSS pour le scénario Redémarrer")

- [ ] ajouter une nouvelle réalisation de cas d'utilisation (RDCU) `docs/rdcu-redemarrer.puml` pour l'opération système `redemarrerJeu()` (PlantUML)

  Faire un diagramme en PlantUML qui ressemble à ceci:  
  ![RDCU pour redémarrerJeu](https://www.plantuml.com/plantuml/svg/0/RP31IWD138RlynIX5rkmBx38KkXwANXHzBINE9lMMMSoGoO3-aYz-mRxOiOAWk8bWVny-VzaLnL5MugklWOkA9YWwdiagnBy7sMY8xQenypAc0YUI2PaT1hKYFjX_mWbDm6XQJad524vK7C6Q_2X82kiEfiCD51T0LRmRjjxwBu8-W7M6yTP2IISNjJ4IZ4pxCrLbez8JKPUVszPpXMewiZnAZ_Ff23e0zFcj-MScq6r6_aEoys37SQdwyDbs5zIpCbvsFRMpSr7Gla_mkrR8L6t8vxiCPy0 "RDCU pour redémarrerJeu")

### 3. écrire des tests pour la fonctionnalité;

- [ ] ajouter un nouveau test dans `test/jeu.test.ts` (Mocha/Chai)

  À la fin du fichier `test/jeu.test.ts` ajouter les tests suivants pour valider la nouvelle fonctionnalité:

  ```TypeScript
  describe('GET /api/v1/jeu/redemarrerJeu', () => {

    // create a new player
    it('responds with successful first call for player ' + testNom1, () => {
      return chai.request(app).get('/api/v1/jeu/demarrerJeu/' + testNom1)
        .then(response => {
          expect(response.status).to.equal(201);
          expect(response).to.be.json;
          expect(response.body.nom).to.equal(testNom1);
        });
    });

    it('responds with successful call', () => {
      return chai.request(app).get('/api/v1/jeu/redemarrerJeu')
        .then(response => {
          expect(response.status).to.equal(200);
          expect(response).to.be.json;
        });
    });

    it('Call responds with bad request because player should no longer exist ' + testNom1, () => {
      return chai.request(app).get('/api/v1/jeu/terminerJeu/' + testNom1)
        .then(
          response => {
            expect(response).to.have.status(404);
            expect(response).to.be.json;
            expect(response.body.error).to.include("n'existe pas");
            expect(response.body.error).to.include(testNom1);
          }
        )
    });

  });
  ```

- [ ] valider que les tests ne passent pas (Mocha/Chai)

  `npm test` va indiquer `2 failing`: 

  ```
  1) GET /api/v1/jeu/redemarrerJeu
       responds with successful call:

      AssertionError: expected 404 to equal 200
  ```
  et
  ```
  2) GET /api/v1/jeu/redemarrerJeu
       Call responds with bad request because player should no longer exist Jean-Marc:
     AssertionError: expected { Object (domain, _events, ...) } to have status code 404 but got 200
  ```
  Cela est normal, car nous avons écrit un test avant d'avoir écrit la fonctionnalité, selon la pratique *Développement piloté par les tests*.

### 4. écrire le code source;

- [ ] ajouter une nouvelle route dans `src/routes/JeuRouter.ts` (Express)
  
  À la fin de la fonction `init()` ajouter la ligne suivante pour faire un bind de l'URI à une fonction TypeScript:

  ```TypeScript
    init() {
      ...
      this.router.get('/redemarrerJeu', this.redemarrerJeu.bind(this));
    }
  ```
  
  Dans le même fichier, juste avant la fonction `init()`, ajouter la fonction `redemarrerJeu`:

  ```TypeScript
    /**
     * redémarrer le jeu
     */
    public redemarrerJeu(req: Request, res: Response, next: NextFunction) {
      try {
        // Invoquer l'opération système (du DSS) dans le contrôleur GRASP
        this.jeu.redemarrerJeu();
        (req as any).flash('Redémarrage de l\'application!');
        res.status(200)
          .send({
            message: 'Success',
            status: res.status,
          });
      } catch (error) {
        throw error;
      }
    }
  ```

- [ ] ajouter l'opération système dans le contrôleur GRASP `src/core/JeuDeDes.ts` (TypeScript)
  
  L'opération système est une méthode dans le contrôleur GRASP: 

  ```TypeScript
    public redemarrerJeu() {
    }
  ```

- [ ] coder la RDCU dans `src/core/JeuDeDes.ts` (TypeScript)

  Selon la RDCU, le contrôleur GRASP (JeuDeDes) va simplement invoquer la méthode `clear()` sur le `Map` des `joueurs`. Ajouter donc la ligne dans l'opération système:
  
  ```TypeScript
    public redemarrerJeu() {
        this.joueurs.clear();
    }
  ```

- [ ] faire un build (Node.js)

  `npm run-script build` devrait passer sans erreurs. Si vous avez des erreurs, essayer de lire et de comprendre pourquoi. Si vous êtes bloqués pendant plus de 5 minutes, demandez de l'aide à un chargé de laboratoire.

- [ ] vérifier que les tests passent (Node.js)

  `npm test` devrait indiquer que tous les tests passent.

- [ ] ajouter le bouton dans `views/index.pug` (PugJS.org)

  > Facultatif : pour une explication de PUG (anciennement Jade) avec Express, il y a [cette vidéo](https://www.youtube.com/watch?v=DSp9ExFw3Ig).

  Dans `views/index.pug` après le texte ici, ajouter la ligne `button.redemarrer Redémarrer` (:warning: *attention au niveau d'indentation*):

  ```PUG
      form#formNouveauJoueur.form-group(action='javascript:void(0);')
        dl
          dt Nom du nouveau joueur
          dd
            input.form-control.col-sm-4(name='nom' type='text')
        button.demarrer Démarrer

      button.redemarrer Redémarrer
  ```

- [ ] ajouter le JavaScript pour le bouton afin d'invoquer le nouveau service

  Dans `public/lib/main.js` on trouve le code pour les boutons. Après la logique pour traiter le clique sur le bouton *Démarrer* (`$("button.demarrer").click(function () {...}`, ajouter une nouvelle logique pour le bouton *Redémarrer* qui fait un `GET` sur `/api/v1/jeu/redemarrerJeu`:

  ```JavaScript
      $("button.redemarrer").click(function () {
          $.get("/api/v1/jeu/redemarrerJeu",
              function (data, status) {
                  window.location.reload(true);
              });
      });
  ```

  Refaire le build et relancer le serveur dans le terminal (voir les commandes en haut). Recharger la page web et vérifier que le bouton fonctionne comme il le faut en créant une nouvelle partie pour un joueur et ensuite cliquant sur *Redémarrer*. 

### 5. remettre (anglais *commit*) les changements.

- [ ] faire une remise de la solution du projet (GitHub)

  :clap: **Félicitations!** Vous avez réussi les défis technologiques nécessaires pour être performant dans les laboratoires de LOG210! Ce tutoriel vous sera sûrement utile pendant le développement du projet itératif à suivre, car il y a des [liens pour la documentation des technologies différentes](#technologies-vues-dans-cet-exercice). 

  > Si vous avez terminé rapidement grâce à votre expérience, pensez à aider vos coéquipiers qui pourraient toujours avoir des questions. Mais ne faites pas le travail à leur place, car le but est que toute l'équipe soit performante sur le plan technologique. En plus, cela augmente le facteur de bus :oncoming_bus: ! Le mentorat est bénéfique aussi pour vous, car c'est une caractéristique importante du leadership. :wink: