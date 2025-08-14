import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState({});
  const didRun = useRef(false);
  useEffect(() => {
    if (didRun.current) return;
    didRun.current = true;
    const initialPosts = [
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
      {
        id: 4,
        title: "Post Title 4",
        excerpt: "Another excerpt for testing purposes...",
        likes: 56,
      },
      {
        id: 5,
        title: "Post Title 5",
        excerpt: "More newsletter sample content...",
        likes: 99,
      },
      {
        id: 6,
        title: "Post Title 6",
        excerpt: "Extra post to fill up space...",
        likes: 77,
      },
    ];
    setPosts(initialPosts);
  }, []);

  const toggleLike = (postId) => {
    setPosts((prevPosts) => {
      return prevPosts.map((p) => {
        if (p.id === postId) {
          const isLiked = !likedPosts[postId];
          // Update likes count
          return { ...p, likes: p.likes + (isLiked ? 1 : -1) };
        }
        return p;
      });
    });

    // Update liked state separately
    setLikedPosts((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  return (
    <PostsContext.Provider value={{ posts, likedPosts, toggleLike }}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => useContext(PostsContext);
