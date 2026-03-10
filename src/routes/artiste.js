const { Router } = require('express');
const {
    calculateCompletionPercentage,
    isProfileComplete,
} = require('../middleware/artist-middleware');

const router = Router();

/* --------------------------------------------------
    Helper - build artiste object from session
   -------------------------------------------------- */
function getArtiste(req) {
    return req.artiste || {
        email:      '',
        prenom:     '',
        nom:        '',
        discipline: '',
        bio:        '',
        ville:      '',
        pays:       '',
        siteWeb:    '',
        stats: {
            artworkCount:    0,
            exhibitionCount: 0,
            salesCount:      0
        }
    };
}

/* --------------------------------------------------
    ROUTES
   -------------------------------------------------- */

router.get('/dashboard', (req, res) => {
    res.render('artiste/dashboard', { artiste: getArtiste(req) });
});

router.get('/my-artworks', (req, res) => {
    res.render('artiste/my-artworks', { artiste: getArtiste(req) });
});

router.get('/artwork/add', (req, res) => {
    res.render('artiste/artwork-add', { artiste: getArtiste(req) });
});

router.get('/artwork/edit/:id', (req, res) => {
    res.render('artiste/artwork-edit', { artiste: getArtiste(req) });
});

router.get('/exhibitions', (req, res) => {
    res.render('artiste/exhibitions', { artiste: getArtiste(req) });
});

router.get('/exhibition/add', (req, res) => {
    res.render('artiste/exhibition-add', { artiste: getArtiste(req) });
});

router.get('/sales', (req, res) => {
    res.render('artiste/sales', { artiste: getArtiste(req) });
});

// Profile - always accessible
// TODO: fetch artiste from req.session.artiste once auth is in place
router.get('/profile', (req, res) => {
    const artiste = getArtiste(req);
    res.render('artiste/profile', {
        artiste,
        profilComplet:         isProfileComplete(artiste),
        pourcentageCompletion: calculateCompletionPercentage(artiste)
    });
});

module.exports = router;
