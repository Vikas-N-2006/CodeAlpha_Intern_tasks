import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, completed: false, id: Date.now() }]);
      setInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  const toggleTask = (id) => {
    const newTasks = tasks.map((task) => 
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  // Calculate completed tasks
  const completedTasks = tasks.filter(task => task.completed).length;

  return (
    <div className="app">
      <header className="header">
        <h1>To-Do List</h1>
        {tasks.length > 0 && (
          <div className="task-counter">
            <span>
              <span className="highlight">{completedTasks}</span> of <span className="highlight">{tasks.length}</span> tasks completed
            </span>
          </div>
        )}
        {completedTasks === tasks.length && tasks.length > 0 && (
          <div className="celebration">🎉 All done!</div>
        )}
      </header>
      <div className="input-container">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a new task..."
          autoFocus
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      {tasks.length === 0 ? (
        <div className="empty-state">
          <p>Your to-do list is empty. Add some tasks to get started!</p>
        </div>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id} className={task.completed ? 'task completed' : 'task'}>
              <div className="task-content">
                <input 
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className="task-checkbox"
                />
                <span onClick={() => toggleTask(task.id)}>{task.text}</span>
              </div>
              <button 
                onClick={() => deleteTask(task.id)} 
                className="delete-icon"
                aria-label="Delete task"
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;