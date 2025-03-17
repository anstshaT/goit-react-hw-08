import s from "./AboutPage.module.css";
import { IoCloseCircle } from "react-icons/io5";
import { IoAddCircle } from "react-icons/io5";
import { IoPencilSharp } from "react-icons/io5";
import { IoAccessibility } from "react-icons/io5";
import { MdManageAccounts } from "react-icons/md";

const AboutApp = () => {
  return (
    <div className={s.aboutAppDiv}>
      <h2>In this app allows to</h2>
      <ul className={s.ul}>
        <li className={s.li}>
          <IoAddCircle className={s.icon} />
          <h3 className={s.titleLi}>Add contacts</h3>
          <p className={s.titleP}>in just few clicks</p>
        </li>
        <li className={s.li}>
          <IoPencilSharp className={s.icon} />
          <h3 className={s.titleLi}>Edit contact information</h3>
          <p className={s.titleP}>to keep it up to date </p>
        </li>
        <li className={s.li}>
          <IoCloseCircle className={s.icon} />
          <h3 className={s.titleLi}>Delete contact</h3>
          <p className={s.titleP}>is no longer need</p>
        </li>
      </ul>
      <h2>Create a personal account to</h2>
      <ul className={s.ul}>
        <li className={s.li}>
          <IoAccessibility className={s.icon} />
          <h3 className={s.titleLi}>Access contacts</h3>
          <p className={s.titleP}>from any device</p>
        </li>
        <li className={s.liManage}>
          <MdManageAccounts className={s.icon} />
          <h3 className={s.titleLi}>Easily manage contact list</h3>
          <p className={s.titleP}>with an user-friendly interface</p>
        </li>
      </ul>
    </div>
  );
};

export default AboutApp;
