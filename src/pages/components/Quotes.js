import React from "react";
import Marquee from "react-fast-marquee";

export default function Quotes() {
  return (
    <div className="flex justify-center w-auto">
      <Marquee gradient={false} speed={80}>
        <h1
          className="text-[#ffffff] text-2xl font-bold m-[3em] mb-[2em] "
          id="quote"
        >
          <i>
          &quot;Do not follow where the path may lead. Go instead where there is
            not path and leave a trail&quot;
          </i>
          - Ralph Waldo Emerson
        </h1>
      </Marquee>
    </div>
  );
}
