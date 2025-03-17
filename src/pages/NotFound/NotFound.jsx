import { Link } from "react-router";
import s from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={s.notFoundDiv}>
      <p className={s.notFoundP}>Page not found</p>
      <Link to="/" className={s.notFoundLink}>
        Home page
      </Link>
    </div>
  );
};

export default NotFound;
