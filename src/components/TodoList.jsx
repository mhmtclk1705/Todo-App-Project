import React from "react";

const TodoList = ({ todos, setTodos,setEditTodo }) => {

    const handleDelete = ({id}) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const handleComplete = (todo) => {
        setTodos(todos.map(item => (item.id === todo.id ? {...item, completed: !item.completed} : item)));
    };
    const handleEdit = ({id}) => {
        const findTodo = todos.find(todo => todo.id === id)
        setEditTodo(findTodo);
    };

  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            className={`list ${todo.completed ? "complete" : ""}`}
            value={todo.title}
            onChange={(e) => e.preventDefault()}
          />
            <button className="button-complete task-button" onClick={() => handleComplete(todo)}>
                <i className="fa fa-check-circle"></i>
            </button>
            <button className="button-edit task-button" onClick={()=> handleEdit(todo)}>
                <i className="fa fa-edit"></i>
            </button>
            <button className="button-delete task-button" onClick={() => handleDelete(todo)}>
                <i className="fa fa-trash"></i>
            </button>
        </li>
      )
      )}
    </div>
  );
};

export default TodoList;
