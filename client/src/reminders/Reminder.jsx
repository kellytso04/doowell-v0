import React, { useState, useEffect } from 'react';
import { ReminderContainer, TextContainer, ButtonContainer } from '../../styles/reminder.styled.js';

// {reminder, day, time, location, priority, details, hex_color}
const Reminder = ( {text, handleComplete, no} ) => {
  const reminderID = `reminder-text-${no}`;

  const handleClick = () => {
    const reminderText = document.getElementsByClassName(reminderID)[0];
    reminderText.style.textDecorationLine = 'line-through';

    handleComplete(text);
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