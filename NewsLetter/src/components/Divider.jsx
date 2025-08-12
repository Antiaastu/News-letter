import React from "react";

const Divider = () => {
  return (
    <div className="flex items-center gap-2">
      <span className="flex-1 h-px bg-gray-300"></span>
      <span className="text-sm text-gray-500">or</span>
      <span className="flex-1 h-px bg-gray-300"></span>
    </div>
  );
};

export default Divider;
