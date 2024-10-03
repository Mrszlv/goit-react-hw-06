import { deleteContact } from "../../redux/contactsSlice";
import s from "./Contact.module.css";
import { RiPhoneFill } from "react-icons/ri";
import { MdManageAccounts } from "react-icons/md";
import { useDispatch } from "react-redux";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <div className={s.container}>
      <li className={s.item}>
        <span className={s.name}>
          <MdManageAccounts /> {contact.name}:
        </span>
        <span className={s.number}>
          <RiPhoneFill /> {contact.number}
        </span>
      </li>
      <button
        className={s.btn}
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete contact
      </button>
    </div>
  );
};

export default Contact;
