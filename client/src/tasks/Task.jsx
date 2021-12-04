import React, {useState, useEffect} from 'react';
import { fetchTasks, deleteTask } from '../helper.js';

const Task = ( {taskText, category, color, no, handleDelete} ) => {
  const [ checked, setChecked ] = useState(false);

  const taskID = `task-${no}`;
  useEffect( () => {
    const currentTask = document.getElementsByClassName(taskID)[0];
    if (checked) {
      currentTask.style.opacity = '50%';
      currentTask.style.textDecorationLine = 'line-through';
    } else {
      currentTask.style.opacity = '100%';
      currentTask.style.textDecorationLine = 'none';
    }
  }, [checked]);

  const handleChange = () => {
    setChecked(!checked);
  }

  const handleDoneClick = () => {
    // TODO: Updates task's 'Completed' status in db

  }

  const handleDeleteClick = () => {
    handleDelete(taskText);
  }

  return (
    <div className={taskID} style={{color: `${color}`}}>
      <span className='task-description'>
        {taskText}
        <br />
        {category}
      </span>
      <span>
        <button value='✔️' onClick={handleDoneClick}>✔️</button>
        <button value='-' onClick={handleDeleteClick}>-</button>
      </span>
    </div>
  )
}

export default Task;