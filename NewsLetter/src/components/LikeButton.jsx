import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

const LikeButton = ({ initialLikes }) => {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center text-sm sm:text-base text-gray-500 dark:text-gray-400 hover:opacity-80 transition"
    >
      <FaHeart
        className={`mr-1 text-lg sm:text-xl transition-colors duration-200 ${
          liked ? "text-red-500" : "text-gray-400"
        }`}
      />
      {initialLikes + (liked ? 1 : 0)} Likes
    </button>
  );
};

export default LikeButton;
