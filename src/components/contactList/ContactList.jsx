import Contacts from "../contacts/Contacts";
import s from "./ContactList.module.css";

const ContactList = ({ contNames, onDelete }) => {
  return (
    <ul className={s.contactList}>
      {contNames.map((contName) => {
        return (
          <li key={contName.id} className={s.listItem}>
            <Contacts
              name={contName.name}
              number={contName.number}
              id={contName.id}
              onDelete={onDelete}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
