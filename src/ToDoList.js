import React, { useState } from 'react';
import ToDoItem from './ToDoItem';

function ToDoList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learning React', status: true,description: 'Study components and hooks' },
    { id: 2, text: 'Party', status: false,description : 'Celebrate with friends' }
  ]);
  const [text, setText] = useState('');
  const [description, setDescription] = useState('');   
  
  function addTask() {
    if (text.trim() === '') return; // avoid adding empty tasks
    const newTask = {
      id: Date.now(),
      text,
      status: false, // default to false for new tasks
      date: new Date().toLocaleDateString(),
      description: description
    };
    setTasks([...tasks, newTask]);
    setText('');
    setDescription(''); // reset description after adding task  
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function toggleCompleted(id) {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, status: !task.status } : task
      )
    );
  }

  return (
    <div className="todo-list">
      {tasks.map(task => (
        <ToDoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
        />
      ))}
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        placeholder="Task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={addTask}>Add</button>
    </div>
  );
}

export default ToDoList;