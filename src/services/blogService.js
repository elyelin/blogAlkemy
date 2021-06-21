import httpClient from "../utils/httpClient";

export function getPosts() {
  return httpClient
    .get("/posts")
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      throw error;
    });
}

export function getPostById(id) {
  return httpClient
    .get(`/posts/${id}`)
    .then((res) => {
      return res.data;
    })

    .catch((error) => {
      throw error;
    });
}

export function createPost(post) {
  return httpClient
    .post("/posts", post)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      throw error;
    });
}

export function updatePost(id, post) {
  return httpClient
    .put(`/posts/${id}`, post)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      throw error;
    });
}

export function deletePost(id) {
  return httpClient
    .delete(`/posts/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      throw error;
    });
}
