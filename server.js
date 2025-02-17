require('dotenv').config();
const express = require('express');
const knex = require('knex');
const nanoidImport = import('nanoid');
const config = require('./knexfile');

const app = express();
const port = process.env.PORT || 3000;
const db = knex(config.development);

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('views'));
app.set('view engine', 'ejs');

// Page d'accueil
app.get('/', async (req, res) => {
   try {
      const history = await db('urls').select(
         'longUrl',
         'shortCode',
         'createdAt'
      );
      res.render('index', { shortUrl: null, history });
   } catch (error) {
      console.error('Error fetching history:', error);
      res.status(500).send('Error fetching history');
   }
});

// Affichage des historique
app.get('/history', async (req, res) => {
   try {
      const history = await db('urls').select(
         'longUrl',
         'shortCode',
         'createdAt'
      );
      res.render('index', { shortUrl: null, history });
   } catch (error) {
      console.error('Error fetching history:', error);
      res.status(500).send('Error fetching history');
   }
});

// Générer une URL courte
app.post('/shorten', async (req, res) => {
   const { longUrl } = req.body;
   const { nanoid } = await nanoidImport;
   const existingUrl = await db('urls').where({ longUrl }).first();

   if (existingUrl) {
      return res.render('index', {
         shortUrl: `${process.env.BASE_URL}/${existingUrl.shortCode}`,
         history: [],
      });
   }

   // Créer un code court unique
   const shortCode = nanoid(6);
   const shortUrl = `${process.env.BASE_URL}/${shortCode}`;

   // Sauvegarder dans SQLite
   await db('urls').insert({ longUrl, shortCode });
   const history = await db('urls').select('longUrl', 'shortCode', 'createdAt');
   res.render('index', { shortUrl, history });
});

// Redirection
app.get('/:shortCode', async (req, res) => {
   const { shortCode } = req.params;
   const url = await db('urls').where({ shortCode }).first();

   if (url) {
      res.redirect(url.longUrl);
   } else {
      res.status(404).send('URL non trouvée');
   }
});

// Démarrer le serveur
app.listen(port, () => {
   console.log(`Serveur en écoute sur http://localhost:${port}`);
});
