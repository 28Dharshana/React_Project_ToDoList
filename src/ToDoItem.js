import React from 'react';

function ToDoItem({ task, deleteTask, toggleCompleted }) {
  function handleChange() {
    toggleCompleted(task.id);
  }

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={task.status}
        onChange={handleChange}
      />
      
      <p style={{ textDecoration: task.status ? 'line-through' : 'none' }}>
        {task.text}
      </p>
      
      {/* Show description if available */}
      {task.description && (
        <p style={{ fontStyle: 'italic', fontSize: '0.9em', marginLeft: '20px' }}>
          {task.description}
        </p>
      )}

      <small style={{ fontSize: '0.8em', color: '#888' }}>
        Added on: {task.date}
      </small>
      
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}
export default ToDoItem;