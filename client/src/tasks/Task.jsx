import React, {useState, useEffect} from 'react';
import { fetchTasks, deleteTask } from '../helper.js';
import { TaskContainer, TextContainer, ButtonContainer } from '../../styles/task.styled.js';

const Task = ( {id, taskText, category, color, completed, handleComplete, handleDelete} ) => {
  const [ taskCompleted, setTaskCompleted ] = useState(completed);

  const taskID = `task-${id}`;
  const taskTextID= `task-text-${id}`;

  useEffect( () => {
    const currentTask = document.getElementsByClassName(taskID)[0];
    if (taskCompleted) {
      currentTask.style.opacity = '50%';
      currentTask.style.textDecorationLine = 'line-through';
    } else {
      currentTask.style.opacity = '100%';
      currentTask.style.textDecorationLine = 'none';
    }
  }, [taskCompleted]);

  const handleChange = () => {
    setChecked(!checked);
  }

  const handleCompleteClick = () => {
    const task = document.getElementById(taskTextID);
    task.style.textDecorationLine = 'line-through';

    handleComplete(id);
  }

  const handleDeleteClick = () => {
    handleDelete(id);
  }

  return (
    <TaskContainer className={taskID} >
      <TextContainer id={taskTextID}>
        <span style={{fontSize: '15px'}}>{taskText.toUpperCase()}</span>
        { category.length ? <span className='task-category' style={{fontSize: '14px', opacity: '80%'}}>&nbsp; | &nbsp; [ {category.toLowerCase()} ] </span>
        : null }
      </ TextContainer>
      <ButtonContainer id='task-buttons'>
        <button value='✔️' onClick={handleCompleteClick}>✔️</button>
        <button value='-' onClick={handleDeleteClick}>-</button>
      </ ButtonContainer>
    </TaskContainer >
  )
}

export default Task;