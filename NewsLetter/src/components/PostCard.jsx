import React from "react";
import LikeButton from "./LikeButton";
import { motion } from "framer-motion";

const PostCard = ({ title, excerpt, likes, index }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between p-5 sm:p-6 hover:scale-[1.02] transform"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true }}
    >
      <div>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-4">
          {excerpt}
        </p>
      </div>

      <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-200 dark:border-gray-700">
        <LikeButton initialLikes={likes} />
        <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500 hover:bg-blue-600 text-white text-xs sm:text-sm rounded-full shadow-md transition-colors duration-200">
          View Details
        </button>
      </div>
    </motion.div>
  );
};

export default PostCard;