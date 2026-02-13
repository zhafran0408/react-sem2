import { useState, useRef } from "react";
import GuestBookForm from "./GuestBookForm";

export default function GuestBook() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [guests, setGuests] = useState([]);

  const nameInputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !message) return;

    const newGuest = {
      id: Date.now(),
      name,
      message,
    };

    setGuests([...guests, newGuest]);

    setName("");
    setMessage("");

    // fokus kembali ke input name
    nameInputRef.current.focus();
  }

  return (
    <>
      <h1>Guest Book</h1>

      <form onSubmit={handleSubmit}>
        <GuestBookForm
          name={name}
          setName={setName}
          inputRef={nameInputRef}
        />

        <label>Message</label><br />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <br />

        <button type="submit">Submit</button>
      </form>

      <h2>Jawaban teman</h2>
      <ul>
        {guests.map((guest) => (
          <li key={guest.id}>
            <b>{guest.name}</b>: {guest.message}
          </li>
        ))}
      </ul>
    </>
  );
}




