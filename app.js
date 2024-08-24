const menus = document.querySelectorAll('#mobile-menu'); 
const menuLinks = document.querySelector('.navbar__menu');

menus.forEach(menu => { 
    menu.addEventListener('click', function() {
        this.classList.toggle('is-active'); 
        menuLinks.classList.toggle('active');
    });
});

