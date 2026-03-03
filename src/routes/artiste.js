const { Router } = require('express');
const router = Router();

router.get('/dashboard',        (_req, res) => res.render('artiste/dashboard'));
router.get('/my-artworks',      (_req, res) => res.render('artiste/my-artworks'));
router.get('/artwork/add',      (_req, res) => res.render('artiste/artwork-add'));
router.get('/artwork/edit/:id', (_req, res) => res.render('artiste/artwork-edit'));
router.get('/exhibitions',      (_req, res) => res.render('artiste/exhibitions'));
router.get('/exhibition/add',   (_req, res) => res.render('artiste/exhibition-add'));
router.get('/sales',            (_req, res) => res.render('artiste/sales'));
router.get('/profile',          (_req, res) => res.render('artiste/profile'));

module.exports = router;