import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { login } from "../services/authService";
import { loginSchema } from "../validations/loginSchema";

const LoginPage = () => {
  var history = useHistory();
  const [error, setError] = useState(null);

  async function handleSubmit(values, { setSubmitting }) {
    setError(null);

    try {
      const data = await login(values);
      localStorage.setItem("token", data.token);
      history.push("/");
    } catch (e) {
      setError(e.response.data.error);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="col-4">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form className="form-signin" onSubmit={handleSubmit} noValidate>
              <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

              {error && <div className="alert alert-danger">{error}</div>}

              <div className="mb-4">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  placeholder="me@example.com"
                  required
                  autoFocus
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <ErrorMessage
                  className="form-error text-danger mt-2"
                  name="email"
                  component="small"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  placeholder="Password"
                  required
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <ErrorMessage
                  className="form-error text-danger mt-2"
                  name="password"
                  component="small"
                />
              </div>
              <div className="mt-3 d-flex justify-content-end">
                <button
                  className="btn btn-primary btn-block"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Sign in
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginPage;
