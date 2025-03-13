import { Field, Form, Formik } from "formik";
import s from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    console.log(values);
    options.resetForm();
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label className={s.label}>
            <span className={s.span}>Name</span>
            <Field name="name" className={s.field}></Field>
          </label>
          <label className={s.label}>
            <span className={s.span}>Email</span>
            <Field name="email" className={s.field}></Field>
          </label>
          <label className={s.label}>
            <span className={s.span}>Password</span>
            <Field name="password" type="password" className={s.field}></Field>
          </label>
          <button type="submit" className={s.btn}>
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
