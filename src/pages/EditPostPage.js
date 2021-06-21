import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useHistory, useParams } from "react-router-dom";

import Loading from "../components/Loading";
import PostForm from "../components/PostForm";
import PostNotFound from "../components/PostNotFound";
import { getPostById, updatePost } from "../services/blogService";

export default function EditPostPage() {
  var history = useHistory();
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

  async function handleSubmit(values, { setSubmitting }) {
    setError(null);

    try {
      await updatePost(id, values);
      history.push("/");
      toast.success("Post updated successfully!");
    } catch (e) {
      setError(e.response.data.error);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="col-6">
        <PostForm
          title="Edit post"
          error={error}
          onSubmit={handleSubmit}
          initialValues={post}
          submitText="Save"
        />
      </div>
    </div>
  );
}
