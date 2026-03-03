const EMAIL_RE        = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const VALID_ROLES     = ['amateur', 'artiste', 'organisation'];
const VALID_SUB_ROLES = ['galerie', 'association', 'collectif', 'agent'];

/**
 * Middleware — valide le corps d'une requete de connexion.
 * Renvoie le formulaire avec les erreurs si la validation echoue.
 */
function validateLogin(req, res, next) {
    const { email = '', password = '' } = req.body;
    const errors = [];

    if (!EMAIL_RE.test(email.trim()))   errors.push('Adresse email invalide.');
    if (!password || password.length < 8) errors.push('Le mot de passe doit contenir au moins 8 caracteres.');

    if (errors.length) return res.render('auth/login', { errors });

    next();
}

/**
 * Middleware — valide le corps d'une requete d'inscription.
 * Renvoie le formulaire avec les erreurs et les champs saisis si la validation echoue.
 */
function validateRegister(req, res, next) {
    const {
        email           = '',
        password        = '',
        confirmPassword = '',
        role            = '',
        subRole         = '',
    } = req.body;

    const errors = [];

    if (!EMAIL_RE.test(email.trim()))                                     errors.push('Adresse email invalide.');
    if (!password || password.length < 8)                                 errors.push('Le mot de passe doit contenir au moins 8 caracteres.');
    if (password !== confirmPassword)                                      errors.push('Les mots de passe ne correspondent pas.');
    if (!VALID_ROLES.includes(role))                                      errors.push('Veuillez choisir un profil.');
    if (role === 'organisation' && !VALID_SUB_ROLES.includes(subRole))   errors.push("Veuillez preciser le type d'organisation.");

    if (errors.length) return res.render('auth/register', { errors, body: req.body });

    next();
}

module.exports = { validateLogin, validateRegister };
