import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  username: Yup.string().required('Username مطلوب'),
  email: Yup.string().email('Email غير صالح').required('Email مطلوب'),
  password: Yup.string().min(6, 'Password قصير بزاف').required('Password مطلوب'),
});

function FormikForm() {
  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        console.log(values);
        alert('تم تسجيل المستخدم بنجاح!');
      }}
    >
      {() => (
        <Form>
          <Field name="username" placeholder="Username" />
          <ErrorMessage name="username" component="div" />

          <Field name="email" type="email" placeholder="Email" />
          <ErrorMessage name="email" component="div" />

          <Field name="password" type="password" placeholder="Password" />
          <ErrorMessage name="password" component="div" />

          <button type="submit">Register</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikForm;
