import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import PostCard from "../../../components/PostCard";

const posts = [
  {
    id: 1,
    title: "Post Title 1",
    excerpt: "This is a short excerpt of the first post content...",
    likes: 123,
  },
  {
    id: 2,
    title: "Post Title 2",
    excerpt: "This is a short excerpt of the second post content...",
    likes: 87,
  },
  {
    id: 3,
    title: "Post Title 3",
    excerpt: "This is a short excerpt of the third post content...",
    likes: 201,
  },
];

const RecentPosts = () => {
  const [likedPosts, setLikedPosts] = useState({});

  const handleLike = (postId) => {
    setLikedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId], 
    }));
  };

  return (
    <section className="py-12 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
          Recent Posts
        </h2>

        {/* Responsive grid */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post,idx) => (
            <PostCard 
            key={post.id}
            title={post.title}
            excerpt={post.excerpt}
            likes={post.likes}
            index={idx}
            />
            ))}
        </div>

        {/* See More Button */}
        <div className="mt-10 flex justify-center">
          <button className="px-5 sm:px-6 py-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-200 shadow">
            See More Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;
