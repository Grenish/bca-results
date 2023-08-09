import React from "react";
import { Link } from "react-router-dom";
import { resultsPng, gpa1, developerPng } from "../assets";

const Home = () => {
  return (
    <div className="w-full p-4  bg-lavender h-screen flex flex-col justify-center items-center">
      <div className="checkResults mb-6">
        <Link to="/results">
          <div className="bg-oxBlue w-[300px] md:w-[400px] hover:bg-indigo-800 text-white py-4 px-6 md:px-10 rounded-lg shadow-md transition-colors duration-300 ease-in-out transform hover:scale-105 flex items-center justify-between space-x-2">
            <div className="flex items-center gap-2 md:gap-3">
              <img
                src={resultsPng}
                alt="Results"
                className="w-5 h-5 md:w-6 md:h-6 object-contain"
              />
              <span className="text-base md:text-lg">Check Your Results</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 md:h-5 md:w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </Link>
      </div>

      <div className="mb-6">
        <Link to="/gpa">
          <div className="bg-oxBlue w-[300px] md:w-[400px] hover:bg-indigo-800 text-white py-4 px-6 md:px-10 rounded-lg shadow-md transition-colors duration-300 ease-in-out transform hover:scale-105 flex items-center justify-between space-x-2">
            <div className="flex items-center gap-2 md:gap-3">
              <img
                src={gpa1}
                alt="Developers"
                className="w-5 h-5 md:w-6 md:h-6 object-contain"
              />
              <span className="text-base md:text-lg">Check GPA</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 md:h-5 md:w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </Link>
      </div>

      <div className="developers">
        <Link to="/developers">
          <div className="bg-oxBlue w-[300px] md:w-[400px] hover:bg-indigo-800 text-white py-4 px-6 md:px-10 rounded-lg shadow-md transition-colors duration-300 ease-in-out transform hover:scale-105 flex items-center justify-between space-x-2">
            <div className="flex items-center gap-2 md:gap-3">
              <img
                src={developerPng}
                alt="Developers"
                className="w-5 h-5 md:w-6 md:h-6 object-contain"
              />
              <span className="text-base md:text-lg">Developers</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 md:h-5 md:w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
