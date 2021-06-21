import React from "react";
import toast from "react-hot-toast";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

import { deletePost } from "../services/blogService";

const PostList = ({ posts }) => {
  const confirmDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      deletePost(id).then(() => {
        toast.success("Post deleted!");
      });
    }
  };
  return (
    <div className="row w-100">
      <table className="table table-striped border">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => {
            return (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <Link
                    to={`/post/${post.id}`}
                    className="btn btn-outline-info mr-2"
                  >
                    <FaEye />
                  </Link>
                  <Link
                    to={`/post/${post.id}/edit`}
                    className="btn btn-outline-success mr-2"
                  >
                    <FaEdit />
                  </Link>
                  <button
                    className="btn btn-outline-danger mr-2"
                    onClick={() => {
                      confirmDelete(post.id);
                    }}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PostList;
