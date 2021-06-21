import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";

import { postSchema } from "../validations/postSchema";

const PostForm = ({ initialValues, onSubmit, error, title, submitText }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={postSchema}
      onSubmit={onSubmit}
    >
      {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <Form className="form-new-post" onSubmit={handleSubmit} noValidate>
          <h1 className="h3 mb-3 font-weight-normal">{title}</h1>

          {error && <div className="alert alert-danger">{error}</div>}

          <div className="mb-4">
            <label htmlFor="title">Title</label>
            <Field
              type="text"
              name="title"
              id="title"
              className="form-control"
              placeholder="Post Title"
              required
              autoFocus
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            <ErrorMessage
              className="form-error text-danger mt-2"
              name="title"
              component="small"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="body">Body</label>
            <Field name="body">
              {() => {
                return (
                  <textarea
                    className="form-control"
                    id="body"
                    placeholder="Body"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.body}
                    rows={10}
                  />
                );
              }}
            </Field>
            <ErrorMessage
              className="form-error text-danger mt-2"
              name="body"
              component="small"
            />
          </div>
          <div className="mt-3 d-flex justify-content-end">
            <button
              className="btn btn-success btn-block"
              type="submit"
              disabled={isSubmitting}
            >
              {submitText}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default PostForm;
