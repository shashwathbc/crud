import React, { useEffect } from "react";
import { useState } from "react";

const AddContactComp = ({addContactHandler , contacts}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const add = (e) => {
    e.preventDefault();
    if(name === "" || email===""){
        alert("All the Fields are mandatory");
        return;
    }
    addContactHandler(name, email);
    setName("");
    setEmail("");
}


  
  return (

<div className="container justify-content-center mt-5">
      <h1>ADD CONTACT</h1>
      <form onSubmit={add}>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Name
          </label>
          <input
           type="text" className="form-control" placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddContactComp;
