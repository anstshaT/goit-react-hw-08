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

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}

export default App;
