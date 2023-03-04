FROM node:18-alpine
WORKDIR /middle.messenger.praktikum.yandex
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["node", "server.js"]
