const express = require('express');
const path    = require('path');

const indexRouter        = require('./src/routes/index');
const authRouter         = require('./src/routes/auth');
const amateurRouter      = require('./src/routes/amateur');
const artisteRouter      = require('./src/routes/artiste');
const organisationRouter = require('./src/routes/organisation');
const adminRouter        = require('./src/routes/admin');

const app  = express();
const PORT = process.env.PORT || 4000;

// --- Moteur de template ---
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

// --- Fichiers statiques ---
app.use(express.static(path.join(__dirname, 'public')));

// --- Parseurs de requetes ---
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// --- Montage des routes (1 acteur = 1 routeur) ---
app.use('/',             indexRouter);
app.use('/auth',         authRouter);
app.use('/amateur',      amateurRouter);
app.use('/artiste',      artisteRouter);
app.use('/organisation', organisationRouter);
app.use('/admin',        adminRouter);

// --- Gestionnaire 404 ---
app.use((_req, res) => res.status(404).send('Page introuvable'));

app.listen(PORT, () => console.log(`Serveur : http://localhost:${PORT}`));