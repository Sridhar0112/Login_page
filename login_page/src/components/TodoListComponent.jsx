// import React from 'react';

// const TodoListComponent = ({ newTask, setNewTask, addTask }) => {
//   return (
//     <div className="todo-container">
//       {/* <h3>To-Do List</h3> */}
//       <input
//         type="text"
//         placeholder="Add a task..."
//         value={newTask}
//         onChange={(e) => setNewTask(e.target.value)}
//       />
//       <button onClick={addTask}>Add Event</button>
//     </div>
//   );
// };

// export default TodoListComponent;


// TodoListComponent.jsx
import React from 'react';

const TodoListComponent = ({ newTask, setNewTask, addTask }) => {
  return (
    <div className="todo-container">
      <input
        type="text"
        placeholder="Add a task..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add Event</button>
    </div>
  );
};

export default TodoListComponent;
