import { Field, Form, Formik } from "formik";
import s from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(registerThunk(values))
      .unwrap()
      .then(() => navigate("/contacts", { replace: true }))
      .catch(() => toast.error("Something went wrong, try again"));
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
