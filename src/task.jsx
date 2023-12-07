import Taskitems from "./taskitems";
const TaskList=({ todos, toggleComplete, deleteTodo })=>{
    return(
        <div className="container1">
        <ol className="items">
      {todos.map((todo) => (
        <Taskitems
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </ol>  
    </div> 
    );
}
export default TaskList;