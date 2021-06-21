import React, { useEffect, useState } from "react";

import PostList from "../components/PostList";
import { getPosts } from "../services/blogService";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((response) => {
      setPosts(response);
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h1>Home</h1>
      </div>

      <div className="row mt-4">
        <PostList posts={posts} />
      </div>
    </div>
  );
};
export default HomePage;
