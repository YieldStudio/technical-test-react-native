# Test technique - React Native

## Bienvenue 👋

L’objectif est simple : évaluer vos compétences en **architecture frontend**, en **gestion de données hors-ligne**, et en **développement frontend** autour d'un projet de galerie d'images.

👉 Ce test est conçu pour être réalisé en **une demi-journée maximum**.

👉 Une fois terminé, merci de le remettre dans un **dépôt GitHub privé** et de nous y inviter.

## Starter kit & Librairies conseillées

Pour gagner du temps, un **starter kit** vous est fourni avec :
- [Expo Router](https://docs.expo.dev/router/introduction/) pour la navigation
- [Tailwind](https://tailwindcss.com/) et [twrnc](https://github.com/jaredh159/tailwind-react-native-classnames) pour le style
- [React Hook Form](https://react-hook-form.com/) pour les formulaires
- [Reanimated](https://docs.swmansion.com/react-native-reanimated/) pour les finitions
- [MirageJS](https://miragejs.com/) pour la Fake API
- [React Query](https://tanstack.com/query/latest) pour les appels API
- [Expo Secure Store](https://docs.expo.dev/versions/latest/sdk/securestore/) et [Async Storage](https://react-native-async-storage.github.io/async-storage/) pour le stockage local
- [Zod](https://zod.dev/) pour les validations
- [Zustand](https://zustand-demo.pmnd.rs/) pour la gestion de state
- [Flash List](https://shopify.github.io/flash-list/) pour la gestion de listes
- [Action Sheet](https://github.com/expo/react-native-action-sheet) pour les actions contextuelles

👉 Vous êtes libre d’utiliser **les librairies de votre choix**, tant que l’architecture et les fonctionnalités demandées sont respectées.

## Brief

L'objectif de ce test est de produire rapidement une petite application permettant à l'utilisateur de se créer une galerie de photo tout en communiquant avec une Fake API.

Sur cette application, l'utilisateur pourra donc lister, consulter, ajouter et supprimer des photos de sa galerie.

L'application devra pouvoir être utilisable hors ligne et garder en cache les photos de l'utilisateur. L'ajout et la suppression doivent également être disponibles hors ligne et se synchroniser au moment où le réseau est de nouveau disponible.

L'application doit être utilisable en format portait et paysage

## Livrables attendus

- Repo GitHub privé contenant :
  - [FEEDBACK.md](http://FEEDBACK.md) (explications de l'architecture, des choix techniques, avis sur le test et commentaires).
  - Les modifications effectuées sur le code.
- Commits progressifs.
- Invitez-nous en tant que collaborateurs sur le dépôt privé.

## Barème (100 pts)

- Finitions (35)
- Gestion du offline (25)
- Qualité du code (15)
- Mise en place de la Fake API (15)
- Tests (5)
- Doc (5)

## Getting Started

1. Cloner le repo :

   ```bash
   git clone https://github.com/YieldStudio/technical-test-react-native.git
   cd technical-test-react-native
   ```
2. Lancer le projet :

   ```bash
   yarn install
   yarn start
   ```
3. Commencer à implémenter les fonctionnalités demandées.
4. Créer un **dépôt privé** sur GitHub depuis votre compte.
5. Changer l’origine Git pour pointer vers votre dépôt privé :

   ```bash
   git remote remove origin
   git remote add origin git@github.com:<votre-compte>/<votre-repo-prive>.git

   ```
6. Pousser votre travail :

   ```bash
   git push -u origin main

   ```
7. Invitez-nous en tant que collaborateurs sur ce dépôt privé (vous recevrez nos identifiants GitHub par email).
