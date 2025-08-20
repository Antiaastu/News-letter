import React from "react";
import LikeButton from "../../../../components/LikeButton";
import { FaComment } from "react-icons/fa";

const PostHeader = ({ post, commentCount }) => (
  <>
    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
      {post.title}
    </h1>
    <div className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mb-4">
      {post.dateCreated || "Unknown date"}
    </div>
    {post.excerpt && (
      <div className="text-gray-800 dark:text-gray-200 text-sm sm:text-base mb-4">
        {post.excerpt}
      </div>
    )}
    <div className="flex flex-wrap items-center gap-4 border-b border-gray-200 dark:border-gray-700 pb-4 mb-6">
      <LikeButton postId={post.id} />
      <span className="text-gray-500 dark:text-gray-400 text-sm flex items-center">
        <FaComment size={18} className="mr-1 text-gray-400" />
        {commentCount} Comments
      </span>
    </div>
  </>
);

export default PostHeader;
