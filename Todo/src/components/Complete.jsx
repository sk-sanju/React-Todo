import React from 'react'

const Complete = ({ tasks, onDelete }) => {
  return (
    <div className="section">
      <h2>Completed Tasks</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span style={{color:'green'}}>{task}</span>
            <button onClick={() => onDelete(index, 'completed')} className='fa fa-trash'></button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Complete;
