import CallOut from "./CallOut"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="relative bg-dark-purple mt-24 pt-40 py-12 w-full">
        <div className="absolute w-full top-[5%] transform -translate-y-[45%] max-sm:top-[0%] flex justify-center items-center">
            <div className="mx-6 max-w-[1200px]">
                <CallOut />
            </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-14 mt-28">
            <div className="flex flex-col gap-2 mx-5">
                <h3 className="dynamic-heading font-semibold text-white text-center">Sounding Intersting?</h3>
                <p className="dynamic-text text-white text-center dynamic-text">Try out Verbum and navigate the word with ease!</p>
            </div>
            <Link className="dynamic-text py-3 px-4 rounded-md accent-button hover-scale mr-2" href="/verses">
                Exlpore Verses
            </Link>
            <div className="">
                <p className="dynamic-text text-center text-white">© 2024 All rights reserved.</p>
                <p className="dynamic-text text-center text-white">Built by <a href="https://micahdev.vercel.app/" className="underline">Micah Tid</a></p>
            </div>
        </div>
    </footer>
  )
}

export default Footer