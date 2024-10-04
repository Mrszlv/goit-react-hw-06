import { deleteContact } from "../../redux/contactsSlice";
import s from "./Contact.module.css";
import { RiPhoneFill } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <div className={s.contactCard}>
      <li className={s.item}>
        <span className={s.name}>
          <IoPerson /> {contact.name}:
        </span>
        <span className={s.number}>
          <RiPhoneFill /> {contact.number}
        </span>
      </li>
      <button
        className={s.btn}
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        <MdDelete className={s.icon} />
      </button>
    </div>
  );
};

export default Contact;
