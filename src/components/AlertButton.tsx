'use client';

import { MouseEvent } from "react";

interface AlertButtonProps {
  children: React.ReactNode;
}

const AlertButton: React.FC<AlertButtonProps> = ({ children }) => {
    const handleBooksClick = (e : MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        alert("Uh oh! It looks like this is still in development.");
      };

  return (
    <a href="" onClick={handleBooksClick}>
      {children}
    </a>
  )
}

export default AlertButton