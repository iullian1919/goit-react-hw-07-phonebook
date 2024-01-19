import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'store/operations';
import css from './ContactItem.module.css';
import PropTypes from 'prop-types';

const ContactsItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <li className={css.item}>
      <span>
        {contact.name}: {contact.phone}
      </span>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

ContactsItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};

ContactsItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactsItem;
