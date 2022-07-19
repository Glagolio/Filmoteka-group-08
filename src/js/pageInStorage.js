import storage from './storage';

export const STORAGE_PAGE_KEY = 'last visit page';
export const storagePage = storage.load(STORAGE_PAGE_KEY);


changeStoragePage();

function changeStoragePage() {
  if (currentPage > 1 && currentPage !== storagePage) {
    storage.remove(STORAGE_PAGE_KEY);
    storage.save(STORAGE_PAGE_KEY, currentPage);
  }
}
