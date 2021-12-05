import React, { useState, useEffect } from 'react';

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
    <form >
      <br />
      <input type='text' placeholder='Task' value={taskText} onChange={handleTaskChange} />
      <input type='text' placeholder='Category' value={category} onChange={handleCategoryChange} />
      <button type='submit' value='+' onClick={handleSubmit}>+</button>
    </form>
  )
}

export default NewTaskForm;
