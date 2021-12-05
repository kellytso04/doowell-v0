import React, { useState, useEffect } from 'react';
import { ReminderContainer, TextContainer, ButtonContainer } from '../../styles/reminder.styled.js';

// {reminder, day, time, location, priority, details, hex_color}
const Reminder = ( {id, text, handleComplete} ) => {
  const reminderID = `reminder-text-${id}`;

  const handleClick = () => {
    const reminderText = document.getElementsByClassName(reminderID)[0];
    reminderText.style.textDecorationLine = 'line-through';

    handleComplete(id);
  }

  return (
    <ReminderContainer className='reminder'>
      <TextContainer className={reminderID} style={{'fontFamily': 'Varela Round, sans-serif'}} >{text}</ TextContainer>
      <ButtonContainer >
        <button onClick={handleClick}>✔️</button>
      </ ButtonContainer>
    </ReminderContainer >
  )
}

export default Reminder;
