'use strict';

const { Router } = require('express');
const router = Router();

router.get('/dashboard',     (_req, res) => res.render('admin/dashboard'));
router.get('/users',         (_req, res) => res.render('admin/users'));
router.get('/artworks',      (_req, res) => res.render('admin/artworks'));
router.get('/organisations',  (_req, res) => res.render('admin/organisations'));
router.get('/orders',        (_req, res) => res.render('admin/orders'));
router.get('/reports',       (_req, res) => res.render('admin/reports'));

module.exports = router;