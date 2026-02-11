import { useContext, useState } from "react";
import { NotesDispatchContext } from "./NoteContext";

export default function NoteForm() {
  const [text, setText] = useState("");
  const dispatch = useContext(NotesDispatchContext);

  function handleAdd() {
    dispatch({
      type: "ADD_NOTE",
      text: text
    });
    setText("");
  }

  return (
    <>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add note"
      />
      <button onClick={handleAdd}>Add</button>
    </>
  );
}


