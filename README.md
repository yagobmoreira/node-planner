<h1 align="center">
  Plann.er
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/yagobmoreira/node-planner">
  <img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/yagobmoreira/node-planner" />
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/yagobmoreira/node-planner">
</p>

## 💻 Sobre

Este é o repositório do **Plann.er**, que é um sistema de planejamento de viagens, onde é possível montar planos de viagens e convidar participantes. É possível cadastrar atividades, adicionar links úteis sobre a viagem, entre outras funcionalidades.

Essa aplicação foi desenvolvida durante o evento **Next Level Week Journey** da [Rocketseat](https://www.rocketseat.com.br/) utilizando principalmente tecnologias como `Node`, `TypeScript`, `Fastify`, `Prisma`, `React`, `Tailwind` e `Docker`.

## ⚙ Instalação

### 📝 Requisitos

Antes de baixar o projeto é necessário ter as seguintes ferramentas já instaladas:

* [Git](https://git-scm.com)
* [Node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/pt/) ou [yarn](https://yarnpkg.com/)

Utilize uma ferramenta como [Insomnia](https://insomnia.rest/), ou outra similar, para testar as rotas da aplicação sem o frontend.

### Configuração

Passo a passo para clonar e executar a aplicação na sua máquina:

1. Clone o repositório (Utilizar Link SSH).

2. Acesse a pasta do projeto:
```bash
  cd node-planner
```
3. Instale as dependências do projeto:
```bash
  npm run install:apps
```
4. Execute o Back-end da aplicação em modo desenvolvimento:
```bash
  npm run dev:backend
```
5. Execute o Front-end da aplicação em modo desenvolvimento:
```bash
  npm run dev:frontend
```
>Nota: Por padrão o Front-end estará rodando na porta 5173, o Back-end na porta 3333

#### Configuração com Docker
1. Clone o repositório (Utilizar Link SSH).

2. Acesse a pasta do projeto:
```bash
  cd node-planner
```
3. Executar os containers Docker
```sh
  npm run compose:up
```

### Documentação

Após o servidor back-end estar rodando, é possível acessar a documentação da api, através da rota `/docs` na aplicação. Caso tenha utilizado a porta padrão, `3333`, o endereço será: `http://localhost:3333/docs`


#### Realização de Requisições

Este arquivo contém uma coleção de endpoints para a plataforma Insomnia, que podem ser importados
diretamente para a aplicação, simplificando o processo de teste e interação com a API.

- [Insomnia_planner.json](./Insomnia_planner.json)

## 🛠 Tecnologias

As seguintes libs foram usadas na construção do projeto:

### Backend
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Fastify](https://fastify.dev/)**
- **[Prisma](https://www.prisma.io/)**
- **[Zod](https://zod.dev/)**
- **[Nodemailer](https://nodemailer.com/)**
- **[DayJS](https://day.js.org/)**

### Frontend
- **[React](https://react.dev/)**
- **[ReactRouter](https://reactrouter.com/en/main)**
- **[TailwindCSS](https://tailwindcss.com/)**
- **[Tailwind-Variants](https://www.tailwind-variants.org/)**
- **[React-Day-Picker](https://daypicker.dev/)**
- **[LucideReact](https://lucide.dev/guide/packages/lucide-react)**
- **[Axios](https://axios-http.com/)**



