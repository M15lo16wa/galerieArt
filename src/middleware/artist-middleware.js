/* --------------------------------------------------
    ARTIST MIDDLEWARE
   -------------------------------------------------- */

/* --------------------------------------------------
    Calcule la complétion du profil artiste en pourcentage
   -------------------------------------------------- */
function calculateCompletionPercentage(artiste) {
    const fieldsToCheck = ['prenom', 'nom', 'discipline', 'bio', 'ville', 'pays', 'siteWeb'];
    const filledCount   = fieldsToCheck.filter(field => artiste[field] && artiste[field].trim() !== '').length;
    return Math.round((filledCount / fieldsToCheck.length) * 100);
}

/* --------------------------------------------------
    Vérifie si le profil artiste est complet (prénom, nom, discipline)
   -------------------------------------------------- */
function isProfileComplete(artiste) {
    return (
        artiste.prenom     && artiste.prenom.trim()     !== '' &&
        artiste.nom        && artiste.nom.trim()        !== '' &&
        artiste.discipline && artiste.discipline.trim() !== ''
    );
}

/* --------------------------------------------------
    Middleware pour protéger les routes nécessitant un profil complet
   -------------------------------------------------- */
function requireCompleteProfile(req, res, next) {
    const { artiste } = req;
    if (!artiste || !isProfileComplete(artiste)) {
        return res.redirect('/artiste/profile');
    }
    next();
}

module.exports = {
    calculateCompletionPercentage,
    isProfileComplete,
    requireCompleteProfile
};
