import { Formik, Form, Field } from "formik";
import { useId } from "react";

const initialValues = {
  contactName: "",
  number: "",
};

const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor={nameFieldId}>Name</label>
        <Field type="text" name="contactName" id={nameFieldId}></Field>

        <label htmlFor={numberFieldId}>Number</label>
        <Field type="number" id={numberFieldId} name="number"></Field>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
