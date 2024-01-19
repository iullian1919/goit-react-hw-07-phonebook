import React from 'react';
import { useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'store/operations';
import { selectContacts } from 'store/selectors';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const handleInput = ev => {
    if (ev.target.name === 'name') {
      setName(ev.target.value);
      return;
    }
    if (ev.target.name === 'number') {
      setPhone(ev.target.value);
      return;
    }
  };
  const handleSubmit = ev => {
    ev.preventDefault();
    const newContact = {
      name,
      phone,
    };
    if (
      contacts.find(
        el => el.name.toLowerCase() === newContact.name.toLocaleLowerCase()
      )
    ) {
      alert(` ${newContact.name} is already in contacts`);
      return;
    }
    dispatch(addContact(newContact));

    ev.target.reset();
  };
  return (
    <form className={css.main_form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name
        <input
          className={css.contact_input}
          onInput={handleInput}
          type="text"
          name="name"
          required
        />
      </label>
      <label className={css.label}>
        Number
        <input
          className={css.contact_input}
          type="tel"
          name="number"
          required
          onInput={handleInput}
        />
      </label>

      <button className={css.contact_btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
