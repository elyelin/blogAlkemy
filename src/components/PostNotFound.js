import React from "react";
import { Link } from "react-router-dom";

const PostNotFound = () => {
  return (
    <div>
      <div className="alert alert-danger mb-4" role="alert">
        Post not found :(
      </div>

      <Link to="/" className="btn btn-link">
        Back to home
      </Link>
    </div>
  );
};

export default PostNotFound;
