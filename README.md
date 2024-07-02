# Vuemail - AdonisJS

This repo has a working example of how to set up [AdonisJS](https://adonisjs.com/) 6 to send emails using the [Vuemail](https://vuemail.net/) API.

## Setup

1. Clone the repo
2. Run `pnpm install`
3. Create a `.env` file and add the following:

```
TZ=UTC
PORT=3333
HOST=localhost
LOG_LEVEL=info
APP_KEY=dYl-XhzZN47qFNn7g4yrLkXRAfU3juXQ
NODE_ENV=development
SMTP_HOST=
SMTP_PORT=
SMTP_USERNAME=
SMTP_PASSWORD=
```

4. Run `pnpm dev` to start the server

## Building for Production

1. Run `pnpm build:dev` to build the project
2. Run `pnpm start` to start the server
