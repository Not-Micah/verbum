"use client";

import React from "react";
import VerseCard from "../VerseCard";
import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";

interface VerseObject {
  _id: string;
  location: string;
  verse: string;
  section: string;
  book: string;
  topic: string[];
  context: string;
  character: string;
  author: string;
  __v: string;
}

interface Params {
  [key: string]: string | string[];
  query: string;
}

const VerseList = ({ searchParams }: { searchParams: Params }) => {
  const toArray = (value: string | string[]) =>
    Array.isArray(value) ? value : value ? [value] : [];

  const otherFilter = (param: string | string[], value: string) => {
    if (!param) {
      return true;
    }
    return toArray(param).includes(value);
  };
  const topicFilter = (param: string | string[], value: string | string[]) => {
    if (!param) {
      return true;
    }
    return toArray(param).every((p) => toArray(value).includes(p));
  };

  const queryFilter = (param: string, title: string, verse: string) => {
    if (!param) {
      return true;
    }
    return (
      title.toLowerCase().includes(param.toLocaleLowerCase()) ||
      verse.toLowerCase().includes(param.toLocaleLowerCase())
    );
  };

  const { section, book, topic, context, character, author, query } =
    searchParams;

    const [verses, setVerses] = useState<VerseObject[]>([]);
    const [filteredVerses, setFilteredVerses] = useState<VerseObject[]>([]);
    const [isLoading, setLoading] = useState(true);
    
    useEffect(() => {
      fetch("/api/verses")
        .then((res) => res.json())
        .then((data) => {
          const data1 = data.verses;
          setVerses(data1);
          setLoading(false);
        });
    }, []);
    
    useEffect(() => {
      const filtered = verses.filter((verse) => {
        return (
          otherFilter(section, verse.section) &&
          otherFilter(book, verse.book) &&
          topicFilter(topic, verse.topic) &&
          otherFilter(context, verse.context) &&
          otherFilter(character, verse.character) &&
          otherFilter(author, verse.author) &&
          queryFilter(query, verse.location, verse.verse)
        );
      });
      setFilteredVerses(filtered);
    }, [verses, section, book, topic, context, character, author, query]);
    
    return (
      <div className="">
        {isLoading ? (
          <div className="my-5 flex flex-col justify-start gap-5">
            {Array(5).fill(null).map((t, index) => (
              <Skeleton key={index} />
            ))}
          </div>
        ) : (
          <div className="">
            <p className="font-body py-3 px-3 font-semibold">
              Showing {filteredVerses.length} Verses
            </p>
            <div className="my-5 flex flex-col justify-start gap-5">
              {filteredVerses.map((verse) => (
                <VerseCard
                  key={verse._id}
                  location={verse.location}
                  verse={verse.verse}
                  topic={verse.topic}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    );
};

export default VerseList;
