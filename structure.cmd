@echo off
:: ============================================================
::  Plateforme d'exposition et vente d'oeuvres d'art
::  Structure du projet - scaffold script
::  Derniere mise a jour : 2026-02-27
:: ============================================================

echo [INFO] Creation de la structure du projet...

:: ------------------------------------------------------------
:: PUBLIC (assets statiques)
:: ------------------------------------------------------------
if not exist "public\css"    mkdir "public\css"
if not exist "public\js"     mkdir "public\js"
if not exist "public\images" mkdir "public\images"

:: ------------------------------------------------------------
:: SRC - Config / BDD
:: ------------------------------------------------------------
if not exist "src\config\sql" mkdir "src\config\sql"

:: ------------------------------------------------------------
:: SRC - MVC
:: ------------------------------------------------------------
if not exist "src\controllers" mkdir "src\controllers"
if not exist "src\models"      mkdir "src\models"
if not exist "src\routes"      mkdir "src\routes"

:: ------------------------------------------------------------
:: VIEWS - Layouts (gabarits HTML de base)
:: ------------------------------------------------------------
if not exist "src\views\layouts" mkdir "src\views\layouts"
if not exist "src\views\layouts\main.ejs"  type nul > "src\views\layouts\main.ejs"
if not exist "src\views\layouts\admin.ejs" type nul > "src\views\layouts\admin.ejs"
if not exist "src\views\layouts\auth.ejs"  type nul > "src\views\layouts\auth.ejs"

:: ------------------------------------------------------------
:: VIEWS - Partials (composants reutilisables)
:: ------------------------------------------------------------
if not exist "src\views\partials" mkdir "src\views\partials"
if not exist "src\views\partials\header.ejs" type nul > "src\views\partials\header.ejs"
if not exist "src\views\partials\footer.ejs" type nul > "src\views\partials\footer.ejs"
if not exist "src\views\partials\navbar.ejs" type nul > "src\views\partials\navbar.ejs"

:: ------------------------------------------------------------
:: VIEWS - Page d'accueil publique (Visiteur)
:: ------------------------------------------------------------
if not exist "src\views\index.ejs" type nul > "src\views\index.ejs"

:: ------------------------------------------------------------
:: VIEWS - Auth (commun a tous les acteurs)
::   login.ejs    : connexion avec selection du type de compte
::   register.ejs : inscription avec choix du role
:: ------------------------------------------------------------
if not exist "src\views\auth" mkdir "src\views\auth"
if not exist "src\views\auth\login.ejs"    type nul > "src\views\auth\login.ejs"
if not exist "src\views\auth\register.ejs" type nul > "src\views\auth\register.ejs"

