document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    const responsiveSidebar = document.querySelector('.responsive-sidebar');
    const content = document.querySelector('.content');
    const body = document.body;

    mobileMenu.addEventListener('click', function () {
        responsiveSidebar.classList.toggle('show');
        body.classList.toggle('fixed-sidebar-visible');
    });

    const links = document.querySelectorAll('.responsive-sidebar .nav-list a');

    links.forEach(link => {
        link.addEventListener('click', function () {
            responsiveSidebar.classList.remove('show');
            body.classList.remove('fixed-sidebar-visible');
        });
    });
});
