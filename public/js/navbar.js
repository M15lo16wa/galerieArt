document.addEventListener('DOMContentLoaded', () => {

  /* ---- Mega-menu : affichage avec délai de grâce ---- */
  const navItem = document.querySelector('.navbar__item');
  const mega    = navItem ? navItem.querySelector('.navbar__mega') : null;
  let hideTimer = null;

  const showMega = () => {
    clearTimeout(hideTimer);
    mega.classList.add('navbar__mega--visible');
  };

  const hideMega = () => {
    hideTimer = setTimeout(() => {
      mega.classList.remove('navbar__mega--visible');
    }, 200);
  };

  if (navItem && mega) {
    navItem.addEventListener('mouseenter', showMega);
    navItem.addEventListener('mouseleave', hideMega);
    mega.addEventListener('mouseenter', showMega);
    mega.addEventListener('mouseleave', hideMega);
  }

  /* ---- Onglets catégories (survol) ---- */
  const tabs  = document.querySelectorAll('.navbar__mega-tab');
  const datas = document.querySelectorAll('.navbar__mega-data');

  tabs.forEach(tab => {
    tab.addEventListener('mouseenter', () => {
      const cat = tab.dataset.mega;
      tabs.forEach(t => t.classList.remove('navbar__mega-tab--active'));
      tab.classList.add('navbar__mega-tab--active');
      datas.forEach(d => {
        d.classList.toggle('navbar__mega-data--active', d.dataset.mega === cat);
      });
    });
  });

});
