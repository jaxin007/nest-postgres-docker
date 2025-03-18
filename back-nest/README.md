<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Project Description

This project is a backend service built with NestJS, designed to scrape data from different sources (e.g., Rozetka and Telemart), store the scraped data in a MySQL database, and cache response with product in Redis db for faster requests and better optimization. Expose it via RESTful APIs and uses swagger for better view scraping api. It uses Prisma for database operations and follows a modular structure for scalability and maintainability.

---

## Requirements

- Node.js (version >= 16)
- MySQL (version >= 8)
- Docker (if using containerization)
- NestJS CLI (for development)
- Redis (version >= 7.4)
- Prisma (version >= 6.2)
- Swagger (version >= 5)
- Elasticsearch (version >= 7.15)
- Kibana (version >= 7.15)
---

## Environment Configuration
Create a .env file in the root directory with the following variables:
 ```bash
PORT=3001

DB_HOST=db
DB_PORT=3306
DB_USER=root
DB_PASSWORD=rootpassword
DB_NAME=newschema

CORS_ORIGIN= http://localhost:3000

REDIS_HOST = redis
REDIS_PORT = 6379

DATABASE_URL= "mysql://root:rootpassword@db:3306/newschema"
```
## Running the Project
Locally
Install dependencies:

```bash
 npm install
```
Start the development server:

```bash
 npm run prisgen
```
Generate Prisma Client and update his type

##
##

__Attention!!! if you want start it on local machine__

```bash
 npm run start:dev
```
The server will be available at http://localhost:3001.

## With Docker

Ensure Docker is installed and running.

Create a docker-compose.yml file (if not already created).

Build and start the container:

```bash
 docker-compose up --build
```

## Prisma Migrations

If u want create new migration in Prisma:

Firstly u must change database host in DATABASE_URL .env file

```bash
 DATABASE_URL= "mysql://root:rootpassword@db:3306/newschema"  
```

TO

```bash
 DATABASE_URL= "mysql://root:rootpassword@localhost:3306/newschema"
```

and start only db container in docker

after u can  change module in  schema.prisma and make migrations

If u change module in schema prisma u must write this comand

```bash
 npx prisma migrate dev --name your_name_prisma_migration
```
And press "y" button for make migration

After this complitet  u must write this comand for generate Prisma Client

```bash
   npm run prisgen
```

Atention!!!

dont forget add migration to git if u see what she doesn`t added

And change u DATABASE_URL back

```bash
 DATABASE_URL= "mysql://root:rootpassword@db:3306/newschema"
```

## Common Commands

Start in development mode:

```bash
 npm run start:dev
```

Build for production:

```bash
 npm run build
```

Run the built application:

```bash
 npm run start:prod
```

## Swagger

```bash
 http://localhost:3001/api-docs/#
```

## Elasticsearch

```bash
 http://localhost:9200/
```

## Kibana

```bash
 http://localhost:5601/
```