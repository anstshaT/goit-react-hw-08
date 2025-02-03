import Contacts from "../contacts/Contacts";
import s from "./ContactList.module.css";

const ContactList = ({ contNames }) => {
  return (
    <ul className={s.contactList}>
      {contNames.map((contName) => {
        return (
          <li key={contName.id} className={s.listItem}>
            <Contacts name={contName.name} number={contName.number} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
