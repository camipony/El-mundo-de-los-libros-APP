FROM node:16

WORKDIR /user_services

COPY package*.json ./

RUN npm install
COPY . .

EXPOSE 8081
CMD [ "node", "index.js" ]