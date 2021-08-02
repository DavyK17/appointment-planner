import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={({target: { value }}) => setName(value)}
        required
        placeholder="Name"
      />
      <input
        type="tel"
        value={phone}
        onChange={({target: { value }}) => setPhone(value)}
        pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
        required
        placeholder="Phone number"
      />
      <input
        type="email"
        value={email}
        onChange={({target: { value }}) => setEmail(value)}
        required
        placeholder="Email address"
      />
      <input type="submit" />
    </form>
  );
};