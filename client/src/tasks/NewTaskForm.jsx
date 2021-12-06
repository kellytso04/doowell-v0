import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledTaskForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 40%;
  justify-content: center;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  border: white 2px solid;
  padding: 5px;
  border-radius: 10%;
`

const NewTaskForm = ( {handleAdd} ) => {
  const [ taskText, setTaskText ] = useState('');
  const [ category, setCategory ] = useState('');

  const handleTaskChange = (e) => {
    setTaskText(e.target.value);
  }

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const taskObject = {
      taskText: taskText,
      category: category
    }

    handleAdd(taskObject);
    setTaskText('');
    setCategory('');
  }

  return (
    <StyledTaskForm className='task-form' >
      <input type='text' placeholder='Task' value={taskText} onChange={handleTaskChange} />
      <input type='text' placeholder='Category' value={category} onChange={handleCategoryChange} />
      <button type='submit' value='+' onClick={handleSubmit} style={{width: '99%'}}>+</button>
    </StyledTaskForm>
  )
}

export default NewTaskForm;
