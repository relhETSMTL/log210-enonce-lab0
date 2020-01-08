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

- Node.js
  - TypeScript
  - Express
  - Mocha/Chai
- VisualStudio Code
- PlantUML
- GitHub

## Objectif de l'exercice

Cet exercice va vous amener à traver les étapes pour ajouter une nouvelle fonctionnalité au **Jeu de Dés** : le cas d'utilisation *Redémarrer* qui va simplement redémarrer le jeu. 
Pour respecter le processus enseigné dans LOG210, il faudra passer par les étapes suivantes:

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

- [ ] ajouter un nouveau DSS pour le cas d'utilisation (PlantUML)
- [ ] ajouter une nouvelle réalisation de cas d'utilisation (RDCU) (PlantUML)

### 3. écrire des tests pour la fonctionnalité;

- [ ] ajouter un nouveau test dans `test/jeu.test.ts` (Mocha/Chai) 
- [ ] valider que les tests ne passent pas (Mocha/Chai)

### 4. écrire le code source;

- [ ] ajouter une nouvelle route dans `src/routes/JeuRouter.ts` (Express)
- [ ] ajouter l'opération système dans le contrôleur GRASP `src/core/JeuDeDes.ts` (TypeScript)
- [ ] coder la RDCU dans `src/core/JeuDeDes.ts` (TypeScript)
- [ ] faire un build (Node.js)
- [ ] vérifier que les tests passent (Node.js)

### 5. remettre (anglais *commit*) les changements.

- [ ] faire une remise de la solution du projet (GitHub)
