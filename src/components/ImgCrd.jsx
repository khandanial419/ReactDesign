import React from "react";
import img from "../assets/dp.png";
import { FaStar } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
const ImgCrd = () => {
  return (
    <>
      <div className="grid grid-cols-1  md:grid-cols-12 md:gap-10 md:p-6">
        {/* First Card */}
        <div className="bg-[#3A526D] shadow-lg rounded-[20px] p-4 col-span-12 md:col-span-8 mx-auto mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* First Column */}
            <div className="flex items-center justify-center">
              <img
                src={img}
                alt="Placeholder"
                className="rounded-full w-[214px] h-[214px]"
              />
            </div>
            {/* Second Column */}
            <div className="flex flex-col gap-2 mt-5">
              <div className="text-lg font-semibold text-white">
                Fiza Mohsin Bookshell
              </div>
              <div className="text-white flex items-center">
                <FaStar color="#EA9413" className="mr-2" /> 4.5
                <span className="text-gray-400 ml-2">2000+ ratings</span>
              </div>
              <div className="text-gray-400 text-[10px]">
                We are so pleased to have you join the many other artists who
                are working so hard to advance their career. Your fans love your
                music and now they can support you directly through TipJar
                Music.
              </div>
            </div>
            {/* Third Column */}
            <div className="flex flex-col gap-5 mt-5">
              <div
                className="text-white p-3 rounded-lg"
                style={{
                  background:
                    "linear-gradient(180deg, #001834 25%, #062548 50%, #001834 75%, #001834 100%)",
                }}
              >
                <span className="text-gray-400 mr-2">Total Books:</span> 125
              </div>
              <div
                className="text-white p-3 rounded-lg"
                style={{
                  background:
                    "linear-gradient(180deg, #001834 25%, #062548 50%, #001834 75%, #001834 100%)",
                }}
              >
                <span className="text-gray-400 mr-2">Total Reads:</span> 400k
              </div>
            </div>
          </div>
        </div>
        {/* Second Card */}
        <div className="bg-[#3A526D] shadow-lg rounded-[20px] p-4 col-span-12 md:col-span-4 mx-auto mt-10 flex items-center justify-center">
          <div className="text-center">
            <div className="text-center">
              <div className="flex justify-center hover:cursor-pointer items-center text-lg font-semibold text-white mb-2">
                <FiUpload color="#EA9413" size={30} />
              </div>
            </div>

            <div className="text-white mb-2">Upload Books</div>
            <div className="text-gray-400 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full border-t border-gray-500 my-10 p-4 mx-auto" />
    </>
  );
};

export default ImgCrd;
