import { useContext } from "react";
import { NotesContext } from "./NoteContext";
import Note from "./Note";

export default function NoteList() {
  const notes = useContext(NotesContext);

  return (
    <ul>
      {notes.map(note => (
        <li key={note.id}>
          <Note note={note} />
        </li>
      ))}
    </ul>
  );
}
