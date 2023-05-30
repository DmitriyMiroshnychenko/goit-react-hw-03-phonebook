import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import { ReactComponent as DeleteIcon } from '../../assets/DeleteIcon.svg';

export function ContactList({ contactsList, onDeleteContact }) {
  return (
    <ul className={styles.contacts}>
      {contactsList.map(({ id, name, number }) => (
        <li key={id} className={styles.contactsItem}>
          📞 <span className={styles.contactsName}>{name}</span>: {number}
          <button
            type="button"
            className={styles.deleteBtn}
            onClick={() => onDeleteContact(id)}
          >
            <DeleteIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contactsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
