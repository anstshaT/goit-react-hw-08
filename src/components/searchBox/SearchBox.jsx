import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);

  const dispatch = useDispatch();
  const handleChange = (value) => {
    console.log("SearchBox", value);

    dispatch(changeFilter(value));
  };

  return (
    <div>
      <p className={s.labelSearchBox}>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={(e) => handleChange(e.target.value)}
        className={s.inputSearchBox}
      ></input>
    </div>
  );
};

export default SearchBox;
