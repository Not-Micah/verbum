'use client';

import { MouseEvent } from "react";

const AlertButton = ({ text } : { text : string }) => {
    const handleBooksClick = (e : MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        alert("Uh oh! It looks like this is still in development.");
      };

  return (
    <a href="" onClick={handleBooksClick}>Books</a>
  )
}

export default AlertButton