import React from "react";
import PostCard from "../../../components/PostCard";
import { usePosts } from "../../../context/PostsContext";
import { useNavigate } from "react-router-dom";

const RecentPosts = () => {
  const navigate = useNavigate();
  const { posts } = usePosts();
  const recentPosts = posts.slice(0, 3);

  return (
    <section className="py-12 px-4 sm:px-6 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
          Recent Posts
        </h2>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {recentPosts.map((post, idx) => (
            <PostCard key={post.id} post={post} index={idx} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button
            onClick={() => navigate("/posts")}
            className="px-5 sm:px-6 py-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-200 shadow"
          >
            See More Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;
