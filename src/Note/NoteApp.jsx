import { useImmerReducer } from "use-immer";
import { NotesContext, NotesDispatchContext } from "./NoteContext";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

let nextId = 0;

const initialNotes = [
  { id: nextId++, text: "Belajar React", done: false },
  { id: nextId++, text: "Belajar Context", done: false },
   { id: nextId++, text: "Belajar Javascirpt", done: false }
];

function notesReducer(draft, action) {
  switch (action.type) {
    case "ADD_NOTE":
      draft.push({
        id: nextId++,
        text: action.text,
        done: false
      });
      break;

    case "CHANGE_NOTE": {
      const index = draft.findIndex(n => n.id === action.id);
      draft[index] = action;
      break;
    }

    case "DELETE_NOTE":
      return draft.filter(n => n.id !== action.id);

    default:
      break;
  }
}

export default function NoteApp() {
  const [notes, dispatch] = useImmerReducer(notesReducer, initialNotes);

  return (
    <NotesContext.Provider value={notes}>
      <NotesDispatchContext.Provider value={dispatch}>
        <h1>Note App</h1>
        <NoteForm />
        <NoteList />
      </NotesDispatchContext.Provider>
    </NotesContext.Provider>
  );
}




