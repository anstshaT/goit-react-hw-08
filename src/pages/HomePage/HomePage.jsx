import AboutApp from "../../components/aboutApp/AboutApp";
import IntroductionHome from "../../components/introductionHome/IntroductionHome";
import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.homeDiv}>
      <h1>Keep all contacts in one place</h1>
      <IntroductionHome />
      <AboutApp />
    </div>
  );
};

export default HomePage;
