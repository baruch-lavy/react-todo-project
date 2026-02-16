import { createContext, useState, useEffect } from "react";
export const PostsContext = createContext(null);

export function PostsProvider({ children }) {
  const [state, setState] = useState({
    posts: [],
    isLoading: false,
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  function fetchPosts() {
    setState(prev => {
        return {...prev, isLoading: true}
    });
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) =>
          setState((prev) => {
            return { ...prev, posts: json.slice(0, 10), isLoading: false };
          }),
        );
    }, 3000);
  }

  return (
    <PostsContext.Provider value={{ ...state }}>
      {children}
    </PostsContext.Provider>
  );
}
