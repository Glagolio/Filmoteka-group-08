import storage from './storage';
import { currentPage } from './pagination';

export const STORAGE_PAGE_KEY = 'last visit page';
export const storagePage = storage.load(STORAGE_PAGE_KEY);

changeStoragePage();

function changeStoragePage() {
  if (currentPage > 1 && currentPage !== storagePage?.value) {
    storage.remove(STORAGE_PAGE_KEY);
    storage.save(STORAGE_PAGE_KEY, { value: currentPage });
  }
}
