import PropTypes from 'prop-types';
import s from './contactsItem.module.css';

const ContactsItem = ({ id, name, phone, removeContact }) => {
  return (
    <li className={s.item}>
      <span>
        {name}: {phone}
      </span>
      <button onClick={() => removeContact(id)} type="button">
        Delete
      </button>
    </li>
  );
};

ContactsItem.propTypes = {
  id: PropTypes.string,
  phone: PropTypes.string,
  number: PropTypes.string,
};

export default ContactsItem;
