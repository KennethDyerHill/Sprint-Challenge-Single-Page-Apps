import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function SearchForm(props) {

  const handleSubmit = (name) => {
    props.onSubmit(name);
  }
  return (
    <section className="search-form">
      <Formik
        initialValues={{ character: '' }}
     
        onSubmit={(values, { setSubmitting })  => {
          setTimeout(() => {
            handleSubmit(values.character);
            setSubmitting(false);
          }, 400);
        }}>
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="character" />
            <ErrorMessage name="character" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Search for character!
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
}
