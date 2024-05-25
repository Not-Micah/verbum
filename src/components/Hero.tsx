import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full flex justify-center items-center h-[80vh]">
      <div className="max-w-[800px] flex items-center justify-center flex-col gap-5">
        <div className="flex flex-col justify-center items-center gap-y-3">
          <div className="px-2 py-1 rounded-full ring-1 ring-gray-500 text-gray-500 dynamic-small bg-gray-100/30">
            Still in beta!
          </div>
          <div className="font-semibold font-body text-dark-purple dynamic-text">
            Explore Verbum
          </div>
        </div>
        <h3 className="w-full leading-[5rem] font-bold text-center font-body mb-5 dynamic-title">
          Let&apos;s Find The{" "}
          <span
            style={{
              background: "linear-gradient(to bottom, #AB8FE6, #CEA7E0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className=""
          >
            Verse
          </span>
          <br />
          You&apos;re <span className="underline">Missing</span>
        </h3>
        <p className="dynamic-text font-body text-center text-gray-500 mb-5 mx-10 sm:mx-24">
          Verbum is a tool to simplify the process of finding the right verse
          you&apos;re looking for. With our large database of verses and
          filters, searching is made easy.
        </p>
        <Link
          className="primary-button dynamic-text hover-scale rounded-[5px] py-3 px-4 shadow-xl"
          href="/verses"
        >
          Filter Verses
        </Link>
      </div>
    </section>
  );
};

export default Hero;
