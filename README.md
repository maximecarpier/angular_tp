# angular_tp

## Utilisation

Normalement un ```npm install```suffit pour installer ce qu'il manque

### Fonctionnement

Vous pouvez rentrer le nom du pkemon de votre choix dans la barre de recherhe puis un fois selectionné en cliquant sur "Entrer" vous allez voir sa fiche apparaitre sous forme d'un dialogue

Si vous n'avez pas de pokemon en tête vous avez juste à cliquer sur "afficher 20 pokemons" pour que la page vous en affiche 20 (les 20 premier) puis si vous cliquez à nouveau ça sera les 20 suivants etc..

## Difficultées rencontrées.

### Installation (ngprime et angular matérial)

Comme vous avez pu le voir j'ai décidé d'utiliser angular material. Cependant ce n'a pas été une mince affaire. En effet, l'installation de ngPrime que je voualis utilisé au début n'a pas abouti, je me suis donc penché sur angular material. Ce ne fut pas facile non plus. Malgrés le fait de suivre à la lettre les étapes indiquées ça n'a pas fonctinné pendant un bon moment. J'ai donc décidé de recréer un nouveau fichier pokedex et recommencer le projet depuis le début (je n'étais pas très avancé). 
A partir de là j'ai réussit à faire fonctionner angular material. Donc malgré une installation fastidieuse et mistérieusement loupée dans un premier temps ensuite l'ajout de nouveau module s'est très bien déroulé.

### Asynchronisme

J'ai également eu beaucoup de problèmes concernant le fait que le langage typescript soit asynchrone. En effet cela ne facilitait pas les requêtes HTTP utilisant le service. Le fait d'utiliser des informations de plusieurs adresse differentes demandait alors de faire appel plusieurs fois au service http qui, lui rend des observables. Le traitement des observables se faisait par moment en décalé ce qui me donnait par exemple la mauvaise image pour un pokemon ou alors les mauvais types ... De plus il me reste un problème que je n'ai pas su résoudre dans mon projet final. C'est le fait que lorsque l'on clique trop rapidement sur le bouton "afficher 20 pokemons" les types des pokemons ne sont pas corrects. Je pense pouvoir expliquer ce problème quiest lié au fait que l'on ne laisse pas le temps au images de charger cependant les types sont déjà chargé et s'acumulent donc à chaque clic "trop" rapide. J'entends par trop rapide, un clique qui se porduit lorsque les 20 pokemons ne sont pas chargés.

### Plantage

Ceci est un problème indépendant d'angular mais je pense utile de le notifier. Mon ordinateur (ainsi que le cloud) a planté vers la fin du pojet et m'a fait perdre tout ce que j'avais fait. Evidemment recommencer ne m'a pas prit autant de temps que la première fois car je connaissait à présent les principes mais réécrire tout le code fut assez chronophage.

### CSS

Dernier problème : l'organisation.
Connaissant un peu plus Vuejs et vuetify, j'ai remarqué que l'on utilisait pas beaucoup le css mais plutot que les propriétés des balises de trouvaient la plupart du temps dans dans les paramètres de balise.
En angular c'est un peu différent car le CSS à l'état pur est plus souvent utilisé et seulement le CSS est indiqué dans les balises. J'ai donc eu beaucoup de mal à parvenir au résultat que vous allez voir car malgré une utilisation facile des list-grid, le dimensionnement des "card" a été un réel désastre. J'avais beau mettre des propriété dans tout les sens j'avais l'impression que rien ne changeait.
Vers la fin j'ai donc compris l'utilisation du css et j'ai donc pu rendre une liste de card plutot présentable.
