# CodeRace 2025 Frontend

Este projeto é uma aplicação React construída com Vite. Ele contém um formulário de login simples e algumas páginas utilizadas no evento CodeRace 2025. O formulário de login se autentica no backend disponível em `https://code-race-qfh4.onrender.com/auth`.

## Exemplo de credenciais de login

Qualquer usuário válido registrado no backend pode ser utilizado. Quando a autenticação é bem-sucedida, o `slug`, `nome`, `token` e `tipoUsuario` retornados são salvos no `localStorage` na chave `userData`. Se o usuário for professor (`tipoUsuario` igual a `1`), ele é redirecionado para o dashboard; caso contrário, é levado para a página inicial com informações sobre os formulários disponíveis.

## Rodando localmente

O projeto usa **npm** como gerenciador de pacotes. Para iniciar um servidor de desenvolvimento:

```bash
npm install
npm run dev
```

O Vite iniciará em `http://localhost:5173` por padrão.

## Rodando os testes

O Jest está configurado para testes de unidade. Após instalar as dependências, execute:

```bash
npm test
```

O comando executa todos os testes dentro de `src/__tests__`.

