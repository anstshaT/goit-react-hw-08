import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contacts = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div className={s.mainDiv}>
      <div className={s.infoDiv}>
        <div className={s.nameDiv}>
          <FaUser />
          <p className={s.name}>{contact.name}</p>
        </div>
        <div className={s.numberDiv}>
          <BsFillTelephoneFill />
          <p className={s.number}>{contact.number}</p>
        </div>
      </div>
      <button className={s.deleteBtn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contacts;
