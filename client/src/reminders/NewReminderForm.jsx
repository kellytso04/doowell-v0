import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledReminderForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 40%;
  justify-content: center;
  margin: auto;
  margin-bottom: 10px;
  border: white 2px solid;
  padding: 5px;
  border-radius: 10%;
`

const NewReminderForm = ( {addReminder} ) => {
  const [ reminderText, setReminderText ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addReminder(reminderText);
    setReminderText('');
  }

  return (
    <StyledReminderForm className='reminder-form'>
      <input
        type='text'
        placeholder="Don't forget..."
        value={reminderText}
        onChange={(e) => { setReminderText(e.target.value) }}
      />
      <button type='submit' value='+' onClick={handleSubmit} style={{width: '100%'}}>+</button>
    </StyledReminderForm>
  )
}

export default NewReminderForm;
