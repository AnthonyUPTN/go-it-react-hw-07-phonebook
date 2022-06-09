import { useState, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import FormContact from './components/FormContact';
import Section from './components/Section';
import ContactsList from './components/ContactsList';
import Notification from './components/Notification';
import SearchContact from './components/SearchContact';

import {
  getLoading,
  getError,
  getContacts,
} from './redux/contacts/contacts-selectors';

import * as operations from 'redux/contacts/contacts-operations';

const App = () => {
  const items = useSelector(getContacts, shallowEqual);
  const loading = useSelector(getLoading, shallowEqual);
  const error = useSelector(getError, shallowEqual);

  // const contacts = useSelector(store => store);
  // const { items, loading, error } = contacts;

  const dispatch = useDispatch();

  const [filter, setFilter] = useState('');

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, []);

  const addContact = data => {
    dispatch(operations.addContact(data));
  };

  const filterContacts = () => {
    if (filter) {
      const filtered = items.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
      return filtered;
    }
    return items;
  };

  const removeContact = id => {
    dispatch(operations.removeContact(id));
  };

  const handleChange = e => {
    setFilter(e.target.value);
  };

  return (
    <>
      <Section title={'Phonebook'}>
        <FormContact addContact={addContact} />
      </Section>
      <Section title={'Contacts'}>
        {loading && <p>...Loading</p>}
        {error && <p>{error.message}</p>}
        {items.length ? (
          <>
            <SearchContact searchValue={filter} handleChange={handleChange} />
            <ContactsList
              contacts={filterContacts()}
              removeContact={removeContact}
            />
          </>
        ) : (
          <Notification message={'Phonebook is empty, add someone'} />
        )}
      </Section>
    </>
  );
};

export default App;
