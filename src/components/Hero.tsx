import Link from "next/link"

const Hero = () => {
  return (
    <section className="w-full flex justify-center items-center h-[80vh]">
      <div className="max-w-[800px] flex items-center justify-center flex-col gap-5">
        <div className="font-semibold font-body text-dark-purple dynamic-text">
          Explore Verbum
        </div>
        <h3 className="w-full leading-[5rem] font-bold text-center font-body mb-5 dynamic-title">
          Let&apos;s Find The{" "}
          <span className="text-soft-purple underline">Verse</span>
          <br />
          You&apos;re Missing
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
