import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/contactForm/ContactForm";
import ContactList from "../../components/contactList/ContactList";
import SearchBox from "../../components/searchBox/SearchBox";
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import s from "./ContactsPage.module.css";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";

const ContactsPage = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.contactsDiv}>
      <ContactForm />
      <SearchBox />
      {loading && !error && <b>Loading request...</b>}
      <ContactList />
    </div>
  );
};

export default ContactsPage;
