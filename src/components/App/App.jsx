import s from "./App.module.css";

import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { FaAddressBook } from "react-icons/fa";

const App = () => {
  return (
    <div className={s.wrapp}>
      <h1 className={s.title}>
        <FaAddressBook className={s.icon} />
        {"  "}
        Phone<span className={s.span}>book</span>
      </h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
