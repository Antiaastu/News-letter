import React, { useState } from "react";
import { FaEdit, FaTrash, FaCheck, FaTimes } from "react-icons/fa";

const CommentItem = ({ comment, currentUserId, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(comment.text);

  const handleSave = () => {
    if (!editText.trim()) return;
    onUpdate(comment.id, editText);
    setIsEditing(false);
  };

  return (
    <div className="flex items-start space-x-3 sm:space-x-4">
      <img
        src={comment.avatar}
        alt={comment.author}
        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
      />
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
              {comment.author}
            </span>
            <span className="text-xs text-gray-400">{comment.date}</span>
          </div>

          {/* Show buttons only if comment belongs to current user */}
          {comment.user_id === currentUserId && (
            <div className="flex gap-2 text-gray-400">
              {isEditing ? (
                <>
                  <button onClick={handleSave} className="text-green-600 hover:text-green-800">
                    <FaCheck size={14} />
                  </button>
                  <button onClick={() => setIsEditing(false)} className="text-red-600 hover:text-red-800">
                    <FaTimes size={14} />
                  </button>
                </>
              ) : (
                <>
                  <button onClick={() => setIsEditing(true)} className="hover:text-blue-500">
                    <FaEdit size={14} />
                  </button>
                  <button onClick={() => onDelete(comment.id)} className="hover:text-red-500">
                    <FaTrash size={14} />
                  </button>
                </>
              )}
            </div>
          )}
        </div>

        {isEditing ? (
          <textarea
            className="w-full mt-1 border border-gray-300 dark:border-gray-700 rounded-lg px-2 py-1 text-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
            rows={2}
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
        ) : (
          <p className="text-gray-700 dark:text-gray-200 text-sm sm:text-base">{comment.text}</p>
        )}
      </div>
    </div>
  );
};

export default CommentItem;
