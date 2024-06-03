
FROM node:latest as base

WORKDIR /opt/api

COPY  package*.json ./

RUN yarn install

COPY . .

RUN yarn build

ENTRYPOINT [ "yarn", "start"]
