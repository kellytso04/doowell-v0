import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {fetchReminders, addReminder, updateReminder, deleteReminder} from '../helper.js';
import Reminder from './Reminder.jsx';
import NewReminderForm from './NewReminderForm.jsx';

const ReminderList = (props) => {
  const [ reminders, setReminders ] = useState([]);

  useEffect( () => {
    fetchReminders()
      .then( (reminders) => {
        setReminders(reminders);
      })
      .catch( (err) => {
        console.error(err);
      })
  }, []);

  const handleAdd = (reminderObject) => {
    addReminder(reminderObject)
      .then( () => {
        fetchReminders()
          .then( (reminders) => {
            setReminders(reminders);
          })
          .catch( (err) => {
            console.error(err);
          })
      })
      .catch( (err) => {
        console.error(err);
      });
  }

  const handleEdit = (reminderText, updateText) => {
    updateReminder(reminderText, updateText)
      .then( () => {
        fetchReminders()
        .then( (reminders) => {
          setReminders(reminders);
        })
        .catch( (err) => {
          console.error(err);
        })
      })
      .catch( (err) => {
        console.error(err);
      });
  }

  const handleDelete = (reminderText) => {
    deleteReminder(reminderText)
      .then( () => {
        fetchReminders()
          .then( (reminders) => {
            setReminders(reminders);
          })
          .catch( (err) => {
            console.error(err);
          })
      })
      .catch( (err) => {
        console.error(err);
      });
  }

  return (
    <div className='reminders'>
      <ul className='reminder-list'>
        { reminders.length ? reminders.map( (reminder, i) => (
          <Reminder text={reminder.reminder} color={reminder.hex_color} key={i} />
        )) : null }
      </ul>
      <br />
      <NewReminderForm addReminder={handleAdd} />
    </div>

  )
}

export default ReminderList;