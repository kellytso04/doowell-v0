import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// {reminder, day, time, location, priority, details, hex_color}
const Reminder = ( {text, no} ) => {
  const reminderID = `reminder-text-${no}`;
  const handleClick = () => {
    const reminderText = document.getElementsByClassName(reminderID)[0];
    reminderText.style.textDecorationLine = 'line-through';
  }

  return (
    <div className='reminder'>
      <span className={reminderID} onClick={handleClick}>{text}</span>
    </div >
  )
}

export default Reminder;