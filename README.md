# CS Challenge

## Descrição do Projeto

Esse projeto foi realizado para testar meus conhecimentos utilizando Styled Components para estilização: https://styled-components.com/ e TypeScript com a biblioteca React.Js e foi baseado no seguinte desafio: [https://github.com/1STi/desafio-frontend](https://github.com/concretesolutions/recrutamento-fe).

### Proposta:

Implementar uma aplicação client-side, que consulte a API do GitHub e mostre os repositórios mais populares de um determinado usuário.

## Tecnologias usadas:

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="40" height="40" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" width="40" height="40" />


Esse projeto foi criado com React + Vite (https://pt.vitejs.dev/guide/).

## Vercel

É possível visualizar a aplicação através do link a seguir [Vercel - CS Challenge](https://cs-challenge-zeta.vercel.app/).
Caso opte por visualizar de forma local, seguir os passos abaixo. 

## Começando com React + Vite

Você precisa ter [NPM](https://www.npmjs.com/) instalado para rodar essa aplicação.

#### Clone esse projeto

```
  git clone https://github.com/carolineambar/cs-challenge
```

#### Entre na pasta

```
  cd cs-challenge
```

#### Instale dependencias

```
 npm create vite@latest my-react-app -- --template react
```

#### Para rodar!

```
  npm run dev
```

## Estrutura do projeto

```shell
|-- public
|-- src
|---- assets
|---- components
|---- config
|------ GlobalStyle.ts
|---- pages
|------ Home
|-------- Home.styled.ts
|-------- Home.tsx
|------ RepoDetails
|-------- RepoDetails.styled.ts
|-------- RepoDetails.tsx
|------ Repos
|-------- Repos.styled.ts
|-------- Repos.tsx
|------ User
|-------- User.styled.ts
|-------- User.tsx
|---- router
|------ Router.tsx
|---- App.styled.ts
|---- App.tsx
|---- main.tsx
|---- vite-env.d.ts
|-- .eslintrc
|-- .gitignore
|-- index.html
|-- package-lock.json
|-- package.json
|-- README.md
|-- tsconfig.json
|-- tsconfig.node.json
|-- vite.config.ts
```

Na pasta ```src``` estão as pastas de ```pages``` onde estão os arquivos contendo as funcionalidades da aplicação (documentos .tsx) e estilos das páginas com Styled Components nos documentos ts, na pasta ```router``` foi configurado as rotas do projeto e o arquivo ```App.tsx``` onde ficou a aplicação principal.

Os demais arquivos são de configuração do Projeto, como o ```package.json``` que é de configuração do Servidor.

## Futuras melhorias 

Como futura melhoria irei ajustar o desing e estilo do projeto, bem como, a estrutura do projeto.
