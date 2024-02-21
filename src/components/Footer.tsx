import CallOut from "./CallOut"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="relative bg-dark-purple mt-24 pt-40 py-12 w-full">
        <div className="absolute max-w-[1200px]
        top-[5%] left-1/2 transform -translate-x-1/2 -translate-y-[45%]">
            <CallOut />
        </div>
        <div className="flex flex-col justify-center items-center gap-14 mt-28">
            <div className="flex flex-col gap-2">
                <h3 className="text-5xl font-semibold text-white dynamic-heading text-center">Sounding Intersting?</h3>
                <p className="text-xl text-white text-center dynamic-text">Try out Verbum and navigate the word with ease!</p>
            </div>
            <a className="py-4 px-6 rounded-md accent-button hover-scale mr-2" href="/verses">
                Exlpore Verses
            </a>
            <div className="">
                <p className="text-center text-white">© 2024 All rights reserved.</p>
                <p className="text-center text-white">Built by Coder27!</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer