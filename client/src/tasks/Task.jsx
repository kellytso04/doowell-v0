import React, {useState, useEffect} from 'react';
import { fetchTasks, deleteTask } from '../helper.js';

const Task = ( {taskText, category, color, handleDelete} ) => {
  const [ checked, setChecked ] = useState(false);

  useEffect( () => {
    const currentTask = document.getElementsByClassName('task')[0];
    if (checked) {
      currentTask.style.opacity = '75%';
    } else {
      currentTask.style.opacity = '100%';
    }
  }, [checked]);

  const handleChange = () => {
    setChecked(!checked);
  }

  const handleClick = () => {
    handleDelete(taskText);
  }

  return (
    <div className='task' style={{color: `${color}`}}>
      <span className='task-description'>
        {taskText}
        <br />
        {category}
      </span>
      <span>
        <input
          type='checkbox'
          checked={checked}
          onChange={handleChange}
        />
        <button value='Delete task' onClick={handleClick}>Delete task</button>
      </span>
    </div>
  )
}

export default Task;