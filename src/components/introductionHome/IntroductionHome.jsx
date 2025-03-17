import { Link } from "react-router";
import s from "./IntroductionHome.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const IntroductionHome = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={s.intro}>
      <div>
        <p className={s.introText}>
          <span className={s.span}>PhoneBook</span> - digital phone book for
          storing phone numbers
        </p>
        {!isLoggedIn && (
          <button type="click" className={s.btn}>
            <Link to="/register" className={s.btnText}>
              Sign Up
            </Link>
          </button>
        )}
      </div>
      <img src="/src/image/img_1.png" alt="man with phone in hand" />
    </div>
  );
};

export default IntroductionHome;
