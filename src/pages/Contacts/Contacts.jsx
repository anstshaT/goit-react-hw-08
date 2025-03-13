import { useSelector } from "react-redux";
import ContactForm from "../../components/contactForm/ContactForm";
import ContactList from "../../components/contactList/ContactList";
import SearchBox from "../../components/searchBox/SearchBox";
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import s from "./Contacts.module.css";

const Contacts = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div className={s.contactsDiv}>
      <ContactForm />
      <SearchBox />
      {loading && !error && <b>Loading request...</b>}
      <ContactList />
    </div>
  );
};

export default Contacts;
