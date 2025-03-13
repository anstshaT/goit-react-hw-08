import { useSelector } from "react-redux";
import AuthNav from "../authNav/AuthNav";
import Navigation from "../navigation/Navigation";
import s from "./AppBar.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "../userMenu/UserMenu";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={s.appBarDiv}>
      <Navigation />
      {!isLoggedIn ? <AuthNav /> : <UserMenu />}
    </div>
  );
};

export default AppBar;
