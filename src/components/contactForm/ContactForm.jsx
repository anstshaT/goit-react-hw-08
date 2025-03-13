import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const ContactSchema = Yup.object().shape({
  contactName: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const initialValues = {
  contactName: "",
  number: "",
};

const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        name: values.contactName,
        number: values.number,
      })
    );

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={s.form}>
        <label htmlFor={nameFieldId} className={s.formLabel}>
          <span className={s.span}>Name</span>
          <Field
            type="text"
            name="contactName"
            id={nameFieldId}
            className={s.formInput}
          ></Field>
          <ErrorMessage
            name="contactName"
            component="p"
            className={s.formError}
          />
        </label>

        <label htmlFor={numberFieldId} className={s.formLabel}>
          <span className={s.span}>Number</span>
          <Field
            type="telephone"
            id={numberFieldId}
            name="number"
            className={s.formInput}
          ></Field>
          <ErrorMessage name="number" component="p" className={s.formError} />
        </label>

        <button type="submit" className={s.formBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
