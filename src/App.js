import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import FormContact from './components/FormContact';
import Section from './components/Section';
import ContactsList from './components/ContactsList';
import Notification from './components/Notification';
import SearchContact from './components/SearchContact';

import actionCreators from 'redux/contacts/contacts-actions';

const App = () => {
  const contacts = useSelector(store => store);

  const dispatch = useDispatch();

  const [filter, setFilter] = useState('');

  // const firstRender = useRef(true);

  // useEffect(() => {
  //   if (firstRender.current) {
  //     const data = localStorage.getItem('contacts');
  //     const parsedContacts = JSON.parse(data);
  //     if (parsedContacts?.length) {
  //       dispatch(actionCreators.addContact(parsedContacts));
  //     }
  //     firstRender.current = false;
  //   }
  // }, []);

  // useEffect(() => {
  //   if (!firstRender.current) {
  //     localStorage.setItem('contacts', JSON.stringify(contacts));
  //   }
  // }, [contacts]);

  const addContact = data => {
    if (
      contacts.contacts.some(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(`${data.name} is already in contacts1`);
      return;
    }
    dispatch(actionCreators.addContact(data));
  };

  const filterContacts = () => {
    if (filter) {
      const filtered = contacts.contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
      return filtered;
    }
    return contacts.contacts;
  };

  const removeContact = id => {
    dispatch(actionCreators.removeContact(id));
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
        {contacts.contacts.length ? (
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
