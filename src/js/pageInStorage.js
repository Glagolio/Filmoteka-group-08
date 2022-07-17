import storage from './storage'

const STORAGE_PAGE_KEY = "last visit page";
const storagePage = storage.load(STORAGE_PAGE_KEY);
const refs = {
    comeBackButton: document.querySelector('button.js-visit-back-btn'),
    visitModal: document.querySelector("[data-modal].dialog"),
    visitClose: document.querySelector("button.js-dialog-close"),
    visitCloseBtn: document.querySelector("button.js-visit-close-btn"),
};

// currentPage = 8;

changeStoragePage();

(() => {
        if (currentPage === 1 || storagePage === undefined) {
            return
     }toggleModal();
})();    


refs.comeBackButton.addEventListener("click", loadStoragePage); 
refs.visitClose.addEventListener("click", toggleModal);
refs.visitCloseBtn.addEventListener("click", toggleModal);

function changeStoragePage() {
    if (currentPage > 1 && currentPage !== storagePage.value) {        
        storage.remove(STORAGE_PAGE_KEY);
        storage.save(STORAGE_PAGE_KEY, { value: currentPage });
    }    
};
function loadStoragePage() {     
    if (currentPage !== 1){ currentPage = storagePage.value; } 
    toggleModal();
};
function toggleModal() {   
        refs.visitModal.classList.toggle("is-hidden");  
};