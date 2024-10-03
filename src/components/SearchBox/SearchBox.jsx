import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter, selectedNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectedNameFilter);

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div>
      <p className={s.text}>Find contacts by name</p>
      <input
        className={s.input}
        type="text"
        value={filter}
        onChange={handleSearch}
        placeholder="Enter name..."
      />
    </div>
  );
};

export default SearchBox;
