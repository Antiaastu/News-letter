import React from "react";
import LikeButton from "../../../../components/LikeButton";
import { FaComment } from "react-icons/fa";

const PostHeader = ({ post, commentCount }) => (
  <>
    <h1 className="text-3xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
      {post.title}
    </h1>
    <div className="text-gray-500 dark:text-gray-400 text-sm sm:text-sm mb-4">
      {post.created_at
        ? new Date(post.created_at).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        : "Unknown date"}
    </div>
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center space-x-3">
        {post.user?.profile_picture ? (
          <img
          src={post.user.profile_picture || "/default-avatar.png"}
          alt={post.user?.name}
          className="w-10 h-10 rounded-full"
        />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 font-semibold">
            {post.user?.name ? post.user.name.charAt(0).toUpperCase() : "U"}
          </div>
        )
        }
        <div>
          <p className="text-gray-900 dark:text-gray-100 font-medium">
            {post.user?.name}
          </p>
          
        </div>
      </div>
      <button className="px-4 py-1 sm:mr-6  border rounded-full text-sm font-medium text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800">
        Follow
      </button>
    </div>
    {post.body && (
      <div className="bg-gray-100 dark:bg-gray-900 dark:font-semibold px-3 py-1 sm:p- mb-2">
        <article className="prose prose-lg dark:prose-invert max-w-none leading-relaxed space-y-6">
          {post.body
            .split(".")
            .filter((sentence) => sentence.trim().length > 0) // remove empty parts
            .reduce((paragraphs, sentence, i) => {
              const index = Math.floor(i / 4);
              if (!paragraphs[index]) paragraphs[index] = [];
              paragraphs[index].push(sentence.trim());
              return paragraphs;
            }, [])
            .map((para, idx) => (
              <p key={idx}>{para.join(". ") + "."}</p>
            ))}
        </article>
      </div>
    )}

    <div className="flex flex-wrap items-center gap-4 border-b border-gray-200 dark:border-gray-700 pb-4 mb-6">
      <LikeButton postId={post.id} />
      <span className="text-gray-500 dark:text-gray-400 text-sm flex items-center">
        <FaComment size={18} className="mr-1 text-gray-400" />
        {commentCount} Comments
      </span>
    </div>
  </>
);

export default PostHeader;
