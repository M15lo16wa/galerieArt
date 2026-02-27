const { Router } = require('express');
const router = Router();

router.get('/dashboard',       (_req, res) => res.render('organisation/dashboard'));
router.get('/exhibitions',     (_req, res) => res.render('organisation/exhibitions'));
router.get('/exhibition/add',  (_req, res) => res.render('organisation/exhibition-add'));
router.get('/artists',         (_req, res) => res.render('organisation/artists'));
router.get('/artworks',        (_req, res) => res.render('organisation/artworks'));
router.get('/sales',           (_req, res) => res.render('organisation/sales'));
router.get('/profile',         (_req, res) => res.render('organisation/profile'));

module.exports = router;