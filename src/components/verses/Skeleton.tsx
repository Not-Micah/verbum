import React from "react";
import TopicBadge from "../TopicBadge";

const Skeleton = () => {
  return (
    <div className="px-10 py-8 shadow-md rounded-md bg-white flex flex-col items-start justify-center gap-4 w-full h-[15rem] animate-pulse">
      <h3 className="skeleton w-full">.</h3>
      {Array(4)
        .fill(null)
        .map((t, index) => (
          <p className="skeleton w-full text-[0.2rem]" key={index}>.</p>
        ))}
      <div className="flex flex-row flex-wrap justify-start items-center gap-2">
        {Array(3)
          .fill(null)
          .map((t, index) => (
            <div className="w-[2rem] h-[1rem] skeleton" key={index}></div>
          ))}
      </div>{" "}
    </div>
  );
};

export default Skeleton;

{
  /* <div className="w-full h-[1rem] bg-gray-500"></div>
<div className="flex flex-col justify-start items-start gap-2">
{Array(4)
    .fill(null)
    .map((t) => (
      <div className="w-full h-[1rem] bg-gray-500"></div>
    ))}
</div>
<div className="flex flex-row flex-wrap justify-start items-center gap-2">
  {Array(3)
    .fill(null)
    .map((t) => (
      <div className="w-[2rem] h-[0.25rem] bg-gray-500"></div>
    ))}
</div> */
}
