import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Habit = ({text, no}) => {
  const habitID = `habit-${no}`;

  return (
    <div className={habitID}>
      {text}
    </div>
  )
}

export default Habit;