const { Router } = require('express');
const router = Router();

router.get('/dashboard',    (_req, res) => res.render('amateur/dashboard'));
router.get('/catalog',      (_req, res) => res.render('amateur/catalog'));
router.get('/artwork/:id',  (req, res) => res.render('amateur/artwork', { id: req.params.id }));
router.get('/cart',         (_req, res) => res.render('amateur/cart'));
router.get('/checkout',     (_req, res) => res.render('amateur/checkout'));
router.get('/orders',       (_req, res) => res.render('amateur/orders'));
router.get('/profile',      (_req, res) => res.render('amateur/profile'));

module.exports = router;