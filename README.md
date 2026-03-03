# galerieArt

Cette plateforme est une maison d'exposition virtuelle qui accueil plusieurs œuvres d'artiste, les exposent et vendent aux amateurs , collectionneurs d'œuvre d'art. Elle permet de donner de la visibilité au artiste à travers leurs créations.

## Installation

```bash
npm install
```

## Démarrage

```bash
npm start
```

Le serveur sera accessible sur http://localhost:4000

## Structure du projet

- **app.js** - Point d'entrée de l'application Express
- **src/routes/** - Routes organisées par type d'acteur (admin, amateur, artiste, organisation, auth)
- **src/views/** - Templates EJS organisés par type d'acteur
- **structure.cmd** - Script Windows pour créer la structure du projet

## Acteurs couverts

- **Visiteur** : Page d'accueil publique
- **Auth** : Connexion et inscription
- **Amateur** : Acheteur/collectionneur d'art (7 vues)
- **Artiste** : Créateur/vendeur (6 vues)
- **Organisation** : Galerie/musée (7 vues)
- **Admin** : Administrateur système (6 vues) 
