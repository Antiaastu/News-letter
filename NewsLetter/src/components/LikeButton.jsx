import React, { useState } from "react"
import { FaHeart } from "react-icons/fa"
import { usePosts } from "../context/PostsContext"
import toast from "react-hot-toast"

const LikeButton = ({ postId }) => {
  const { posts, likedPosts, toggleLike } = usePosts()
  const post = posts.find((p) => p.id === postId)
  if(!post){
    // toast.error("Post not found")
    return null
  }
  const user = JSON.parse(localStorage.getItem("user"))
  const liked = user ? likedPosts[postId] || false : false

  return (
    <button
      onClick={() => toggleLike(postId)}
      className="flex items-center text-sm sm:text-base text-gray-500 dark:text-gray-400 hover:opacity-80 transition"
    >
      <FaHeart
        className={`mr-1 text-lg sm:text-xl transition-colors duration-200 ${
          user && liked ? "text-red-500" : "text-gray-400"
        }`}
      />
      {post.likes.length} Likes
    </button>
  );
};

export default LikeButton;