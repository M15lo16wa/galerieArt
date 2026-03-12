const { Router } = require('express');
const router = Router();

const getOrganisation = () => ({
    nom: 'Galerie ArtExpo',
    stats: { artworkCount: 0, artistCount: 0, exhibitionCount: 0, salesCount: 0 }
});

const getArtworks = () => [];
const getArtistes = () => [];
const getExhibitions = () => [];

router.get('/dashboard',       (_req, res) => res.render('organisation/dashboard',      { organisation: getOrganisation() }));
router.get('/exhibitions',     (_req, res) => res.render('organisation/exhibitions',    { organisation: getOrganisation() }));
router.get('/exhibition/add',  (_req, res) => res.render('organisation/exhibition-add', { organisation: getOrganisation() }));
router.get('/artists',         (_req, res) => res.render('organisation/artists',        { organisation: getOrganisation() }));
router.get('/sales',           (_req, res) => res.render('organisation/sales',          { organisation: getOrganisation() }));
router.get('/profile',         (_req, res) => res.render('organisation/profile',        { organisation: getOrganisation() }));

// Gérer oeuvres — liste
router.get('/artworks', (_req, res) => {
    res.render('organisation/artworks', {
        organisation: getOrganisation(),
        oeuvres: getArtworks()
    });
});

// Gérer oeuvres — ajouter
router.get('/artwork/add', (_req, res) => {
    res.render('organisation/artwork-add', {
        organisation: getOrganisation(),
        artistes: getArtistes(),
        exhibitions: getExhibitions()
    });
});

router.post('/artwork/add', (req, res) => {
    console.log('[Organisation] Ajout oeuvre :', req.body);
    res.redirect('/organisation/artworks');
});

// Gérer oeuvres — modifier
router.get('/artwork/edit/:id', (_req, res) => {
    res.render('organisation/artwork-edit', {
        organisation: getOrganisation(),
        oeuvre: null,           // TODO: récupérer depuis la BDD via req.params.id
        artistes: getArtistes(),
        exhibitions: getExhibitions()
    });
});

router.post('/artwork/edit/:id', (req, res) => {
    console.log('[Organisation] Modification oeuvre', req.params.id, ':', req.body);
    res.redirect('/organisation/artworks');
});

// Gérer oeuvres — supprimer
router.post('/artwork/delete', (req, res) => {
    console.log('[Organisation] Suppression oeuvre :', req.body.id);
    res.redirect('/organisation/artworks');
});

// Extend — visibilité
router.post('/artwork/visibility', (req, res) => {
    console.log('[Organisation] Changement visibilité :', req.body);
    res.redirect('/organisation/artworks');
});

// Extend — associer à un événement
router.post('/artwork/event', (req, res) => {
    console.log('[Organisation] Association événement :', req.body);
    res.redirect('/organisation/artworks');
});

// Extend — lier à un artiste
router.post('/artwork/artist', (req, res) => {
    console.log('[Organisation] Liaison artiste :', req.body);
    res.redirect('/organisation/artworks');
});

module.exports = router;
