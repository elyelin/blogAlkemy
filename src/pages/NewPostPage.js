import React, { useState } from "react";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";

import PostForm from "../components/PostForm";
import { createPost } from "../services/blogService";

export default function NewPostPage() {
  var history = useHistory();
  const [error, setError] = useState(null);

  async function handleSubmit(values, { setSubmitting }) {
    setError(null);

    try {
      await createPost(values);
      history.push("/");
      toast.success("Post created successfully!");
    } catch (e) {
      setError(e.response.data.error);
    } finally {
      setSubmitting(false);
    }
  }

  const initialValues = { title: "", body: "" };

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="col-6">
        <PostForm
          title="Create new post"
          error={error}
          onSubmit={handleSubmit}
          initialValues={initialValues}
          submitText="Create"
        />
      </div>
    </div>
  );
}
