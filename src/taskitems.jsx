const Taskitems=({ todo, toggleComplete, deleteTodo })=>{
    return (
        <li  className="items" style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
            className="todolist"
          />
          <label for="todolist">{todo.task}</label>&nbsp;
          <button className="button-21" onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
      );
}
export default Taskitems;