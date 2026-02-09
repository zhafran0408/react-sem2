import { use, useState } from "react";

export default function Note({ note, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let component;

  function handleChangeText(e) {
    const mewNote = { ...note, text: e.target.value };
    onChange(mewNote);
  }

  if (isEditing) {
    component = (
      <>
        <input value={note.text} onChange={handleChangeText} />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    component = (
      <>
        {note.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  function handleChangeDone(e) {
    const mewNote = { ...note, done: e.target.checked };
    onChange(mewNote);
  }

  return (
    <label>
      <input type="checkbox" checked={note.Done} onChange={handleChangeDone} />
      {component}
      <button onClick={() => onDelete(note)}>Delete</button>
    </label>
  );
}
