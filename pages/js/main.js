document.addEventListener('DOMContentLoaded', () => {
    const showMenu = (headerToggle, navbarId) => {
        const toggleBtn = document.getElementById(headerToggle),
              nav = document.getElementById(navbarId);

        if(toggleBtn && nav){
            toggleBtn.addEventListener('click', () => {
                nav.classList.toggle('show-menu');
                toggleBtn.classList.toggle('bx-x');
            });
        }
    };
    showMenu('header-toggle','navbar');

    const linkColor = document.querySelectorAll('.nav-link');

    function colorLink(){
        if (linkColor.length) {
            linkColor.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        }
    }

    if (linkColor.length) {
        linkColor.forEach(l => l.addEventListener('click', colorLink));
    }
});
