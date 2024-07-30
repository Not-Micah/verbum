"use client";

import { FaBookOpen } from "react-icons/fa";
import useModal from "../../../hooks/useModal";
import useBookData from "../../../hooks/useActiveBook";

interface BookCardProps {
    book: string;
    author: string;
    summary: string;
    whenToRead: string[];
    topics: string[];
}

const BookCard: React.FC<BookCardProps> = ({ book, author, summary, whenToRead, topics }) => {
    const { onOpen } = useModal();
    const { setBookData } = useBookData();

  return (
    <div className='px-10 py-8 shadow-md rounded-md bg-white
    flex flex-row justify-between items-start'
    onClick={() => {
        setBookData({
            book,
            author,
            summary,
            whenToRead,
            topics
        })
        onOpen();
    }}>
        <h3 className='dynamic-subtitle'>{book}</h3>
        <div className="flex justify-center items-center">
            <FaBookOpen size={25} className="text-gray-300" />
        </div>
    </div>
  )
}

export default BookCard