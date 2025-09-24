import React from 'react';
import './App.css';
import ToDoList from './ToDoList';
function App(){
  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
      </header>
      <ToDoList />
      <footer className="App-footer">
        <p>Made with ❤️</p>
      </footer>
    </div>
  );
}
export default App;