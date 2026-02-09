import { useState } from "react";

function TodoForm({ addTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 flex-1 rounded"
        placeholder="Tambah tugas..."
      />
      <button className="bg-blue-500 text-white px-4 rounded">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
