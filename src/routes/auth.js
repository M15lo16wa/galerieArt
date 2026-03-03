const { Router } = require('express');
const router = Router();

const { validateLogin, validateRegister } = require('../validators/auth.validator');
const { loginDTO, registerDTO }           = require('../dto/auth.dto');

// GET /auth/login
router.get('/login', (_req, res) => {
    res.render('auth/login', { errors: [] });
});

// GET /auth/register
router.get('/register', (_req, res) => {
    res.render('auth/register', { errors: [], body: {} });
});

// POST /auth/login
router.post('/login', validateLogin, (req, res) => {
    const dto = loginDTO(req.body);
    // TODO : verifier l'utilisateur en base PostgreSQL
    console.log('[AUTH] Login DTO ->', dto);
    res.redirect('/');
});

// POST /auth/register
router.post('/register', validateRegister, (req, res) => {
    const dto = registerDTO(req.body);
    // TODO : creer l'utilisateur en base PostgreSQL
    console.log('[AUTH] Register DTO ->', dto);
    res.redirect('/auth/login');
});

module.exports = router;
