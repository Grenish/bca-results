import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const mode = localStorage.getItem("darkMode");
    return mode ? JSON.parse(mode) : false;
  });

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <nav className=" flex items-center justify-between bg-gradient-to-r from-oxBlue to-indigo-800 p-4 shadow-md relative w-full">
      <div className="text-white text-4xl font-bold">
        <div className="name-text">Results</div>
      </div>
      <div className="flex items-center ml-4">
        <label htmlFor="darkModeSwitch" className="text-white mr-2">
          {darkMode ? "Light Mode" : "Dark Mode"}
        </label>
        <label className="switch">
          <input
            type="checkbox"
            id="darkModeSwitch"
            className="form-checkbox h-0 w-0 hidden"
            checked={darkMode}
            onChange={() => setDarkMode((prev) => !prev)}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
