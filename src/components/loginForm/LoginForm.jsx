import { Field, Form, Formik } from "formik";
import s from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { logInThunk } from "../../redux/auth/operations";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(logInThunk(values))
      .unwrap()
      .then(() => navigate("/contacts", { replace: true }))
      .catch(() => toast.error("Wrong email or password"));
    options.resetForm();
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label className={s.label}>
            <span className={s.span}>Email</span>
            <Field name="email" className={s.field}></Field>
          </label>
          <label className={s.label}>
            <span className={s.span}>Password</span>
            <Field name="password" type="password" className={s.field}></Field>
          </label>
          <button type="submit" className={s.btn}>
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
