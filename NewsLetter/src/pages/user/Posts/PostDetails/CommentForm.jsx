import React from "react";

const CommentForm = ({ comment, setComment }) => (
  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
    <h3 className="text-sm sm:text-md font-semibold text-gray-900 dark:text-white mb-2">
      Add a comment
    </h3>
    <div className="flex flex-col sm:flex-row items-stretch sm:items-end gap-2">
      <textarea
        className="flex-1 border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-800 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
        rows={2}
        placeholder="Share your thoughts..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-5 py-2 rounded-lg font-semibold transition text-sm sm:text-base"
        disabled={!comment.trim()}
      >
        Post Comment
      </button>
    </div>
  </div>
);

export default CommentForm;
