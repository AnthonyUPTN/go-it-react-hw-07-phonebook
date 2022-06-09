import ContactsItem from '../ContactsItem/ContactsItem';

const ContactsList = ({ contacts, removeContact }) => {
  console.log(contacts);
  return (
    <ul>
      {contacts.map(({ name, phone, id }) => {
        return (
          <ContactsItem
            name={name}
            phone={phone}
            key={id}
            id={id}
            removeContact={removeContact}
          />
        );
      })}
    </ul>
  );
};

export default ContactsList;
