import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { getAllPosts, likePost, unlikePost } from "../services/postServices";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState({});
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  // const didRun = useRef(false);

  useEffect(() => {
    // if (didRun.current) return;
    // didRun.current = true;
    const loadPosts = async () => {
      try {
        const data = await getAllPosts();
        setPosts(data);
        const user = JSON.parse(localStorage.getItem("user"));
        if (user && user.token) {
          const likedMap = {};
          data.forEach((post) => {
            const isLiked = post.likes.some((like) => like.user_id === user.id);
            likedMap[post.id] = isLiked;
          });
          setLikedPosts(likedMap);
        } else {
          setLikedPosts({});
        }
      } catch (err) {
        toast.error(err.message || "Failed to load posts");
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, []);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      setLikedPosts({});
      return;
    }

    const likedMap = {};
    posts.forEach((post) => {
      const isLiked = post.likes.some((like) => like.user_id === user.id);
      likedMap[post.id] = isLiked;
    });
    setLikedPosts(likedMap);
  }, [posts, localStorage.getItem("user")]);

  const toggleLike = async (postId) => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    if (!token || !user) {
      toast.error("You need to be logged in to like posts");
      navigate("/login");
      return;
    }

    const isLiked = likedPosts[postId];

    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              likes: isLiked
                ? post.likes.filter((like) => like.user_id !== user.id)
                : [...post.likes, { user_id: user.id, post_id: postId }],
            }
          : post
      )
    );
    setLikedPosts((prev) => ({ ...prev, [postId]: !isLiked }));

    try {
      if (isLiked) {
        await unlikePost(postId, token);
      } else {
        await likePost(postId, token);
      }
    } catch (err) {
      setPosts((prev) =>
        prev.map((post) =>
          post.id === postId
            ? {
                ...post,
                likes: isLiked
                  ? post.likes.filter((like) => like.user_id !== user.id)
                  : [...post.likes, { user_id: user.id, post_id: postId }],
              }
            : post
        )
      );

      setLikedPosts((prev) => ({
        ...prev,
        [postId]: !isLiked,
      }));
      toast.error(err.message || "Failed to toggle like");
    }
  };

  return (
    <PostsContext.Provider value={{ posts, likedPosts, toggleLike, loading }}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => useContext(PostsContext);
