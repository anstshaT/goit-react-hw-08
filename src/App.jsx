import ContactList from "./components/contactList/ContactList";
import "./App.css";
import data from "./contactsName.json";
import SearchBox from "./components/searchBox/SearchBox";
import { useState } from "react";
import ContactForm from "./components/contactForm/ContactForm";

function App() {
  const [contacts, setContacts] = useState(data);
  const [filter, setFilter] = useState("");

  const filterNames = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contNames={filterNames} />
    </>
  );
}

export default App;
