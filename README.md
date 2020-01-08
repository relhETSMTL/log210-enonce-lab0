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

### 0. vous familiariser avec le projet actuel;

- [ ] jeter un oeil sur la [documentation du squelette](ReadMeSquelette.md)
- [ ] installer node.js sur votre machine
- [ ] cloner le code sur votre machine
- [ ] faire un build du code
- [ ] exécuter les tests
- [ ] exécuter le serveur sur localhost
- [ ] exécuter l'application avec un browser moderne

> Note: il est fortement recommandé de faire un commit (et push) du code (au moins) à la fin de chaque étape à partir de maintenant.

### 1. actualiser la documentation de la fonctionnalité;

La documentation des fonctionnalités se trouve dans le fichier ReadMe.md. Dans cette étape, vous devez:

- [ ] ajouter le cas d'utilisation (texte) 
- [ ] ajouter le cas d'utilisation [au modèle UML](docs/dcu.puml) (PlantUML)

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
