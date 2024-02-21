"use client";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

const SearchBar = () => {
  const router = useRouter();
  const [query, setQuery] = useState('');

  const createQueryString = useCallback((data: string) => {
    const params = new URLSearchParams(window.location.search);

    if (data.trim() !== "") {
      params.set("query", data);
    } else {
      params.delete("query");
    }

    return params.toString();
  }, []);

  return (
    <div className="mb-5 border-[0.5] border-gray-500 shadow-lg rounded-full px-4 py-2 bg-gray-100">
      <form className="flex justify-between items-center flex-row">
        <input
          className="outline-none w-full bg-gray-100"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
        />
        <button
          className="bg-blue-200 py-2 px-8 rounded-full"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            router.push(`/verses?${createQueryString(query)}`);
          }}
        >
          <FaMagnifyingGlass />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;