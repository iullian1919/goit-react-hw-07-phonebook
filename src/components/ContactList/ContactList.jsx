import React from 'react';
import ContactsItem from 'components/ContactItem';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'store/selectors';
import { fetchContacts } from 'store/operations';
import { useEffect } from 'react';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const filterValue = useSelector(selectFilter);
  const createRenderListContact = () => {
    return contacts.filter(el => {
      return el.name.toLowerCase().includes(filterValue.toLowerCase());
    });
  };
  return (
    <ul className={css.contacts}>
      {createRenderListContact().map(el => {
        return <ContactsItem key={el.id} contact={el} />;
      })}
    </ul>
  );
};
export default ContactList;
