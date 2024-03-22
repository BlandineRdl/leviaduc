import React, { useState } from "react";

type CarouselProps = {
  slides: string[];
};

export default function Carousel({ slides }: CarouselProps) {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  console.log({ slides });

  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s) => {
          return (
            <img
              key={s}
              src={s}
              alt="Affiche de soirées"
              className="object-cover"
            />
          );
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-2 text-3xl">
        <button onClick={previousSlide}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="63"
            height="74"
            viewBox="0 0 63 74"
            fill="none"
          >
            <path
              d="M5.00845e-07 37L63 0.626939L63 73.3731L5.00845e-07 37Z"
              fill="#D9D9D9"
              fillOpacity="0.7"
            />
          </svg>
        </button>
        <button onClick={nextSlide}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="63"
            height="74"
            viewBox="0 0 63 74"
            fill="none"
          >
            <path
              d="M63 37L-3.4258e-06 73.3731L-2.45961e-07 0.626931L63 37Z"
              fill="#D9D9D9"
              fillOpacity="0.7"
            />
          </svg>
        </button>
      </div>

      <div className="absolute -top-10 flex justify-center gap-3 w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-2 h-2 cursor-pointer  ${
                i == current ? "bg-viaduc-black" : "bg-white"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
