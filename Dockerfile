FROM cypress/base:12

COPY ./cypress ./cypress
COPY ./public ./public
COPY ./src ./src
COPY ./cypress.json ./cypress.json
COPY ./db.json ./db.json
COPY ./package-lock.json ./package-lock.json
COPY ./package.json ./package.json
COPY ./routes.json ./routes.json

RUN npm install
RUN npm run build:and:test