import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Verbum",
  description: "An online tool to filter and find the bible verse you need for encouragement.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <NavBar />
        <div className="w-full relative">
          {children}
           {/* ............................................. */}
          <div className="circle circle-lg bg-soft-pink left-[7rem] top-[-5rem]"></div>
          <div className="circle circle-md bg-soft-gold left-[20rem] top-[7rem]"></div>
          <div className="circle circle-md bg-soft-gold left-[30rem] top-[6rem]"></div>
          <div className="circle circle-sm bg-soft-gold left-[40rem] top-[14rem]"></div>
          <div className="circle circle-md bg-soft-pink left-[44rem] top-[3rem]"></div>
          <div className="circle circle-lg bg-soft-pink left-[48rem] top-[-10rem]"></div>
          <div className="circle circle-md bg-soft-gold left-[65rem] top-[-8rem]"></div>
          {/* ............................................. */}
          <div className="circle circle-lg bg-soft-pink right-[-3rem] top-[45rem]"></div>
          <div className="circle circle-md bg-soft-gold right-[12rem] top-[40rem]"></div>
          <div className="circle circle-md bg-soft-gold right-[22rem] top-[36rem]"></div>
          <div className="circle circle-sm bg-soft-pink right-[35rem] top-[43rem]"></div>
          <div className="circle circle-md bg-soft-gold right-[42rem] top-[46rem]"></div>
          <div className="circle circle-lg bg-soft-pink right-[52rem] top-[37rem]"></div>
        </div>
      </body>
    </html>
  );
}
