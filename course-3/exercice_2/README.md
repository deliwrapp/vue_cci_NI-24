# APP Bootstap Vue Example

** Créer Un formulaire et l'exploiter avec VModel **
- Créer un Formulaire de Création et de Gestion de Catégorie
- Mettez en place les Data
- Reliez les inputs aux data avec la directive v-model

** Ajouter un bouton submit et la gestion du formulaire **
- un bouton
- le formulaire et sont event submit.prevent
- une methode submitCategoryForm pour traiter le formulaire et ajouter la nouvelle catégorie au tableau des catégories.

** Créer un composant CategoriesTable.vue **
- Mettre en place un tableau avec l'utilisation de la directive v-for
- Prendre modèle sur ProductTable.vue
- Bind du tableau categories de App.vue sur CategoriesTable

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
