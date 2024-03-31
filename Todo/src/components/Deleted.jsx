import React from 'react'

const Deleted = ({ tasks }) => {
  return (
    <div className="section">
      <h2>Deleted Tasks</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span style={{color:'red'}} >{task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Deleted;
