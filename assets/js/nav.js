window.addEventListener('scroll', function() {
    var navbar = document.getElementById('header');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        navbar.style.backgroundColor = 'var(--body-color)';
        navbar.classList.add('header-shadow'); // أضف هذا الكلاس عند التمرير
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.classList.remove('header-shadow'); // أزل الكلاس لما تكون في الأعلى
    }
});