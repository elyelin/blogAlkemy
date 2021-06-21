import * as Yup from "yup";

export const postSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  body: Yup.string().required("Body is required"),
});
