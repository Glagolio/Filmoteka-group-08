const libraryList = document.querySelector('.library-list');
const btnWatchedLibPage = document.querySelector('.js-watched-btn');

function renderLibMovie(key) {
    const lib = localStorage.getItem(key);
    const parcedLib = JSON.parse(lib);
    return movieCards(parcedLib);
}

btnWatchedLibPage.addEventListener('click', addLibList);

function addLibList() {
    libraryList.innerHTML = renderLibMovie('watched');
}


