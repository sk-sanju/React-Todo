import React from 'react';

const Active = ({ tasks, onComplete, onDelete }) => {
  return (
    <div className="section">
      <h2>Active Tasks</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <button onClick={() => onComplete(index)} className='fa fa-square-check'></button>
            &nbsp; <span>{task}</span>
            <button onClick={() => onDelete(index, 'active')}className='fa fa-trash'></button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Active;
