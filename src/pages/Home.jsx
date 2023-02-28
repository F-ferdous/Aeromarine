import React from "react";
import logo from "../data/logo-black.png";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a
        href="#"
        className="flex items-center mb-6 text-xl font-semibold text-gray-900 dark:text-white"
      >
        <img className="w-8 h-8 mr-2" src={logo} alt="logo" />
        Partex Aeromarine Logistics Ltd.
      </a>
      <div className="w-full bg-[#FF5C8E] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-4 space-y-2 md:space-y-4 sm:p-6">
          <h1 className="text-md font-bold text-center leading-tight tracking-tight text-gray-100 md:text-xl dark:text-white">
            Click an Option to Continue
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
