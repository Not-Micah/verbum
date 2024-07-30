"use client";

import { useState, useEffect } from "react";

import NavBar from "@/components/NavBar";
import BookCard from "@/components/bookPageComponents/BookCard";
import SearchBar from "@/components/versePageComponents/SearchBar";
import Skeleton from "@/components/versePageComponents/Skeleton";

interface BookObject {
  _id: string;
  book: string;
  author: string;
  summary: string;
  whenToRead: string[];
  topics: string[];
  __v: string;
}

interface Params {
  query: string;
}

const Books = ({ searchParams }: { searchParams: Params }) => {
  const [books, setBooks] = useState<BookObject[]>([]);
  const [isLoading, setLoading] = useState(true);

  const { query } =
  searchParams;

  useEffect(() => {
    fetch("/api/books")
      .then((res) => res.json())
      .then((data) => {
        const data1 = data.books;
        setBooks(data1);
        setLoading(false);
      });
  }, []);

  const queryFilter = (param: string, book: string, author: string, summary: string) => {
    if (!param) {
      return true;
    }
    return (
      book.toLowerCase().includes(param.toLowerCase()) ||
      author.toLowerCase().includes(param.toLowerCase()) ||
      summary.toLowerCase().includes(param.toLowerCase())
    );
  };

  const [filteredBooks, setFilteredBooks] = useState<BookObject[]>([]);

  useEffect(() => {
    const filtered = books.filter((book) => {
      return (
        queryFilter(query, book.book, book.author, book.summary)
      )
    })
    setFilteredBooks(filtered);
  }, [searchParams, books])

  return (
    <div className="w-full px-16 py-2 max-lg:px-8 max-md:px-4x1">
      <NavBar />
      <div className="p-6 rounded-lg shadow-md max-lg:p-3">
        <SearchBar page="books" />
        {isLoading ? (
          <div className="flex flex-col gap-y-2">
            {Array(5)
              .fill(null)
              .map((t, index) => (
                <Skeleton key={index} />
              ))}
          </div>
        ) : (
          <div className="my-5 flex flex-col justify-start gap-5">
            {filteredBooks.map((book, index) => (
              <BookCard
                book={book.book}
                author={book.author}
                summary={book.summary}
                whenToRead={book.whenToRead}
                topics={book.topics}
                key={index}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Books;
