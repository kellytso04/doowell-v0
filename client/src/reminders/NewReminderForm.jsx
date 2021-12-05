import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ReminderForm = styled.form`
  display: flex;
  align-text: center;
  margin: auto;
`

const NewReminderForm = ( {addReminder} ) => {
  const [ reminderText, setReminderText ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addReminder(reminderText);
    setReminderText('');
  }

  return (
    <ReminderForm className='reminder-form'>
      <br />
      <input
        type='text'
        placeholder="Don't forget..."
        value={reminderText}
        onChange={(e) => { setReminderText(e.target.value) }}
      />
      <button type='submit' value='+' onClick={handleSubmit}>+</button>
    </ReminderForm>
  )
}

export default NewReminderForm;
