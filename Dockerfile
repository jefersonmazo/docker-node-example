FROM node:alpine

WORKDIR /app

COPY . /app/

COPY db.config.js app/config/db.config.js

RUN npm install

EXPOSE 8081

CMD ["npm","start"]
