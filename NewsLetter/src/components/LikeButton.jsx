import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { usePosts } from "../context/PostsContext";

const LikeButton = ({ postId }) => {
  const { posts, likedPosts, toggleLike } = usePosts();
  const post = posts.find((p) => p.id === postId);
  const liked = likedPosts[postId] || false;

  return (
    <button
      onClick={() => toggleLike(postId)}
      className="flex items-center text-sm sm:text-base text-gray-500 dark:text-gray-400 hover:opacity-80 transition"
    >
      <FaHeart
        className={`mr-1 text-lg sm:text-xl transition-colors duration-200 ${
          liked ? "text-red-500" : "text-gray-400"
        }`}
      />
      {post.likes} Likes
    </button>
  );
};

export default LikeButton;