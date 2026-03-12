const { Router } = require('express');
const router = Router();

// GET / - Accueil public / vitrine du catalogue
router.get('/', (_req, res) => res.render('index'));

// GET /expositions - Page des œuvres filtrées depuis le catalogue
router.get('/expositions', (req, res) => res.render('expositions', { query: req.query }));

module.exports = router;