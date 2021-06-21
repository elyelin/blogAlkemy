import axios from "axios";

export function login(data) {
  return axios
    .post("http://challenge-react.alkemy.org/", data)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      throw error;
    });
}
