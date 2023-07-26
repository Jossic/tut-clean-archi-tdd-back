# tut-clean-archi-tdd-back


<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Teach Us Tech !

Le but étant de présenter rapidement les avantages de la clean architecture et le TDD, les règles de gestion sont relativement simple afin de pouvoir avancer le plus vite possible et prendre le moins de temps possible.

Le but de ce live coding est de nous permettre de développer la feature des messages posthumes

## Règles de gestion

Un utilisateur peu à tout moment ajouter un message posthume sur son espace client. Le message est ajouté losque celui-ci rempli toutes les conditions.

Voici les critères du message :
- Le message doit comporter un titre qui comporte minimum 5 caractères
- Le message doit comporter un texte qui comporte minimum 20 caractères
- Le message doit contenir un ou plusieurs destinataires (email)
  - Les adresses mails doivent être valide.


(Si on a le temps, possibilité d'ajouter un message audio ou vidéo)
(Si on a le temps, possibilité d'ajouter un fichier au message texte)
  
Exemple de refacto : certains users s'amusent à mettre que des espaces pour le titre, il faut l'éviter.

## User Story - Créer un message

En tant que **User**,

Je souhaite **ajouter un message posthume** pour le moment venu.


## User Story - Lister les messages posthume d'un utilisateur
En tant que **User**,

Je souhaite **lister tous mes messages posthumes**


## User Story - Modifier un message d'un utilisateur
En tant que **User**,

Je souhaite **modifier un message que j'ai rédigé**



## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm start

# watch mode
$ pnpm start:dev

# production mode
$ pnpm start:prod
```

## Test

```bash
# unit tests
$ pnpm test
# unit tests with watch
$ pnpm test:watch

# integration tests
$ pnpm test:integration
# integration tests with watch
$ pnpm test:integration:watch

# e2e tests
$ pnpm test:e2e
# e2e tests with watch
$ pnpm test:e2e:watch

# all tests
$ pnpm test:all
# all tests with watch
$ pnpm test:e2e:watch
# all tests with coverage
$ pnpm test:all:coverage
```
