// hooks/useDeleteComment.js
import { deleteComment } from "../../services/postServices";
import { toast } from "react-hot-toast";

export const useDeleteComment = (post, setPosts, token) => {
  const deleteExistingComment = async (commentId) => {
    if (!post || !token) return;

    try {
      await deleteComment(commentId, token);
      setPosts((prev) =>
        prev.map((p) =>
          p.id === post.id
            ? { ...p, comments: p.comments.filter((c) => c.id !== commentId) }
            : p
        )
      );
      toast.success("Comment deleted successfully");
    } catch (err) {
      toast.error(err.message || "Failed to delete comment");
    }
  };

  return { deleteExistingComment };
};
