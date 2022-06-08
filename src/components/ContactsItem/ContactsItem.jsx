import PropTypes from 'prop-types';
import s from './contactsItem.module.css';

const ContactsItem = ({ id, name, number, removeContact }) => {
  return (
    <li className={s.item}>
      <span>
        {name}: {number}
      </span>
      <button onClick={() => removeContact(id)} type="button">
        Delete
      </button>
    </li>
  );
};

ContactsItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};

export default ContactsItem;
