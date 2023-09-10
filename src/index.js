import initialisePage from './webpage.js';
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadAboutUs from './about-us.js';
import './style.css';

function navBarFunctionality() {
    const homeButton = document.getElementById('home');
    const menuButton = document.getElementById('menu');
    const aboutUsButton = document.getElementById('aboutUs');

    homeButton.addEventListener('click', loadHome);
    menuButton.addEventListener('click', loadMenu);
    aboutUsButton.addEventListener('click', loadAboutUs);

};

initialisePage();
navBarFunctionality();