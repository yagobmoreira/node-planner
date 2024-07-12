# Ambiente com node 18
FROM node:18.16-alpine
# Cria a pasta /app e entra nela
WORKDIR /app-frontend
# Copiar package
COPY package*.json .
# na build -> RUN
RUN npm clean-install
# Instalar dependências (evitando conflitos)
COPY . .
# COPY . /app
# Copiar restante dos arquivos (componentes, css, etc)

EXPOSE 5173

# na inicialização -> CMD
CMD ["npm", "run", "dev"]

