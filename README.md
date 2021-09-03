# LOG210 - Lab 0 - Tutoriel sur les technologies

Cet exercice, sous forme de tutoriel, a l'objectif de vous apprendre les technologies utilisées pour le laboratoire de LOG210.
Pour atteindre ce but, on vous propose d'ajouter une fonctionnalité au **Jeu de Dés**, un squelette de code que vous trouverez dans ce dépôt et que votre vrai projet de LOG210 doit suivre.
Le squelette est une application minimaliste qui permet de connecter plusieurs technologies (interface utilisateur, serveur web avec couches logicielles, etc.).
En apprenant avec le squelette, vous pouvez aller plus vite, sans nécessairement tout comprendre au début.
De plus, le squelette contient des technologies suffisantes pour réaliser votre projet en équipe, ce qui vous permet de vous concentrer sur la méthodologie d'analyse et de conception qui est le sujet principal de LOG210.

> C'est un travail individuel, dans un dépôt privé, pour que chaque personne dans le cours puisse apprendre et contribuer efficacement dans son équipe. ⚠️Puisque les points pour ce laboratoire sont dans le volet de travail de nature individuelle, **l'évaluation de ce travail va déterminer en partie si vous passez le double seuil.** Alors chaque point est très important!

## Préalables

Dans les cours préalables à LOG210, vous devriez avoir déjà vu:

