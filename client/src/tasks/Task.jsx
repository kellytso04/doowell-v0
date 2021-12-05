import React, {useState, useEffect} from 'react';
import { fetchTasks, deleteTask } from '../helper.js';
import { TaskContainer, TextContainer, ButtonContainer } from '../../styles/task.styled.js';

const Task = ( {taskText, category, color, no, handleComplete, handleDelete} ) => {
  const [ checked, setChecked ] = useState(false);

  const taskID = `task-${no}`;
  const taskTextID= `task-text-${no}`;

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

  const handleCompleteClick = () => {
    const task = document.getElementById(taskTextID);
    task.style.textDecorationLine = 'line-through';

    handleComplete(taskText);
  }

  const handleDeleteClick = () => {
    handleDelete(taskText);
  }

  return (
    <TaskContainer className={taskID} >
      <TextContainer id={taskTextID}>
        <div style={{'fontFamily': 'Varela Round, sans-serif', 'fontSize': '15px'}}>{taskText.toUpperCase()}</div>
        <div className='task-category' style={{'fontFamily': 'EB Garamond', 'fontSize': '12px'}}> {category.toUpperCase()} </div>
      </ TextContainer>
      <ButtonContainer id='task-buttons'>
        <button value='✔️' onClick={handleCompleteClick}>✔️</button>
        <button value='-' onClick={handleDeleteClick}>-</button>
      </ ButtonContainer>
    </TaskContainer >
  )
}

export default Task;