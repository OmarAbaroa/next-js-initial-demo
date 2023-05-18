# FROM alpine:3.17

# ENV NODE_VERSION 18.16.0

FROM node:18-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN yarn install

COPY . /app

RUN yarn build

# USER prod-user

EXPOSE 3000

CMD [ "yarn", "start" ]