- Les dépôts de code source en git (ici, c'est GitHub)
- La programmation orientée objet (ici, c'est TypeScript)
- Les tests (ici, c'est Jest et SuperTest)

### Date de remise

La date de remise du rapport et du code est **avant minuit le jour de la séance 02 de laboratoire.**
Notez que le calendrier des séances est différent pour chaque groupe-cours.
Vérifiez avec votre auxiliaire d'enseignement (chargé.e de laboratoire).

## Technologies vues dans cet exercice

Cet exercice permet de comprendre de manière basique les technologies suivantes:

- [Node.js](https://nodejs.org/en/docs/guides/)
  - [TypeScript](https://www.typescriptlang.org/docs/home.html)
  - [Express](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)
  - [Jest](https://jestjs.io/docs/en/api)
  - [SuperTest](https://github.com/visionmedia/supertest)
- [PUG](https://pugjs.org/api/getting-started.html) (anciennement Jade)

Le déploiement de la solution fonctionne comme le diagramme suivant:

![Déploiement](https://www.plantuml.com/plantuml/svg/NP0_Q_D03CRt-nGYapFuXRTZfsG88Hs2YHCwn1rKMtMljNM7JdOQIhzx5JUXqEKGpv_d1xT8Yg93txdqxZcYO0z9pntPAxx-uzIXZu69jPmYPjuvnw4Xc6rnz2qg3GAz2S8qWqy70BybE1ROKe8JFKCM9Op4o5fnOvfI7pjKkuh3UbunAJpWY6KjFkeJO8BrOUE-RhIIPBoW7crgQyg_jtJ3ULQI5wm9Tc5G0rfvEadS53WkO-nyZUe3LxpwY48fLPpjpv5-UFC9Q35t8HeOSl7jg-RPTGZkOLbiOBSgzy1-91pWlxjQUHDEd4_j1N5ZV_GD "Déploiement")

> :warning: Les bases de données et les cadriciels (Angular, React, etc.) sont des sujets traités dans d'autres cours des programmes de LOG et de GTI. Donc, vous ne pouvez pas utiliser ces technologies dans les laboratoires de LOG210.

Quant à la méthodologie de travail, ce tutoriel vous permettra aussi de savoir comment utiliser les outils suivants:

- [VisualStudio Code](https://code.visualstudio.com/docs/getstarted/introvideos)
- [PlantUML](http://plantuml.com/fr/guide) (pour les modèles UML)
- [GitHub Markdown](https://guides.github.com/features/mastering-markdown/) (pour la documentation)

## Objectif de l'exercice

Cet exercice va vous amener à travers des étapes à ajouter une nouvelle fonctionnalité au **Jeu de Dés**.  Vous devez réaliser le cas d'utilisation *Redémarrer* qui va simplement redémarrer le jeu.
Pour respecter le processus de génie logiciel enseigné dans LOG210, il faudra passer par les étapes suivantes:

- actualiser la documentation de la fonctionnalité (cas d'utilisation)
- actualiser des modèles de conception (diagrammes de séquence système et réalisations de cas d'utilisation);
- écrire des tests pour la fonctionnalité;
- écrire le code source;
- remettre (anglais *commit*) les changements.

Les auxiliaires d'enseignement seront disponibles pour vous aider si vous avez des questions.

## Étapes

Vous pouvez cocher chaque étape dans la liste suivante:

### 0. préparer votre machine pour ce tutoriel;

- [ ] jeter un œil sur la [documentation du squelette](docs/Squelette.md)

- [ ] [installer node.js](https://nodejs.org/en/download/) sur votre machine

- [ ] [installer VSCode](https://code.visualstudio.com/Download) sur votre machine

- [ ] [installer l'extension PlantUML dans VSCode](https://marketplace.visualstudio.com/items?itemName=jebbs.plantuml)

- [ ] configurer l'extension PlantUML pour utiliser plantuml.com comme serveur en ajoutant/modifiant les "User settings" en VSCode:

  ```json
      "plantuml.server": "https://www.plantuml.com/plantuml",
      "plantuml.render": "PlantUMLServer",
  ```

  (Si on a les droits d'administrateur Windows) installer [GraphViz](http://www.graphviz.org/download/) pour utiliser une copie locale de PlantUML plutôt que le serveur et configurer `"plantuml.render": "Local"` selon la [documentation](https://github.com/qjebbs/vscode-plantuml#about-render).

- [ ] [installer GitHub Desktop](https://help.github.com/en/desktop/getting-started-with-github-desktop/installing-github-desktop) sur votre machine

- [ ] [cloner le code de ce squelette](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) sur votre machine

  - :warning: Ne pas installer le squelette dans un dossier qui contient des espaces ou des accents

- [ ] faire un build du code

  - Ouvrir le projet en VSCode en cliquant sur le bouton **Open in Visual Studio Code**

  - Dans VSCode, ouvrir un terminal dans le menu **Terminal > New Terminal**

    > Sur Windows, utiliser `Node.js Command Prompt` si les étapes suivantes ne fonctionnent pas

  - Dans le terminal, taper `npm install` pour installer les bibliothèques node du projet (une fois seulement).

  - Dans le terminal, taper `npm run build` pour compiler le code source.

    Normalement, on devrait voir les messages comme:

    ```text
    ...
    [2:52:01 p.m.] Projects in this build: 
        * tsconfig.json

    [2:52:01 p.m.] Project 'tsconfig.json' is out of date because output file 'dist/app.js' does not exist

    [2:52:01 p.m.] Building project 'C:/Users/Moi/Documents/GitHub/S20203-LOG210-Lab0/tsconfig.json'
    ...
    ```

- [ ] exécuter les tests

  - Dans le terminal, taper `npm test` pour exécuter les tests du lab 0.

    Normalement, on devrait voir les messages comme:

    ```text
    ...
    Test Suites: 15 failed, 15 total
    Tests:       46 failed, 2 passed, 48 total
    Snapshots:   0 total
    Time:        6.253 s
    Ran all test suites matching /lab0.test.ts/i.
    ```

    Certains tests valident le contenu de vos fichiers (la documentation) et d'autres valident les fonctionnalités (la programmation).
    Puisque vous commencez le lab 0, c'est normal d'avoir beaucoup de tests "failed".
    Le but est de faire passer tous les tests au fur et à mesure que vous apprenez des aspects technologiques du laboratoire.

    Veuillez noter que pour les tests qui valident les fonctionnalités, vous devez avoir une couverture de test de 100% pour obtenir tous vos points.
    Vous devrez donc corriger deux issues avec `app.ts` et `jeuRouter.ts`.

    La rétroaction de ce laboratoire vient principalement de cette commande de test automatique.
    Vous devez poser des questions aux auxiliaires d'enseignement si vous avez besoin d'aide.

- [ ] exécuter le serveur sur localhost

  - Dans le terminal, `npm start`

- [ ] exécuter l'application avec un navigateur moderne à l'URL [http://localhost:3000](http://localhost:3000)

> Note: il est fortement recommandé de faire un commit (et push) du code (au moins) à la fin de chaque étape à partir de maintenant. Les auxiliaires d'enseignement auront accès à votre dépôt de code source et pourraient vous aider (surtout à distance) si votre code est synchronisé souvent avec le dépôt.

### 1. actualiser la documentation de la fonctionnalité;

La documentation des fonctionnalités se trouve dans le fichier [docs/Squelette.md](docs/Squelette.md). Dans cette étape, vous devez:

- [ ] dans le fichier `docs/Squelette.md` qui sert de documentation, ajouter les informations pour vous identifier dans la section **Identification de l'étudiant**.

- [ ] dans le fichier `docs/Squelette.md` qui sert de documentation, ajouter le cas d'utilisation *Redémarrer* (texte) juste après [le texte du cas d'utilisation *Jouer aux dés*](docs/Squelette.md#jouer-aux-dés):

  ```markdown
  #### Redémarrer

  1. Le Joueur demande à redémarrer l'application.
  2. Le Système termine tous les jeux en cours et redémarre l'application.
  ```

- [ ] ajouter le cas d'utilisation [au diagramme UML](docs/modeles/dcu.puml) (PlantUML)

  - installer l'extension [PlantUML](https://marketplace.visualstudio.com/items?itemName=jebbs.plantuml) dans VSCode

  - visionner [cette vidéo](https://www.youtube.com/watch?v=xkwJ9GwgZJU) (*activer les sous-titres en français*) pour savoir comment créer et modifier un diagramme PlantUML

  - modifier `docs/modeles/dcu.puml` pour inclure un nouveau cas d'utilisation `(Redémarrer) as R #powderblue` et le lien avec l'acteur `J -- R` comme dans l'exemple partiel suivant:

  ```text
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
  ![diagramme de cas d'utilisation](https://www.plantuml.com/plantuml/svg/NSjDQiCm48RXlKunk9jsuJjuxLMneVkfD7Q5zMD68neJSf_a7BvO94F0P3CCVC_R9K6Mx9roD0b81BRpdu2nJ5fi32ejDgp8w279vgXSjheMfsL5lU1Cum5gUDeCJPYTJ358G4_mGsmme48jaQ6FcJ839kXL3J7CZg0PjoJxtLC3LmNmMLL1-G9cVwIlWt_3nnh_3V6lorJHG6Nqo4nyYE4DzD2s9NjzWxgfZeB9tZq1 "diagramme de cas d'utilisation")

  <details>
     <summary>Facultatif : faire en sorte que la documentation soit correctement liée aux fichiers `.puml`</summary><p>

  *Question*: Comment faire en sorte que `docs/Squelette.md` affiche la version modifiée du fichier `docs/modeles/dcu.puml` après un *push* des fichiers vers GitHub?
  *Réponse*: Il faut modifier le markdown suivant dans `docs/Squelette.md`:

  ```markdown
  ### Diagramme de cas d’utilisation

  ![Diagramme de cas d'utilisation](http://www.plantuml.com/plantuml/proxy?cache=no&fmt=svg&src=https://raw.githubusercontent.com/profcfuhrmanets/log210-jeu-de-des-node-express-ts/master/docs/modeles/dcu.puml)
  ```

  La partie de l'URL `src=https://raw.githubusercontent.com/profcfuhrmanets/log210-jeu-de-des-node-express-ts/master/docs/modeles/dcu.puml` doit pointer sur le fichier dans *votre* dépôt plutôt que sur celui duquel ce projet a été copié.

  Pour obtenir l'URL "raw" d'un fichier sur GitHub, naviguez vers le fichier, cliquez sur le bouton **Raw**, puis copiez l'URL du navigateur. Finalement, cela doit être fait une seule fois pour chaque diagramme `.puml` et les changements vont suivre automatiquement dans la documentation. Cependant, il peut prendre quelques minutes avant que le cache du navigateur se rafraîchisse. Pour en savoir plus, lire [la question sur StackOverflow](https://stackoverflow.com/questions/32203610/how-to-integrate-uml-diagrams-into-gitlab-or-github).
  </details>

  <details>
     <summary>Facultatif : faire en sorte que la documentation soit correctement liée aux fichiers `.svg`</summary><p>

  *Question*: Comment faire en sorte que `Squelette.md` affiche la version modifiée du fichier `docs/modeles/dcu.puml` après un *push* des fichiers vers GitHub?
  *Réponse*: Il faut exporter les diagrammes puml à l'aide du menu contextuel  "Export current file diagrams" et modifier le markdown suivant dans `docs/Squelette.md`:

  ```markdown
  ### Diagramme de cas d’utilisation

  ![Diagramme de cas d'utilisation](docs/modeles/dcu/Diagramme%20de%20cas%20d'utilisation.svg)
  ```

  L'avantage de cette méthode est que votre documentation locale est immédiatement à jour.

  </p></details>

### 2. actualiser des modèles de conception (diagrammes de séquence système et réalisations de cas d'utilisation)

> Les modèles de conception guident l'implémentation. Vous aurez à revenir à cette section durant ce tutoriel.

- [ ] ajouter un nouveau DSS `docs/modeles/dss-redemarrerJeu.puml` pour le cas d'utilisation (PlantUML)
  
  Faire un diagramme en PlantUML qui ressemble à ceci:  
  ![DSS pour le scénario Redémarrer](https://www.plantuml.com/plantuml/svg/0/NOynQWD134NxEOLmvHGXlJ6B0waCQRAGNin-6v4TpKRI52RuFl4vzcAPf4c8Yjyy_d_euC4MhSp9tqGNDYxaSPdHqoJ_8nDEtEOuLGtb0dg5JQpyjult1isWZqJzdk7EPppESbRAq82bQmg9BdWQHrfgC_gMvVMcR59fByCBflLMs0osVv0XSOvgjDaTQqEp3R5JJbqNacLXZOx6YyVwMV03FUNxmMb7zZjqHDlU9Jf0f_xI5m00 "DSS pour le scénario Redémarrer")

- [ ] prendre connaissance des postconditions du contrat d'opération

  > Toutes les instances de Joueur en cours ont été supprimées.

- [ ] ajouter une nouvelle réalisation de cas d'utilisation (RDCU) `docs/modeles/rdcu-redemarrerJeu.puml` pour l'opération système `redemarrerJeu()` (PlantUML)

  Faire un diagramme en PlantUML qui ressemble à ceci:  
  ![RDCU pour redémarrerJeu](https://www.plantuml.com/plantuml/svg/0/RP31IWD138RlynIX5rkmBx38KkXwANXHzBINE9lMMMSoGoO3-aYz-mRxOiOAWk8bWVny-VzaLnL5MugklWOkA9YWwdiagnBy7sMY8xQenypAc0YUI2PaT1hKYFjX_mWbDm6XQJad524vK7C6Q_2X82kiEfiCD51T0LRmRjjxwBu8-W7M6yTP2IISNjJ4IZ4pxCrLbez8JKPUVszPpXMewiZnAZ_Ff23e0zFcj-MScq6r6_aEoys37SQdwyDbs5zIpCbvsFRMpSr7Gla_mkrR8L6t8vxiCPy0 "RDCU pour redémarrerJeu")

> À partir de maintenant, consultez le code existant pour vous aider à compléter les étapes

### 3. écrire des tests pour la fonctionnalité

- [ ] ajouter de nouveaux cas de tests pour Redémarrer (Jest/SuperTest)

  - ouvrir le fichier `test/routes/jeuRouter-redemarrerJeu.test.ts`

  - y créer une suite de tests nommée `'GET /api/v1/jeu/redemarrerJeu'` avec `describe`
  
    Tous les tests reliés au cas d'utilisation y seront contenus

  - y utiliser `beforeAll` pour créer deux joueurs avant l'exécution des tests

    Cette méthode s'exécutera avant tous les tests, pour satisfaire la précondition du cas d'utilisation (un joueur doit exister)

  - y créer un test afin de tester le scénario principal (succès) avec `it` et le nommer adéquatement

    Le test doit appeler la route `GET /api/v1/jeu/redemarrerJeu`, qui correspond à l'opération système `redemarrerJeu` du DSS. Puisque l'opération n'a aucun retour, le test doit uniquement valider le succès de l'opération, c'est-à-dire, que le code HTTP (`status`) est 200 et que la réponse est du `JSON`.

  - y créer un autre test pour valider la postcondition du contrat d'opération

    Le test doit vérifier qu'il n'y a plus de joueurs.

- [ ] vérifier que les tests ne passent pas (Jest/SuperTest)

  `npm test` va indiquer `XX failed`

  Cela est normal, car nous avons écrit plusieurs tests avant d'avoir écrit les fonctionnalités, selon la pratique *Développement piloté par les tests*.

### 4. écrire le code source;

- [ ] ajouter l'opération système `redemarrerJeu` dans le contrôleur GRASP `src/core/jeuDeDes.ts` (TypeScript)

  Cette méthode correspond à l'opération système (unique) définie dans le diagramme de séquence système (DSS).

- [ ] coder la RDCU de `redemarrerJeu` (TypeScript)

  Retourner voir le diagramme qui a été créé précédemment

- [ ] ajouter une nouvelle route, dans `src/routes/jeuRouter.ts` (Express)

  - ajouter la fonction `redemarrerJeu`, juste avant la fonction `init()`

    Elle doit :
    - avoir les mêmes paramètres que les autres fonctions.
    - appeler l'opération système créée précédemment
    - afficher à l'utilisateur (`flash`) que l'application redémarre
    - retourner à l'utilisateur l'état du système, le code HTTP 200 (Ok) et le `message` : `'Success'`

  - ajouter, à la fin de la fonction `init()`, une route `GET /redemarrerJeu` pour lier l'URI à `redemarrerJeu`

    Il s'agit d'une *définition de [route](http://expressjs.com/en/guide/routing.html)* dans *Express*. Lorsqu'il y aura une requête HTTP `GET` avec `api/v1/jeu/redemarrerJeu`, la fonction `redemarrerJeu` dans la même classe sera appelée (*callback*). Cette fonction est aussi appelée un *route handler* en anglais.

- [ ] faire un build (Node.js)

  `npm run build` devrait passer sans erreurs. Si vous avez des erreurs, essayer de lire et de comprendre pourquoi. Si vous êtes bloqués pendant plus de 5 minutes, demandez de l'aide à un auxiliaire d'enseignement.

- [ ] vérifier que les tests de fonctionnalités passent (Node.js)

  `npm run test-squelette` devrait indiquer que tous les tests passent.

- [ ] ajouter le bouton dans `views/index.pug` (PugJS.org)

  > Facultatif : pour une explication de PUG (anciennement Jade) avec Express, il y a [cette vidéo](https://www.youtube.com/watch?v=DSp9ExFw3Ig).

  Dans `views/index.pug` après le texte ici, ajouter la ligne `button#redemarrer Redémarrer` (:warning: *attention au niveau d'indentation*):

  ```PUG
      ul.entries
        each joueur in joueurs
          li.joueur
            -var nom = joueur.nom;
            strong(id=nom) #{nom}
            = ' '
            | tentatives: #{joueur.lancers}, réussites: #{joueur.lancersGagnes}
            = ' '
            button.lancer(id=nom) Lancer dés
            = ' '
            button.terminer(id=nom) Terminer
        else
          li
            em Pas de joueurs encore.

      button#redemarrer Redémarrer
  ```

- [ ] ajouter le JavaScript pour le bouton afin d'invoquer le nouveau service

  Dans `public/lib/main.js` on trouve le code pour les boutons. Après la logique pour traiter le clic sur le bouton *Démarrer* (`demarrer.addEventListener("click", function(){...});`, ajouter une nouvelle logique pour le bouton *Redémarrer* qui fait un `GET` sur `/api/v1/jeu/redemarrerJeu`:

  ```JavaScript
  document.getElementById("redemarrer").addEventListener("click", function ()
  {
      fetch("/api/v1/jeu/redemarrerJeu")
      .then(function()
      {
          location.reload();
      });
  });
  ```

  Refaire le build et relancer le serveur dans le terminal. Recharger la page web et vérifier que le bouton fonctionne comme il le faut en créant une nouvelle partie pour un joueur et ensuite cliquant sur *Redémarrer*.

### 5. Fonctionnalité: Afficher classement sur nouvelle page

- [ ] Ajouter un second bouton qui se nommera "Classement" et qui utilisera le id "#classement" pour faire un `GET` sur `/api/v1/jeu/afficherClassement`. Cependant, ce bouton devra afficher le contenu utilisant le fichier `classement.pug`. Voici une solution pour l'EventListener à définir dans `main.js`:
  ```javascript
      this.document.getElementById("classement").addEventListener("click", function () {
          fetch("/api/v1/jeu/afficherClassement")
          .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              // Promesse : résultat se rend 
              // dans "then" plus bas, 
              // devenant "html"
              return response.text();
            })
            .then(html => {
              document.open();
              document.write(html);
              document.close();
            })
            .catch(error => {
              console.error('There has been a problem with your fetch operation:', error);
            });
      });
  ```

  - [ ] Astuce: la logique dans le *route handler* pour `/api/v1/jeu/afficherClassement` est quasiment la même que pour la route `/` définie dans `src/app.ts`.
  - [ ] Voir l'explication dans les commentaires de `classement.pug` pour savoir comment afficher le classement.
- [ ] Dans cette page uniquement, ajouter un bouton "Accueil" pour retourner à la page `index.pug`. Ce bouton devra utiliser le id "button#home"
- [ ] Puisqu'il s'agit simplement d'une nouvelle vue sur les informations déjà présentes dans le système, on ne doit pas faire une RDCU. C'est-à-dire qu'on ne modifie pas l'état des objets du domaine.

### 6. Documenter les classes logicielles

- [ ] Générer un diagramme de classes pour la solution avec le script `npm run uml-classes-puml` qui utilise l'outil `tplant`. Par défaut, le diagramme est placé dans le répertoire `docs/modeles`. Chaque fois que vous modifiez votre code source, c'est une bonne idée d'actualiser ce diagramme avec ce script.
- [ ] Visualiser le fichier généré `App.puml` dans VS Code avec l'extension de PlantUML. Comprendre le design du jeu de dés.
- [ ] Intégrer ce diagramme dans votre rapport `Squelette.md` dans une section nommée **Diagramme de classes logicielles**.

### 7. Pratiquer ce qui a été appris

- [ ] Modifier le cas d'utilisation *Jouer aux dés* pour que le joueur lance **trois** dés plutôt que deux et la condition pour gagner soit que le *total soit inférieur ou égal à 10*. Il faut passer par toutes les étapes, y compris modifier le MDD, les contrats, les RDCU, les tests et le code. Cependant, cette fois-ci vous devez vous débrouiller sans aide.

### 8. Remise du rapport en format PDF

- [ ] Assurez-vous de générer une version PDF de votre fichier `docs/Squelette.md` nommé `docs/lab0.pdf`
  > un menu contextuel devrait vous permettre de réaliser cette tâche dans Visual Studio Code si vous avez installé les bonnes extensions.

### 9. Faire face aux parasites et aux mollassons dans une équipe

1. Lisez le texte [Faire face aux parasites et aux mollassons dans une équipe](https://docs.google.com/document/d/e/2PACX-1vRWTtdcGjUg34gqB6CW_EMt0H28Cgunq09_7HxMUoTLGERjUcQXBHlrYyB76PYJGjtaoYJhhsHS1Tjj/pub)
2. Écrivez une réponse dans le fichier `docs/experience-parasites-mollassons.md` du dépôt.

### 10. Vérifier la correction automatique

Cet exercice sera noté quasi automatiquement lorsque vous transférez votre code dans GitHub Classrooms.
Les tests associés à ce projet permettent de vérifier que la majorité des modifications que vous deviez réaliser ont été faites.
Il y a deux volets de la correction automatique avec les tests automatiques:

- Documentation: `npm test`
- Fonctionnalités: `npm run test-squelette`

Assurez-vous qu'aucun test n'est en échec et que la couverture de test est de 100% pour la partie fonctionnalité.

**Important:**
La seule rétroaction pour ce laboratoire est à travers les commandes ci-dessus.
Vous n'aurez pas de rétroaction individuelle après la date de remise, alors si vous avez des tests qui ne passent pas ou des questions concernant les technologies, **c'est votre responsabilité de demander de l'aide de l'auxiliaire de laboratoire avant la remise.**

### 11. Remettre (anglais *commit*) tous les changements

- [ ] À l'aide de Zoom ou de tout autre outil d'enregistrement vidéo, enregistrez une démonstration du fonctionnement de l'interface utilisateur avec au moins 2 joueurs.  Sauvegarder le résultat dans le fichier **demo.mp4** et placer ce fichier dans le même répertoire que README.md.
- [ ] faire une remise de la solution du projet (GitHub) incluant votre réponse dans `docs/experience-parasites-mollassons.md`

**Félicitations!** Vous avez réussi les défis technologiques nécessaires pour être performant dans les laboratoires de LOG210! Ce tutoriel vous sera sûrement utile pendant le développement du projet itératif à suivre, car il y a des [liens pour la documentation des technologies différentes](#technologies-vues-dans-cet-exercice).

  > Si vous avez terminé rapidement grâce à votre expérience, pensez à aider vos coéquipiers qui pourraient toujours avoir des questions. Mais ne faites pas le travail à leur place, car le but est que toute l'équipe soit performante sur le plan technologique. Cherchez à augmenter le facteur de bus (voir les notes de cours pour l'explication) de l'équipe! En plus, le mentorat est une caractéristique importante du leadership. 

## Calcul de la note

Le calcul de la note du laboratoire se fait à partir des résultats des tests automatiques, selon l'équation suivante:

- e: 10 points si vous avez complété un texte d'au moins 300 mots dans `docs/experience-parasites-mollassons.md` (sinon 0 point)
- b: nombre de nouveaux boutons fonctionnels (max 3)
- v: nombre de tests valides ("passed")
- d: nombre de tests déjà valides au début du projet (actuellement 2)
- t: nombre total de tests

<img src="https://latex.codecogs.com/png.latex?%5Cdpi%7B300%7D%20%5Cbg_white%20%5Ctextrm%7BNote%20finale%7D%20%3D%20%5Cfrac%7Be%20&plus;%202b%20&plus;%20v%20-%20d%7D%7B10%20&plus;%206%20&plus;%20t%20-d%7D%20100" width="400">
