import { NavLink } from "react-router-dom";
import clsx from "clsx";
import s from "./UserMenu.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.userMenuLink, isActive && s.active);
};

const UserMenu = () => {
  return (
    <div className={s.userMenu}>
      <nav className={s.userMenuNav}>
        <div className={s.homeAndContacts}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="/contacts" className={buildLinkClass}>
            Contacts
          </NavLink>
        </div>

        <div className={s.homeAndContacts}>
          <NavLink to="/register" className={buildLinkClass}>
            Register
          </NavLink>
          <NavLink to="/login" className={buildLinkClass}>
            Log In
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default UserMenu;
