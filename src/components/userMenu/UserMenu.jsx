import { useDispatch, useSelector } from "react-redux";
import s from "./UserMenu.module.css";
import { logOutThunk } from "../../redux/auth/operations";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { selectUser } from "../../redux/auth/selectors";

const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  const handleClick = () => {
    dispatch(logOutThunk())
      .unwrap()
      .then(() => {
        navigate("/login", { replace: true });
        toast.success("Logged out successfully");
      })
      .catch(() => toast.error("Wrong email or password"));
  };
  return (
    <div className={s.userMenu}>
      <p className={s.email}>Welcome, {user.email}</p>
      <button className={s.btn} onClick={handleClick}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
