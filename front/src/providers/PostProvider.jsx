import { useContext, useEffect, useState } from "react";
import { PostContext } from "../context/PostContext";
import { getAllNews } from "../api/post.api";
import { AuthContext } from "../context/AuthContext";

export default function PostProvider({ children }) {
  const [news, setNews] = useState([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    const getNews = async () => {
      try {
        const allNews = await getAllNews();
        setNews(allNews);
      } catch (error) {
        console.log(error);
      }
    };
    if (user) {
      getNews();
    }
  }, [user]);

  const addNews = (newPost) => {
    setNews([...news, newPost]);
  };
  return (
    <PostContext.Provider value={{ news, addNews }}>
      {children}
    </PostContext.Provider>
  );
}
