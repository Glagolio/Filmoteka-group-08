const libraryList = document.querySelector('.library-list');
const btnWatchedLibPage = document.querySelector('.js-watched-btn');

async function renderLibMovie(key) {
    const lib = localStorage.getItem(key);
    const parcedLib = JSON.parse(lib);
    return movieCards(parcedLib);
}

btnWatchedLibPage.addEventListener('click', addLibList);

async function addLibList() {
    libraryList.innerHTML = await renderLibMovie('watched')
}


