import PadThai from './padthai.jpg';

function loadMenu() {
    //items contain name, price, description, image
    //  add item via function
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(addMenuItem(
        'Pad Thai',
        '$19',
        'Thai noodle stir fry with a sweet-savoury-sour sauce and crushed peanuts',
        PadThai
    ));

    console.log('menu');
};

function addMenuItem(name, price, description, imagePath) {
    const newItem = document.createElement('div');

    const itemName = document.createElement('h3');
    itemName.textContent = name;

    const itemImage = new Image();
    itemImage.src = imagePath;
    itemImage.alt = `photo of ${name}`;
    itemImage.classList.add('menu-item-image');

    const itemPrice = document.createElement('p');
    itemPrice.textContent = price;

    const itemDescription = document.createElement('p');
    itemDescription.textContent = description;

    newItem.appendChild(itemName);
    newItem.appendChild(itemImage);
    newItem.appendChild(itemPrice);
    newItem.appendChild(itemDescription);
    return newItem;
};

export default loadMenu;