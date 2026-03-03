/**
 * DTO Connexion
 * Extrait uniquement email et mot de passe depuis req.body.
 * Normalise l'email (trim + lowercase).
 *
 * @param {object} body - req.body
 * @returns {{ email: string, password: string }}
 */
function loginDTO(body) {
    return {
        email:    (body.email    || '').trim().toLowerCase(),
        password: (body.password || ''),
    };
}

/**
 * DTO Inscription
 * Extrait email, mot de passe, role et sous-role depuis req.body.
 * Tout champ non listé ici est ignoré.
 *
 * @param {object} body - req.body
 * @returns {{ email: string, password: string, role: string, subRole: string|null }}
 */
function registerDTO(body) {
    return {
        email:    (body.email    || '').trim().toLowerCase(),
        password: (body.password || ''),
        role:     (body.role     || ''),
        subRole:  (body.subRole  || null),
    };
}

module.exports = { loginDTO, registerDTO };
