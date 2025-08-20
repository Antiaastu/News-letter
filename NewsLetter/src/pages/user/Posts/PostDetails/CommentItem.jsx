import React from "react";

const CommentItem = ({ comment }) => (
  <div className="flex items-start space-x-3 sm:space-x-4">
    <img
      src={comment.avatar}
      alt={comment.author}
      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
    />
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <span className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
          {comment.author}
        </span>
        <span className="text-xs text-gray-400">{comment.date}</span>
      </div>
      <p className="text-gray-700 dark:text-gray-200 text-sm sm:text-base">
        {comment.text}
      </p>
    </div>
  </div>
);

export default CommentItem;
