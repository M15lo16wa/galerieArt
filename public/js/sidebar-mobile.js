(function () {
    var btnMenuMobile = document.getElementById('btnMenuMobile');
    var sidebar       = document.getElementById('sidebar');
    var sidebarVoile  = document.getElementById('sidebarVoile');

    btnMenuMobile.addEventListener('click', function () {
        sidebar.classList.toggle('sidebar--ouverte');
        sidebarVoile.classList.toggle('sidebar-voile--visible');
    });

    sidebarVoile.addEventListener('click', function () {
        sidebar.classList.remove('sidebar--ouverte');
        sidebarVoile.classList.remove('sidebar-voile--visible');
    });
})();
