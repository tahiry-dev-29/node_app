# node_app

Juste a test for Projets Utilitaires
Structre

```
url-shortener-sqlite/
  ├── .env
  ├── server.js
  ├── knexfile.js
  ├── migrations/
  │   └── 202404010000_create_urls_table.js
  └── views/
      ├── index.ejs
      └── styles.css
```

### Description

This project is a simple URL shortener built with Node.js, Express.js, EJS, SQLite, and Knex.js. It allows users to shorten long URLs and redirect to the original URL using a short code.

### Installation

1. **Clone the repository:**
   ```bash
   git clone <https://github.com/tahiry-dev-29/url_shortener.git>
   ```
2. **Install dependencies:**
   ```bash
   cd url-shortener-sqlite
   npm install
   ```
3. **Create a `.env` file:** Copy the example `.env` file and fill in the `PORT` and `BASE_URL` variables. The `BASE_URL` should reflect where your application will be hosted.
4. **Run migrations:**
   ```bash
   npx knex migrate:latest
   ```
5. **Start the server:**
   ```bash
   npm start
   ```

### Usage

1. Access the application in your browser at the address specified in your `.env` file's `BASE_URL` variable.
2. Paste a long URL into the input field.
3. Click "Raccourcir" to generate a shortened URL.
4. The shortened URL will be displayed on the page.

### Contributing

Contributions are welcome! Please open an issue or submit a pull request.

### License

[Specify your license here, e.g., MIT License]
`
