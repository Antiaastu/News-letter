import React from "react";
import { usePosts } from "../context/PostsContext";
import { motion } from "framer-motion";
import LikeButton from "./LikeButton";
import { useNavigate } from "react-router-dom";
import { FaEye, FaRegCommentDots } from "react-icons/fa";

const PostCard = ({ post, index }) => {
  const navigate = useNavigate();

  const thumbnail =
    post.image && post.image.trim() !== ""
      ? post.image
      : `https://picsum.photos/id/${post.id || index}/200/200`

  return (
    <motion.div
      className="bg-gray-100 dark:bg-gray-900 rounded-2xl transition-shadow duration-300 flex flex-col justify-between px-5 sm:p-6 hover:scale-[1.02] transform"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true }}
    >
      <div
        className="flex items-start justify-between cursor-pointer"
        onClick={() => navigate(`/posts/${post.id}`)}
      >
        {/* Left side - Text */}
        <div className="flex-1 pr-5">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100 line-clamp-2">
            {post.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mt-3 pr-6 line-clamp-2">
            {post.body.length > 100
              ? post.body.substring(0, 100) + "..."
              : post.body}
          </p>
        </div>
        <img
          src={thumbnail}
          alt={post.title}
          className="w-20 h-20 rounded-md object-cover flex-shrink-0"
        />
      </div>
      {/* Metadata row */}
      <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-2 space-x-4">
        <span>{new Date(post.created_at).toLocaleDateString()}</span>
        <LikeButton postId={post.id} />
        <span className="flex items-center space-x-1">
          <FaRegCommentDots className="w-3 h-3" />
          <span>{post.comments?.length || "0"}</span>
        </span>
      </div>
      {/* Divider */}
      <div className="border-t border-gray-400 dark:border-gray-700 mt-6"></div>
      
    </motion.div>
  );
};

export default PostCard;
