import React from "react";

export const ContactPicker = ({ contacts, onChange }) => {
  return (
    <select onChange={onChange}>
      <option key={-1} value={null} selected>
        Select a contact
      </option>
      {contacts.map((c, i) => (
        <option key={i} value={c.name}>{c.name} ({c.phone})</option>
      ))}
    </select>
  );
};
