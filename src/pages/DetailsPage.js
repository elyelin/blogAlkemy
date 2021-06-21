import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import Loading from "../components/Loading";
import PostNotFound from "../components/PostNotFound";
import { getPostById } from "../services/blogService";

const DetailsPage = () => {
  var { id } = useParams();
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getPostById(id)
      .then((data) => {
        setPost(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (error !== null) {
    return <PostNotFound />;
  }

  return (
    <div className="card">
      <div className="card">
        <div className="card-body">
          <div className="card-title">
            <h2 className="mb-4">{post.title}</h2>

            <p>{post.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
