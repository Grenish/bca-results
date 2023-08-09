import React from "react";
import { developers } from "../constants";
import { Link } from "react-router-dom";

const Developers = () => {
  return (
    <div className="bg-gradient-to-br from-lavender to-[#d0b8ac]">
      <Link to="/">Go Back</Link>
      <div className="h-screen flex p-5  flex-col justify-center items-center ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {developers.map((developer, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center transform hover:scale-105 transition-transform"
            >
              <img
                src={developer.image}
                alt={developer.name}
                className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-blue-500"
              />
              <h3 className="text-xl font-bold text-blue-700">
                {developer.name}
              </h3>
              <div className="">
                <a href={developer.github} target="_blank">Github</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Developers;
