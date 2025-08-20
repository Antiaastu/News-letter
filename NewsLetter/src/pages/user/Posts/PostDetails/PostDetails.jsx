import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { usePosts } from "../../../../context/PostsContext";
import PostHeader from "./PostHeader";
import PostComments from "./PostComments";
import CommentForm from "./CommentForm";

const COMMENTS_PER_PAGE = 2;

const PostDetails = () => {
  const { id } = useParams();
  const { posts } = usePosts();
  const post = posts.find((p) => String(p.id) === String(id));
  const allComments = post?.comments || [
    {
      id: 1,
      author: "Sophia Clark",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      date: "2 days ago",
      text:
        "This is a great overview of how AI is changing software development. I'm particularly excited about the potential for AI to help with debugging.",
    },
    {
      id: 2,
      author: "Ethan Miller",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      date: "1 day ago",
      text:
        "I agree, the automation of repetitive tasks is a game-changer. It frees up developers to focus on more creative and strategic aspects of their work.",
    },
    {
      id: 3,
      author: "Liam Smith",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      date: "1 day ago",
      text: "Great article! Looking forward to seeing how AI evolves in this space.",
    },
    {
      id: 4,
      author: "Olivia Brown",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      date: "12 hours ago",
      text: "Very insightful. Thanks for sharing!",
    },
    {
      id: 5,
      author: "Olivia Brown",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      date: "7 hours ago",
      text: "Very insightful. Thanks for sharing!",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(COMMENTS_PER_PAGE);
  const visibleComments = allComments.slice(0, visibleCount);
  const [comment, setComment] = useState("");

  if (!post) {
    return (
      <div className="flex justify-center items-center h-96 text-gray-500">
        Post not found.
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow p-5 sm:p-8 mt-6 sm:mt-10">
      <PostHeader post={post} commentCount={allComments.length} />
      <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4">
        Comments
      </h2>
      <PostComments
        comments={visibleComments}
        canSeeMore={visibleCount < allComments.length}
        onSeeMore={() => setVisibleCount((c) => c + COMMENTS_PER_PAGE)}
      />
      <CommentForm comment={comment} setComment={setComment} />
    </div>
  );
};

export default PostDetails;
