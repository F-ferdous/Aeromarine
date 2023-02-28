import React from "react";

const TextInput = ({ label, ...rest }) => {
  return (
    <div className="flex flex-col w-full md:w-1/3 px-3 pb-3 pt-2">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        {label}
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        {...rest}
      />
    </div>
  );
};

export default TextInput;
