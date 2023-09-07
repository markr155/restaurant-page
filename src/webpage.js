function initialisePage() {
    content = document.querySelector('#content');

    document.appendChild(createHeader());
    document.appendChild(createMain());
    document.appendChild(createFooter());
};

export default initialisePage;