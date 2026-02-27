const { Router } = require('express');
const router = Router();

// GET  /auth/login    - Formulaire de connexion (selection du type de compte)
router.get('/login',    (_req, res) => res.render('auth/login'));

// GET  /auth/register - Formulaire d'inscription (choix du role)
router.get('/register', (_req, res) => res.render('auth/register'));

// POST /auth/login    - Traitement connexion    (a implementer)
router.post('/login',    (_req, res) => res.redirect('/'));

// POST /auth/register - Traitement inscription  (a implementer)
router.post('/register', (_req, res) => res.redirect('/auth/login'));

module.exports = router;