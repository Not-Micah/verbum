import Link from "next/link"

const HeroContent = () => {
  return (
    <div
      className="max-w-[800px] flex items-center justify-center flex-col gap-5"
    >
      <div className="font-semibold font-body text-dark-purple dynamic-text">
      Explore Verbum
      </div>
      <h3 className="w-full leading-[5rem] font-bold text-center font-body mb-5 dynamic-title">
        Let's Find The <span className="text-soft-purple underline">Verse</span><br />
        You're Missing
      </h3>
      <p className="dynamic-text font-body text-center text-gray-500 mb-5 mx-10 sm:mx-24">
        Verbum is a tool to simplify the process of finding the right verse you're looking for. With our large database of verses and filters, searching is made easy.
      </p>
      <a className="primary-button dynamic-text hover-scale rounded-[5px] py-[10px] px-[15px] shadow-xl" href="/verses">
        Filter Verses
      </a>
    </div>
  );
};

export default HeroContent;
