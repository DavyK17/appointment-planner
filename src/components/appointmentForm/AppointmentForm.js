import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={({target: { value }}) => setTitle(value)}
        required
        placeholder="Title"
      />
      <input
        type="date"
        value={date}
        onChange={({target: { value }}) => setDate(value)}
        required
        placeholder="Date"
        min={getTodayString()}
      />
      <input
        type="time"
        value={time}
        onChange={({target: { value }}) => setTime(value)}
        required
        placeholder="Time"
      />
      <ContactPicker contacts={contacts} onChange={({target: { value }}) => setContact(value)} />
      <input type="submit" value="Add appointment" />
    </form>
  );
};
