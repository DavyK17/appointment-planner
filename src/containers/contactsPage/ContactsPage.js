import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!duplicate) {
      addContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  useEffect(() => {
    const isDuplicate = () => {
      const result = contacts.find(contact => contact.name === name);
      return (result ? true : false);
    };

    isDuplicate() ? setDuplicate(true) : setDuplicate(false);
  }, [name, contacts, duplicate]);

  const h2Style = { fontWeight: 400, color: "red" };

  return (
    <div>
      <section>
        <h2>Add Contacts{!duplicate || <span style={h2Style}> - Name already exists!</span>}</h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </div>
  );
};
