import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import { useImmerReducer } from "use-immer";

let id = 0;

const initialNotes = [
  { id: id++, text: "learn HTML", done: false },
  { id: id++, text: "learn CSS", done: false },
  { id: id++, text: "learn JAVASCRIPT", done: false },
  { id: id++, text: "learn REACT", done: false },
];

function notesReducer(draft, action) {
  switch (action.type) {
    case "ADD_NOTE":
      draft.push({
        id: id++,
        text: action.text,
        done: false,
      });
      break;

    case "CHANGE_NOTE": {
      const index = draft.findIndex(note => note.id === action.id);
      draft[index].text = action.text;
      draft[index].done = action.done;
      break;
    }

    case "DELETE_NOTE": {
      const index = draft.findIndex(note => note.id === action.id);
      draft.splice(index, 1);
      break;
    }

    default:
      break;
  }
}

export default function NoteApp() {
  const [notes, dispatch] = useImmerReducer(notesReducer, initialNotes);

  function handleAddNote(text) {
    dispatch({
      type: "ADD_NOTE",
      text: text,
    });
  }

  function handleChangeNote(note) {
    dispatch({
      type: "CHANGE_NOTE",
      id: note.id,
      text: note.text,
      done: note.done,
    });
  }

  function handleDeleteNote(note) {
    dispatch({
      type: "DELETE_NOTE",
      id: note.id,
    });
  }

  return (
    <div>
      <h1>Note App</h1>
      <NoteForm onAddNote={handleAddNote} />
      <NoteList
        notes={notes}
        onChange={handleChangeNote}
        onDelete={handleDeleteNote}
      />
    </div>
  );
}


