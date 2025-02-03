import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import s from "./Contacts.module.css";

const Contacts = ({ name, number }) => {
  return (
    <div className={s.mainDiv}>
      <div className={s.infoDiv}>
        <div className={s.nameDiv}>
          <FaUser />
          <p className={s.name}>{name}</p>
        </div>
        <div className={s.numberDiv}>
          <BsFillTelephoneFill />
          <p className={s.number}>{number}</p>
        </div>
      </div>
      <button className={s.deleteBtn}>Delete</button>
    </div>
  );
};

export default Contacts;
