import React, { useState, useEffect } from 'react';

const NewTaskForm = () => {
  return (
    <form>
      <label>Add a new task</label>
      <input type='text' placeholder='Task' />
      <input type='text' placeholder='Category' />
    </form>
  )
}

export default NewTaskForm;
