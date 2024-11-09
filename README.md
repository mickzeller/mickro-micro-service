## `mickro-micro-service` 

This project is a web application designed to allow users to upload, view, and share "gists" or code snippets. The application leverages modern technologies such as Next.js, Prisma, and SQLite to offer a seamless and efficient experience.

## Features

- **User-Friendly Interface:** Simple and intuitive UI for uploading and browsing code snippets.
- **Next.js:** Server-side rendering for improved performance and SEO.
- **Prisma ORM:** Easy database access and manipulation.
- **SQLite:** Lightweight and portable database.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (Ensure you have the latest stable release)
- [Yarn](https://yarnpkg.com/getting-started/install) or [npm](https://www.npmjs.com/get-npm)

### Installation

1. Clone the repository:

2. Install dependencies:

    ```sh
    npm install
    ```

3. Set up the database:

   Initialize Prisma:

    ```sh
    npx prisma init
    ```

   Migrate the database:

    ```sh
    npx prisma migrate dev --name init
    ```

### Running the Application

To start the development server:

```sh
npm run dev
```

The application will be accessible at `http://localhost:3000`.

### Building for Production

To build the application for production:

```sh
npm run build
```

Then, start the server:

```sh
npm start
```

## Using the Application

