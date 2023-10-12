const menuToggle = document.querySelector('.menu-toggle');
const menuItems = document.querySelector('ul');

menuToggle.addEventListener('click', () => {
    menuItems.classList.toggle('active');
});
