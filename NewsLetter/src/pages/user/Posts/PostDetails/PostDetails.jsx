import React, { useState } from "react"
import { useParams } from "react-router-dom"
import { usePosts } from "../../../../context/PostsContext"
import PostHeader from "./PostHeader"
import PostComments from "./PostComments"
import CommentForm from "./CommentForm"
import { useAddComment } from "../../../../hooks/comments/useAddComments"
import { useUpdateComment } from "../../../../hooks/comments/useUpdateComment"
import { useDeleteComment } from "../../../../hooks/comments/useDeleteComment"

const COMMENTS_PER_PAGE = 3

const PostDetails = () => {
  const { id } = useParams()
  const { posts, setPosts } = usePosts()
  const post = posts.find((p) => String(p.id) === String(id))

  const [visibleCount, setVisibleCount] = useState(COMMENTS_PER_PAGE);
  const [comment, setComment] = useState("");

  const currentUser = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  const visibleComments =
    post?.comments?.slice(0, visibleCount).map((c) => ({
      id: c.id,
      user_id: c.user_id,
      author: c.user?.name || "Unknown",
      avatar: c.user?.profile_picture || `https://ui-avatars.com/api/?name=${c.user?.name || "U"}`,
      date: new Date(c.created_at).toLocaleString(),
      text: c.body,
    })) || [];
  const { addNewComment } = useAddComment(post, setPosts, token);
  const { updateExistingComment } = useUpdateComment(post, setPosts, token);
  const { deleteExistingComment } = useDeleteComment(post, setPosts, token);
  

  if(!post){
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto bg-gray-100 dark:bg-gray-900 p-5 sm:px-8 ">
      <PostHeader post={post} commentCount={post.comments.length} />
      <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white ">
        Comments
      </h2>
      <PostComments
        comments={visibleComments}
        currentUserId={currentUser?.id}
        canSeeMore={visibleCount < post.comments.length}
        onSeeMore={() => setVisibleCount((c) => c + COMMENTS_PER_PAGE)}
        onUpdate={updateExistingComment}
        onDelete={deleteExistingComment}
      />
      <CommentForm
        comment={comment} 
        setComment={setComment} 
        onSubmit={() => addNewComment(comment, setComment)} 
       />
    </div>
  );
};
export default PostDetails;
