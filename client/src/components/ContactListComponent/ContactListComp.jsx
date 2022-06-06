import React from "react";

const ContactListComp = ({ contacts }) => {
 
  return (

    <div className="container justify-content-center mt-5 mb-5">
    
  {contacts.map((contact => (
    <div className="container" key={contact.id}>
 <ul className="list-group">
     <li className="list-group-item">{contact.name}  <br/> {contact.email}</li>
     <button className="btn btn-primary justify-content-center">DELETE</button>
   </ul>
    </div>
    
  )))}
 
    </div>

  );
};

export default ContactListComp;