:: ------------------------------------------------------------
:: VIEWS - Amateur (acheteur / amateur d'art)
::   dashboard.ejs : tableau de bord
::   catalog.ejs   : parcourir les oeuvres
::   artwork.ejs   : detail d'une oeuvre
::   cart.ejs      : panier d'achat
::   checkout.ejs  : finalisation de commande
::   orders.ejs    : historique des achats
::   profile.ejs   : gestion du profil
:: ------------------------------------------------------------
if not exist "src\views\amateur" mkdir "src\views\amateur"
if not exist "src\views\amateur\dashboard.ejs" type nul > "src\views\amateur\dashboard.ejs"
if not exist "src\views\amateur\catalog.ejs"   type nul > "src\views\amateur\catalog.ejs"
if not exist "src\views\amateur\artwork.ejs"   type nul > "src\views\amateur\artwork.ejs"
if not exist "src\views\amateur\cart.ejs"      type nul > "src\views\amateur\cart.ejs"
if not exist "src\views\amateur\checkout.ejs"  type nul > "src\views\amateur\checkout.ejs"
if not exist "src\views\amateur\orders.ejs"    type nul > "src\views\amateur\orders.ejs"
if not exist "src\views\amateur\profile.ejs"   type nul > "src\views\amateur\profile.ejs"

:: ------------------------------------------------------------
:: VIEWS - Artiste (createur / vendeur)
::   dashboard.ejs    : tableau de bord
::   my-artworks.ejs  : liste de ses oeuvres publiees
::   artwork-add.ejs  : ajouter une oeuvre
::   artwork-edit.ejs : modifier une oeuvre
::   sales.ejs        : suivi des ventes
::   profile.ejs      : profil public de l'artiste
:: ------------------------------------------------------------
if not exist "src\views\artiste" mkdir "src\views\artiste"
if not exist "src\views\artiste\dashboard.ejs"    type nul > "src\views\artiste\dashboard.ejs"
if not exist "src\views\artiste\my-artworks.ejs"  type nul > "src\views\artiste\my-artworks.ejs"
if not exist "src\views\artiste\artwork-add.ejs"  type nul > "src\views\artiste\artwork-add.ejs"
if not exist "src\views\artiste\artwork-edit.ejs" type nul > "src\views\artiste\artwork-edit.ejs"
if not exist "src\views\artiste\sales.ejs"        type nul > "src\views\artiste\sales.ejs"
if not exist "src\views\artiste\profile.ejs"      type nul > "src\views\artiste\profile.ejs"

:: ------------------------------------------------------------
:: VIEWS - Organisation (galerie / musee)
::   dashboard.ejs      : tableau de bord de la structure
::   exhibitions.ejs    : gerer les expositions
::   exhibition-add.ejs : creer une exposition
::   artists.ejs        : artistes references
::   artworks.ejs       : oeuvres du catalogue
::   sales.ejs          : ventes realisees
::   profile.ejs        : page publique de l'organisation
:: ------------------------------------------------------------
if not exist "src\views\organisation" mkdir "src\views\organisation"
if not exist "src\views\organisation\dashboard.ejs"      type nul > "src\views\organisation\dashboard.ejs"
if not exist "src\views\organisation\exhibitions.ejs"    type nul > "src\views\organisation\exhibitions.ejs"
if not exist "src\views\organisation\exhibition-add.ejs" type nul > "src\views\organisation\exhibition-add.ejs"
if not exist "src\views\organisation\artists.ejs"        type nul > "src\views\organisation\artists.ejs"
if not exist "src\views\organisation\artworks.ejs"       type nul > "src\views\organisation\artworks.ejs"
if not exist "src\views\organisation\sales.ejs"          type nul > "src\views\organisation\sales.ejs"
if not exist "src\views\organisation\profile.ejs"        type nul > "src\views\organisation\profile.ejs"

:: ------------------------------------------------------------
:: VIEWS - Admin (administrateur systeme)
::   dashboard.ejs      : vue globale du systeme
::   users.ejs          : gestion de tous les utilisateurs
::   artworks.ejs       : moderation des oeuvres
::   organisations.ejs  : gestion des organisations
::   orders.ejs         : suivi de toutes les commandes
::   reports.ejs        : statistiques et rapports
:: ------------------------------------------------------------
if not exist "src\views\admin" mkdir "src\views\admin"
if not exist "src\views\admin\dashboard.ejs"     type nul > "src\views\admin\dashboard.ejs"
if not exist "src\views\admin\users.ejs"         type nul > "src\views\admin\users.ejs"
if not exist "src\views\admin\artworks.ejs"      type nul > "src\views\admin\artworks.ejs"
if not exist "src\views\admin\organisations.ejs" type nul > "src\views\admin\organisations.ejs"
if not exist "src\views\admin\orders.ejs"        type nul > "src\views\admin\orders.ejs"
if not exist "src\views\admin\reports.ejs"       type nul > "src\views\admin\reports.ejs"

:: ------------------------------------------------------------
echo.
echo [OK] Structure creee avec succes.
echo.
echo  Acteurs couverts :
echo   - Visiteur       : src/views/index.ejs
echo   - Auth (commun)  : src/views/auth/
echo   - Amateur        : src/views/amateur/        (7 vues)
echo   - Artiste        : src/views/artiste/        (6 vues)
echo   - Organisation   : src/views/organisation/   (7 vues)
echo   - Admin          : src/views/admin/          (6 vues)
echo.
pause