import React, { useState } from 'react';

const NewHabitForm = ( {handleAdd} ) => {
  const [ habitText, setHabitText ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(habitText);
    setHabitText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Add a new habit</label>
      <br />
      <input
        type='text'
        placeholder='Everyday, I will...'
        value={habitText}
        onChange={(e) => { setHabitText(e.target.value) }}
      />
      <input type='submit' value='+' />
    </form>
  )
}

export default NewHabitForm;
