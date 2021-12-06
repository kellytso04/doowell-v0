import React, { useState, useEffect } from 'react';
import { HabitContainer, TextContainer, ButtonContainer } from '../../styles/habit.styled.js';
import { completeHabit } from '../helper.js';

const Habit = ({text, no, handleDelete}) => {
  const habitID = `habit-${no}`;
  const buttonID = `-habit-${no}`;

  const handleCompleteClick = () => {
    const habitObject = {
      habit: text,
      date: new Date()
    }
    completeHabit(habitObject);

    const completeBtn = document.getElementById(`complete${buttonID}`);
    completeBtn.disabled = true;

    const habit = document.getElementById(habitID);
    habit.style.opacity = '50%';
  }

  const handleDeleteClick = () => {
    handleDelete(text);
  }

  return (
    <HabitContainer id={habitID}>
      <TextContainer>
        {text}
      </ TextContainer>
      <ButtonContainer >
        <button id={`complete${buttonID}`} value='✔️' onClick={handleCompleteClick}>✔️</button>
        <button id={`delete${buttonID}`} value='-' onClick={handleDeleteClick}>-</button>
      </ ButtonContainer>
    </HabitContainer>
  )
}

export default Habit;