// Mobiles Menü
(function () {
    var btn = document.getElementById('menuToggle');
    var nav = document.getElementById('mainNav');
    if (!btn || !nav) return;

    btn.addEventListener('click', function () {
        var open = nav.classList.toggle('open');
        btn.setAttribute('aria-expanded', open);
    });

    nav.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
            nav.classList.remove('open');
            btn.setAttribute('aria-expanded', 'false');
        });
    });
})();
