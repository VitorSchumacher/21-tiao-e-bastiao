# CodeRace 2025 Frontend

This project is a React application built with Vite. It contains a simple login form and a couple of pages used for the CodeRace 2025 event. The credentials are hard coded for demonstration purposes.

## Example login credentials

Use the following users to try the application:

- `admin` / `admin` – redirects to the dashboard
- `bruno` / `bruno$2025` – redirects to the home page

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

