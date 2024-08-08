import { createContext } from "react";

const ContactContext = createContext({
    
    contacts: [],
    selectedContact: null,
    setContacts: () => {}, 
    setSelectedContact: () => {}
})

export default ContactContext;