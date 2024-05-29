import React from "react";
import { FaStar } from "react-icons/fa";

const Card = ({
  imageSrc,
  title,
  description,
  iconTxt,
  buttonText,
  catrogyTxt,
}) => {
  return (
    <div className="  bg-transparent rounded-xl shadow-md overflow-hidden ">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-auto w-full object-cover md:w-48"
            src={imageSrc}
            alt="Card"
          />
        </div>
        <div className="p-3 md:mt-0 mt-3 md:w-full">
          <div className="uppercase mt-3 tracking-wide text-[25px] text-white font-semibold">
            {title}
          </div>
          <p className="mt-2 text-[18px] text-white">{description}</p>
          <div className="text-white flex items-center mt-2">
            <FaStar color="#EA9413" className="mr-2" />
            <span className="text-white">{iconTxt}</span>
          </div>
          <p className="mt-5  text-white md:mb-0 text-sm ">
            Category: {catrogyTxt}
          </p>
          <button className="bg-[#E1A914] mt-12 hover:bg-[#E1A800] rounded-[20px] md:w-[130px] w-[100px] text-white font-bold py-2 px-4">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
