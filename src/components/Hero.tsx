import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full flex justify-center items-center h-[100vh]">
      <div className="max-w-[800px] flex items-center justify-center flex-col gap-5">
        <div className="flex flex-col justify-center items-center gap-y-3">
          <div className="px-2 py-1 rounded-full ring-1 ring-gray-500 text-gray-500 dynamic-small bg-gray-100/80">
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
          You&apos;re{" "}
          <span className="relative">
            Missing
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-soft-purple/70"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z">
              </path>
            </svg>
          </span>
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
