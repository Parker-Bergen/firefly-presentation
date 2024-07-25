
FROM node:latest as base

WORKDIR /opt/app

COPY  package*.json ./

RUN yarn

COPY . .

# RUN yarn build

ENTRYPOINT [ "yarn", "dev"]
