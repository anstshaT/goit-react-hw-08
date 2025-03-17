import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact, editContact } from "../../redux/contacts/operations";
import { useState } from "react";

const Contacts = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  const [value, setValue] = useState(contact);
  const [editMode, setEditMode] = useState(false);

  return (
    <div className={s.mainDiv}>
      <div className={s.infoDiv}>
        <div className={s.nameDiv}>
          <FaUser />
          {editMode ? (
            <div>
              <input
                type="text"
                value={value.name}
                onChange={(e) => setValue(e.target.value)}
                onBlur={() => {
                  dispatch(editContact({ id: contact.id, name: value }));
                  setEditMode(false);
                }}
              />
            </div>
          ) : (
            <p className={s.name}>{contact.name}</p>
          )}
        </div>
        <div className={s.numberDiv}>
          <BsFillTelephoneFill />
          <p className={s.number}>{contact.number}</p>
        </div>
      </div>
      <button className={s.deleteBtn} onClick={handleDelete}>
        Delete
      </button>
      <button className={s.deleteBtn} onClick={() => setEditMode(true)}>
        Edit
      </button>
    </div>
  );
};

export default Contacts;
