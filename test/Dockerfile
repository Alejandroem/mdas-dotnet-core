FROM node:8

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY test.js /app

ENTRYPOINT ["node", "index.js"]