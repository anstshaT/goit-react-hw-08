import { useSelector } from "react-redux";
import Contacts from "../contact/Contact";
import s from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name || "");
  console.log("Filter", filter);

  const filterCont = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  console.log("Filter name", filterCont);

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
