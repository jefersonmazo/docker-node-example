#Elegir la base
FROM node:alpine
#Directorio sobre el que trabajamos
WORKDIR /app
# Copiar la aplicación
COPY . /app/

COPY db.config.js app/config/db.config.js

RUN npm install

EXPOSE 8081

CMD ["npm","start"]