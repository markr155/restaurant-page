import Chef from './chef.jpg';

function createHome() {
    const home = document.createElement('div');
    home.appendChild(newParagraph('Authentic Thai dishes cooked with love and care'));
    home.appendChild(chefImage());
    return home;
};

function chefImage(){
    const chefImage = new Image();
    chefImage.alt = 'Photo of thai chef';
    chefImage.src = Chef;
    chefImage.id = 'chef-image';
    return chefImage;
}

function newParagraph(text) {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
}

function loadHome() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createHome());
};

export default loadHome;