const { Router } = require('express');
const router = Router();

// GET / - Accueil public / vitrine du catalogue
router.get('/', (_req, res) => res.render('index'));

module.exports = router;