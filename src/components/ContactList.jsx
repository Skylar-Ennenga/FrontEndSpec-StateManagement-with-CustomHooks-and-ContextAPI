import React, { useContext} from 'react'
import ContactContext from '../context/ContactContext'

const ContactList = () => {
    const { contacts, selectedContact, setSelectedContact } = useContext(ContactContext);
  
    const handleClick = (contact) => {
      setSelectedContact(selectedContact === contact ? null : contact);
    };
  
    return (
      <ul>
        {contacts.map((contact, index) => (
          <li key={index} onClick={() => handleClick(contact)}>
            {contact.name} {selectedContact === contact && `- ${contact.phone}`}
          </li>
        ))}
      </ul>
    );
  };

export default ContactList
