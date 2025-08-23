import React from "react"
import CommentItem from "./CommentItem"

const PostComments = ({ comments, onSeeMore, canSeeMore, currentUserId, onUpdate, onDelete }) => (
  <div className="space-y-4 sm:space-y-6 mb-6">
    {comments.map((c) => (
      <CommentItem
        key={c.id}
        comment={c}
        currentUserId={currentUserId}
        onUpdate={onUpdate}
        onDelete={onDelete}
      />
    ))}
    {canSeeMore && (
      <button
        onClick={onSeeMore}
        className="text-blue-600 dark:text-blue-400 hover:underline text-xs sm:text-sm font-medium"
      >
        See more comments
      </button>
    )}
  </div>
)

export default PostComments