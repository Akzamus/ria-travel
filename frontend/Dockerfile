FROM node:14-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g serve

RUN npm install --production

COPY . .

RUN npm run build

EXPOSE 3000