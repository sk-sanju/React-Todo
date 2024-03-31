import React, { useState } from 'react';
import Active from './components/active';
import Complete from './components/Complete';
import Deleted from './components/Deleted';
import './app.css';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [activeTasks, setActiveTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [deletedTasks, setDeletedTasks] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setActiveTasks([...activeTasks, inputValue]);
      setInputValue('');
    }
  };

  const handleCompleteTask = (index) => {
    const taskToComplete = activeTasks[index];
    setActiveTasks(activeTasks.filter((_, i) => i !== index));
    setCompletedTasks([...completedTasks, taskToComplete]);
  };

  const handleDeleteTask = (index, category) => {
    if (category === 'active') {
      const taskToDelete = activeTasks[index];
      setActiveTasks(activeTasks.filter((_, i) => i !== index));
      setDeletedTasks([...deletedTasks, taskToDelete]);
    } else if (category === 'completed') {
      const taskToDelete = completedTasks[index];
      setCompletedTasks(completedTasks.filter((_, i) => i !== index));
      setDeletedTasks([...deletedTasks, taskToDelete]);
    }
  };

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter task..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTask}>
          <i className="fas fa-plus"></i>
        </button>
      </div>
      <div className="sections">
        <Active tasks={activeTasks} onComplete={handleCompleteTask} onDelete={handleDeleteTask} />
        <Complete tasks={completedTasks} onDelete={handleDeleteTask} />
        <Deleted tasks={deletedTasks} />
      </div>
    </div>
  );
};

export default App;
