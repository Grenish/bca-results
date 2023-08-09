import React from "react";
import { developers } from "../constants";
import { Link } from "react-router-dom";
import { github } from "../assets";

const Developers = () => {
  return (
    <div className="bg-gray-200">
      <Link to="/" className="p-2">Go Back</Link>
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
                <a href={developer.github} target="_blank">
                  <img src={github} alt="github" className="w-5 h-5 object-cover my-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3">
          <a href="https://exsolve.netlify.app/" target="_blank" className="text-gray-400"> Exsolve</a>
        </div>
      </div>
    </div>
  );
};

export default Developers;
