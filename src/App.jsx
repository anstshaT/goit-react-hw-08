import ContactList from "./components/contactList/ContactList";
import "./App.css";
import data from "./contactsName.json";
import SearchBox from "./components/searchBox/SearchBox";
import { useEffect, useState } from "react";
import ContactForm from "./components/contactForm/ContactForm";

function App() {
  /* Локальне сховище, стан */
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("saved-contacts");
    return savedContacts ? JSON.parse(savedContacts) : data;
  });
  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  /* Пошук */
  const [filter, setFilter] = useState("");
  const filterNames = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  /* Додавання контакта */
  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  /* Видалення контактів */
  const deleteContact = (id) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== id);
    });
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contNames={filterNames} onDelete={deleteContact} />
    </>
  );
}

export default App;
