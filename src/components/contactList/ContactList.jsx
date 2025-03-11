import { useSelector } from "react-redux";
import Contacts from "../contact/Contact";
import s from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const filterCont = useSelector(selectFilteredContacts);

  return (
    <ul className={s.contactList}>
      {filterCont.map((contact) => {
        return (
          <li key={contact.id} className={s.listItem}>
            <Contacts contact={contact} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
