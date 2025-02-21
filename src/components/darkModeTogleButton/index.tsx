import React, { useState, useEffect } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export function DarkModeToggle() {
 
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
        onClick={() => setDarkMode((prev: boolean) => !prev)}
        className=" hover:text-gray-300 transition-colors"
    >
      {darkMode ? (
        <MdOutlineLightMode  className="text-white text-xl   hover:text-gray-400 transition-colors" />
      ) : (
        <MdOutlineDarkMode className=" text-neutral-900 text-xl hover:text-neutral-500 ansition-colors"  />
      )}
    </button>
  );
};
