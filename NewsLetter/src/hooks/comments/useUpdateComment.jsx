// hooks/useUpdateComment.js
import { updateComment } from "../../services/postServices";
import { toast } from "react-hot-toast";

export const useUpdateComment = (post, setPosts, token) => {
  const updateExistingComment = async (commentId, body) => {
    if (!post || !token) return;

    try {
      await updateComment(commentId, body, token);
      setPosts((prev) =>
        prev.map((p) =>
          p.id === post.id
            ? {
                ...p,
                comments: p.comments.map((c) =>
                  c.id === commentId ? { ...c, body } : c
                ),
              }
            : p
        )
      );
      toast.success("Comment updated successfully");
    } catch (err) {
      toast.error(err.message || "Failed to update comment");
    }
  };

  return { updateExistingComment };
};
