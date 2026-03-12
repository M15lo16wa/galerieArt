/**
 * catalogue.js
 * Gère le switching des onglets de catégorie et l'affichage
 * du panneau de filtres correspondant.
 */

document.addEventListener('DOMContentLoaded', () => {
  const tabs     = document.querySelectorAll('.catalogue__tab');
  const datasets = document.querySelectorAll('.cat-data');

  if (!tabs.length || !datasets.length) return;

  // Lit le paramètre ?cat= dans l'URL pour pré-sélectionner l'onglet actif
  const urlCat = new URLSearchParams(window.location.search).get('cat');
  if (urlCat) {
    const matchTab = [...tabs].find(t => t.dataset.cat === urlCat);
    if (matchTab) activateTab(matchTab);
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => activateTab(tab));
  });

  function activateTab(tab) {
    const cat = tab.dataset.cat;

    // Mise à jour des onglets
    tabs.forEach(t => {
      t.classList.remove('catalogue__tab--active');
      t.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('catalogue__tab--active');
    tab.setAttribute('aria-selected', 'true');

    // Affichage du bon dataset de filtres
    datasets.forEach(d => {
      if (d.dataset.cat === cat) {
        d.classList.add('cat-data--active');
      } else {
        d.classList.remove('cat-data--active');
      }
    });
  }
});
