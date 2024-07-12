FROM node:18.16-alpine
WORKDIR /app-backend
COPY package*.json .
RUN npm install
COPY . .
# Compila o TypeScript para JavaScript
RUN npm run build

# Gera os arquivos necessários com o Prisma
RUN npm run pre-start

EXPOSE 3333

CMD ["npm", "start"]
