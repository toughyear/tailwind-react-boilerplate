import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl">
      <div className="ml-6 pt-1">
        <h1 className="text-2xl text-blue-700 leading-tight text-center">
          Tailwind and Create React App
        </h1>
        <p className="text-base text-gray-700 leading-normal text-center">
          A complete boilerplate for your next tailwind and React project!
        </p>
        <div>
          <img src={logo} alt="Tailwind and Create React App" />
        </div>
      </div>
    </div>
  );
}

export default App;
