# CodeRace 2025 Frontend

This project is a React application built with Vite. It contains a simple login
form and a couple of pages used for the CodeRace 2025 event. The login form
authenticates against the backend available at
`https://code-race-qfh4.onrender.com/auth`.

## Example login credentials

Any valid user registered in the backend can be used. When authentication
succeeds the returned `slug`, `nome` and `token` are persisted in
`localStorage` under the `userData` key and the user is redirected to the
dashboard.

## Running locally

The project uses **npm** as its package manager. To start a development server:

```bash
npm install
npm run dev
```

Vite will start on `http://localhost:5173` by default.

## Running tests

Jest is configured for unit testing. After installing dependencies, run:

```bash
npm test
```

The command executes all tests inside `src/__tests__`.

