import './App.css';
import AddContactComp from './components/AddContactComponent/AddContactComp';
import ContactListComp from './components/ContactListComponent/ContactListComp';
import HeaderComp from './components/HeaderComponent/HeaderComp';
import { useEffect, useState } from "react";

function App() {
  // const contacts = [
  //   {
  //     id : "1",
  //     name : "shash",
  //     email : "shashgmail.com"
  // },
  // {
  //     id : "2",
  //     name : "devil",
  //     email : "devilgmail.com"
  // }
  // ]
  const [contacts , setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts , contact]);
    console.log(contact);
  }
  return (
    <div className="container">
       <HeaderComp/>
       <AddContactComp addContactHandler={addContactHandler}  />
       <ContactListComp  contacts={contacts}/>
    </div>
  );
}

export default App;
