import { useContext } from "react";
import { PostsContext } from "../context/PostsContext";

export function Posts() {
  const { posts, isLoading } = useContext(PostsContext);

  return (
    <div className="posts-container">
      {isLoading && <p className="loader"></p>}

      {posts.map((post) => {
        return (
          <section key={Date.now() + Math.random() * 10} className="post">
            <span>{post.title}</span>
            <p>{post.body}</p>
          </section>
        );
      })}
    </div>
  );
}
