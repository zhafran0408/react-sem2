function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className="flex items-center justify-between border p-2 rounded">
      <span
        onClick={() => toggleTodo(todo.id)}
        className={`cursor-pointer ${
          todo.completed ? "line-through text-gray-400" : ""
        }`}
      >
        {todo.text}
      </span>

      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-500"
      >
        ❌
      </button>
    </li>
  );
}

export default TodoItem;
