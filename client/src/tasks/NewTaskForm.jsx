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
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Add a new task</label>
      <br />
      <input type='text' placeholder='Task' onChange={handleTaskChange} />
      <input type='text' placeholder='Category' onChange={handleCategoryChange} />
      <input type='submit'/>
    </form>
  )
}

export default NewTaskForm;
