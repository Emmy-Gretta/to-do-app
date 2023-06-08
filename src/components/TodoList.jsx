import React from 'react';

const TodoList = ({ todos, setTodos, setEditTodo, editTodo, filter, setFilter }) => {
  // Marking completed tasks
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  // Editing the name of the existing task
  const handleEdit = (todo) => {
    setEditTodo(todo);
  };

  // Clearing all completed tasks from the list
  const handleClearCompletedTask = () => {
    setTodos((prevTodos) => {
      const newTodo = prevTodos.filter((todo) => !todo.completed);
      return newTodo;
    });
  };

  // Deleting the existing task
  const handleDelete = (todo) => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  // Filter buttons
  const handleFilter = (completed) => {
    setFilter(completed);
  };
  const filteredTodos = filter === 'completed'
    ? todos.filter((todo) => todo.completed)
    : filter === 'incomplete'
      ? todos.filter((todo) => !todo.completed)
      : todos;

  return (
    <div>
      <div className='none'>
      {filteredTodos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className={`list ${todo.completed ? 'complete' : ''}`}
            onChange={(e) => e.preventDefault()}
          />
          <div className='funvButtons'>
            <button className="button-complete" onClick={() => handleComplete(todo)}>
              <i className="ri-checkbox-circle-line"></i>
            </button>
            <button className="button-edit" onClick={() => handleEdit(todo)}>
              <i className="ri-edit-box-fill"></i>
            </button>
            <button className="button-delete" onClick={() => handleDelete(todo)}>
              <i className="ri-delete-bin-line"></i>
            </button>
          </div>
        </li>
      ))}
      </div>
      {
        filteredTodos.length === 0 ? 'Please, Add task! ' : 
        <div className="filter-buttons">
        <button onClick={() => handleFilter('all')} className='btn btn-sm btn-primary'>Show All</button>
        <button onClick={() => handleFilter('completed')} className='btn btn-sm btn-primary'>Show Completed</button>
        <button onClick={() => handleFilter('incomplete')} className='btn btn-sm btn-primary'>Show Incomplete</button>
        <button onClick={handleClearCompletedTask} className="clear btn btn-sm btn-success">Clear completed tasks
</button>
      </div>
      }
    </div>
  );
};
export default TodoList;