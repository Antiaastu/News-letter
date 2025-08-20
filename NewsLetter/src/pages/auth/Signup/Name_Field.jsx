import React from "react";

const Name_Field = ({label, type, placeholder, value, onChange}) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-bold text-gray-600 dark:text-gray-300">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="p-2 mt-1 rounded-md bg-gray-100 dark:bg-gray-600 
                   border border-gray-300 dark:border-gray-500 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 
                   placeholder:font-bold placeholder:text-sm"
      />
    </div>
  );
};

export default Name_Field;
