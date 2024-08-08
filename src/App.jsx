import { useState } from 'react'
import ContactContext from './context/ContactContext'
import ContactList from './components/ContactList'
import PostList from './components/PostList'


function App() {
  const [contacts, setContacts ] = useState([    
    { name: "John Doe", phone: "555-1234" },
    { name: "Jane Smith", phone: "555-5678" },
    { name: "Michael Johnson", phone: "555-8765" },
    { name: "Emily Davis", phone: "555-4321" },
    { name: "Sarah Wilson", phone: "555-3456" }
  ])
  
  const [selectedContact, setSelectedContact] = useState(null)

  return (
    <ContactContext.Provider value={{contacts, setContacts, selectedContact, setSelectedContact}}>
      <ContactList/>
      <PostList/>
    </ContactContext.Provider>
  )
}

export default App
