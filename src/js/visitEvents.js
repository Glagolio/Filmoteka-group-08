import { storagePage } from './pageInStorage';


const refs = {
    comeBackButton: document.querySelector('button.js-visit-back-btn'),
    visitModal: document.querySelector("[data-modal].dialog"),   
    visitCloseBtn: document.querySelector("button.js-visit-close-btn"),
};


    refs.comeBackButton.addEventListener("click", loadStoragePage);    
    refs.visitCloseBtn.addEventListener("click", toggleModal);
    
(() => {
    if (currentPage == 1 || storagePage === undefined) {
        return 
    } else {        
        toggleModal();
        return  timerId = setTimeout(() => { toggleModal() }, 15000);      
    }
})();    

function loadStoragePage() {     
    currentPage = storagePage;
    toggleModal();
};

function toggleModal() {   
    refs.visitModal.classList.toggle("is-hidden");     
    
    if (refs.visitModal.classList.value.includes("hidden") === true) {
           clearTimeout(timerId);  
        refs.comeBackButton.removeEventListener("click", loadStoragePage);        
        refs.visitCloseBtn.removeEventListener("click", toggleModal);
    };
};