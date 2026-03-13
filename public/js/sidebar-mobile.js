(function () {
    const btnMenuMobile = document.getElementById('btnMenuMobile');
    const sidebar = document.getElementById('sidebar');
    const sidebarVoile = document.getElementById('sidebarVoile');

    btnMenuMobile.addEventListener('click', function () {
        sidebar.classList.toggle('sidebar--ouverte');
        sidebarVoile.classList.toggle('sidebar-voile--visible');
    });

    sidebarVoile.addEventListener('click', function () {
        sidebar.classList.remove('sidebar--ouverte');
        sidebarVoile.classList.remove('sidebar-voile--visible');
    });
})();
