FROM node:10.16.0 as client-builder
WORKDIR /usr/src
COPY ./yarn.lock /usr/src/yarn.lock
COPY ./package.json /usr/src/package.json
RUN yarn install
COPY . /usr/src
