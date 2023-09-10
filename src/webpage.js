function createHeader() {
    const header = document.createElement('div');
    header.classList.add('header');

    const heading = document.createElement('h1');
    heading.textContent = "Noi's Thai Restaurant";
    header.appendChild(heading);
    return header;
};

function createMain() {
    console.log('main');
};

function createFooter() {
    console.log('footer');
};

function initialisePage() {
    const content = document.getElementById('content');
    content.appendChild(createHeader());
    // content.appendChild(createMain());
    // content.appendChild(createFooter());
};


export default initialisePage;