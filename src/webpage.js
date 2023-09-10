function createHeader() {
    const header = document.createElement('div');
    header.classList.add('header');

    const heading = document.createElement('h1');
    heading.textContent = "Noi's Thai Restaurant";
    header.appendChild(heading);
    header.appendChild(createNavBar());
    return header;
};

function createNavBar() {
    const navBar = document.createElement('div');
    const navButtons = ['Home', 'Menu', 'About Us'];
    navButtons.forEach(button => {
        const newButton = document.createElement('button');
        newButton.textContent = button;
        newButton.classList.add('nav-button');
        navBar.appendChild(newButton);
    });
    return navBar;
};

function createMain() {
    const mainContainer = document.createElement('div');
    mainContainer.setAttribute('id', 'main');
    return mainContainer;
};

function createFooter() {
    const footer = document.createElement('div');
    footer.classList.add('footer');
    const footerText = document.createElement('p');
    footerText.textContent = 'Copyright © Mark Richardson 2023';
    footer.appendChild(footerText);
    return footer;
};

function initialisePage() {
    const content = document.getElementById('content');
    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());
};


export default initialisePage;