import { NavLink } from "react-router-dom";
import clsx from "clsx";
import s from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <nav className={s.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink to="/contacts" className={buildLinkClass}>
            Contacts
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
