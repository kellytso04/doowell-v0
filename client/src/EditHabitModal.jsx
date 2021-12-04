import React from 'react';
import { editHabit } from './helper.js';

const EditHabitModal = (props) => {
  return (
    <div>
      {props.children}
      <div>
        <button value='update' onClick={(e) => {editHabit}}>Update</button>
      </div>
    </div>
  )
}

export default EditHabitModal;