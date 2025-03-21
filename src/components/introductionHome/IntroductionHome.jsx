import { Link } from "react-router";
import s from "./IntroductionHome.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import img from "../../image/img_1.png";

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
          <Link to="/register">
            <button type="click" className={s.btn}>
              Sign Up
            </button>
          </Link>
        )}
      </div>
      <img src={img} alt="man with phone in hand" />
    </div>
  );
};

export default IntroductionHome;
