import React, { useState } from 'react';

const NewHabitForm = ( {handleAdd} ) => {
  const [ habitText, setHabitText ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(habitText);
    setHabitText('');
  }

  return (
    <form className='habit-form'>
      <br />
      <input
        type='text'
        placeholder='Making a goal to...'
        value={habitText}
        onChange={(e) => { setHabitText(e.target.value) }}
      />
      <button type='submit' value='+' onClick={handleSubmit}>+</button>
    </form>
  )
}

export default NewHabitForm;
