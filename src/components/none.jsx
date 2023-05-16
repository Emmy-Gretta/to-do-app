import React, { useState } from "react";
const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", completed: true },
    { id: 2, title: "Task 2", completed: false },
    { id: 3, title: "Task 3", completed: true },
    // ... more tasks
  ]);
  const [filter, setFilter] = useState("all"); // Possible values: "all", "completed", "incomplete"
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") {
      return true; // Show all tasks
    } else if (filter === "completed") {
      return task.completed; // Show only completed tasks
    } else if (filter === "incomplete") {
      return !task.completed; // Show only incomplete tasks
    }
  });
  return (
    <div>
      <div>
        Filter:
        <select value={filter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default TaskList;