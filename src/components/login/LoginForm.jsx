import { Formik } from "formik";
import React from "react";
import { Button, Form } from "react-bootstrap";

function LoginForm() {
  const initialValues = { email: "", password: "", remember: false };

  const validateForm = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Please enter email";
    }

    if (!values.password) {
      errors.password = "Please enter password";
    }

    return errors;
  };

  const onSubmitForm = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validateForm}
      onSubmit={onSubmitForm}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && (
              <Form.Text className="text-danger">{errors.email}</Form.Text>
            )}
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && (
              <Form.Text className="text-danger">{errors.password}</Form.Text>
            )}
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Remember Me"
              name="remember"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.remember}
            />
          </Form.Group>
          <Button variant="primary" type="submit" disabled={isSubmitting}>
            Login
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
