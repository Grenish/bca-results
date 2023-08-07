import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full p-4 bg-gradient-to-br from-lavender to-[#d0b8ac] min-h-screen flex flex-col justify-center items-center">
      <div className="checkResults mb-6">
        <Link to="/results">
          <button className="bg-oxBlue hover:bg-blue-600 text-white py-3 px-8 rounded-xl shadow-md transition-colors duration-300 ease-in-out transform hover:scale-105">
            Check Results
          </button>
        </Link>
      </div>

      <div className="developers">
        <Link to="/developers">
          <button className="bg-oxBlue hover:bg-blue-600 text-white py-3 px-8 rounded-xl shadow-md transition-colors duration-300 ease-in-out transform hover:scale-105">
            Developers
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
