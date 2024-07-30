import { create } from 'zustand';

interface BookData {
    book: string,
    author: string,
    summary: string,
    whenToRead: string[],
    topics: string[]
}

interface BookDataStore {
    bookData: BookData | null;
    setBookData: (newBookData: BookData | null) => void;
}

const useBookData = create<BookDataStore>((set) => ({
    bookData: null,
    setBookData: (newBookData: BookData | null) => set({ bookData : newBookData })
}));

export default useBookData;