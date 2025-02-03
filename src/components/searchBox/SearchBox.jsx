import s from "./SearchBox.module.css";

const SearchBox = ({ value, onFilter }) => {
  return (
    <div>
      <p className={s.labelSearchBox}>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
        className={s.inputSearchBox}
      ></input>
    </div>
  );
};

export default SearchBox;
