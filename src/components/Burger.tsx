import { useState } from "react";

export const Burger = () => {
  const [isDisplay, setIsDisplay] = useState(false);

  const toggleBurger = () => {
    setIsDisplay(!isDisplay);
  };

  return (
    <div className="flex gap-10">
      <svg
        id="hamburger"
        className="hamburger mt-2 cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        width="72"
        height="61"
        viewBox="0 0 72 61"
        fill="none"
        onClick={toggleBurger}
      >
        <path
          className={isDisplay ? "animate-down-rotate" : ""}
          id="top-line"
          d="M0 2.5H72"
          stroke="#E6007E"
          strokeWidth="5"
        ></path>
        <path
          className={isDisplay ? "animate-hide" : ""}
          id="middle-line"
          d="M0 30.5H72"
          stroke="#7B549E"
          strokeWidth="5"
        ></path>
        <path
          className={isDisplay ? "animate-up-rotate" : ""}
          id="bottom-line"
          d="M0 58.5H72"
          stroke="#0052A1"
          strokeWidth="5"
        ></path>
      </svg>
      {isDisplay && (
        <ul className="flex-col gap-4">
          <li className="xl:px-8">
            <a href="#intro">Intro</a>
          </li>
          <li className="xl:pl-8 xl:pr-4 xl:border-l-2 xl:border-viaduc-pink">
            <a href="#galery">Galerie</a>
          </li>
          <li className="xl:pl-8 xl:pr-4 xl:border-l-2 xl:border-viaduc-indigo">
            <a href="#evening">Soirées</a>
          </li>
          <li className="xl:pl-8 xl:pr-4 xl:border-l-2 xl:border-viaduc-blue">
            <a href="#schedule">Horaires</a>
          </li>
        </ul>
      )}
    </div>
  );
};
