import { addComment } from "../../services/postServices";
import { toast } from "react-hot-toast";

export const useAddComment = (post, setPosts, token) => {
  const addNewComment = async (commentText, resetComment) => {
    if (!commentText.trim() || !token || !post) return;

    try {
      const newComment = await addComment(post.id, commentText, token);
      setPosts((prev) =>
        prev.map((p) =>
          p.id === post.id ? { ...p, comments: [...(p.comments || []), newComment] } : p
        )
      );
      resetComment("")
      toast.success("Comment added successfully");
    } catch (err) {
      toast.error(err.message || "Failed to add comment");
    }
  };

  return { addNewComment };
};