import ContactList from "./components/contactList/ContactList";
import "./App.css";
import SearchBox from "./components/searchBox/SearchBox";
import ContactForm from "./components/contactForm/ContactForm";
import { useSelector } from "react-redux";
import { selectError, selectLoading } from "./redux/contactsSlice";

function App() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && !error && <b>Loading request...</b>}
      <ContactList />
    </>
  );
}

export default App;
