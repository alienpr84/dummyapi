FROM node:18-alpine
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
EXPOSE 5000
CMD ["npm", "run", "dev"]