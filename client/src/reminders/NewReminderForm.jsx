import React, { useState, useEffect } from 'react';

// {reminder, day, time, location, priority, details, hex_color}
const NewReminderForm = ( {addReminder} ) => {
  const [ reminderText, setReminderText ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    addReminder(reminderText);

    setReminderText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Add a new reminder</label>
      <br />
      <input
        type='text'
        placeholder='Jot something down...'
        value={reminderText}
        onChange={(e) => { setReminderText(e.target.value) }}
      />
      <input type='submit' value='Add my reminder' />
    </form>
  )
}

export default NewReminderForm;
