import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import {fetchReminders, addReminder, updateReminder, deleteReminder, completeReminder} from '../helper.js';
import Reminder from './Reminder.jsx';
import NewReminderForm from './NewReminderForm.jsx';

const StyledReminderList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  height: 100%;
  overflow-y: auto;
  margin: 0;
  border: #A8D0E6 solid 2px;
  margin-left: 4px;
  scroll-behavior: smooth;
`

const ReminderList = (props) => {
  const [ reminders, setReminders ] = useState([]);

  const { reminderData, setReminderData } = useContext(TaskDataContext);

  useEffect(() => {
    setReminderData(reminders.length);
  }, [reminders, setReminderData]);

  useEffect( () => {
    fetchReminders()
      .then( ({data}) => {
        setReminders(data);
      })
      .catch( (err) => {
        console.error(err);
      })
  }, []);

  const handleAdd = (reminderText) => {
    addReminder(reminderText)
      .then( () => {
        fetchReminders()
          .then( ({data}) => {
            setReminders(data);
          })
          .catch( (err) => {
            console.error(err);
          })
      })
      .catch( (err) => {
        console.error(err);
      });
  }

  const handleEdit = (reminderID, updateText) => {
    updateReminder(reminderID, updateText)
      .then( () => {
        fetchReminders()
        .then( ({data}) => {
          setReminders(data);
        })
        .catch( (err) => {
          console.error(err);
        })
      })
      .catch( (err) => {
        console.error(err);
      });
  }

  const handleDelete = (reminderID) => {
    deleteReminder(reminderID)
      .then( () => {
        fetchReminders()
          .then( ({data}) => {
            setReminders(data);
          })
          .catch( (err) => {
            console.error(err);
          })
      })
      .catch( (err) => {
        console.error(err);
      });
  }

  const handleComplete = (reminderID) => {
    completeReminder(reminderID)
      .catch( (err) => {
        console.error(err);
      })
  }

  return (
    <StyledReminderList className='reminders'>
        <div className='reminders-title' style={{textAlign: 'center'}}>
          Reminders
        </div>
      <div className='reminder-list' style={{padding: '0'}}>
        { reminders.length ? reminders.map( (reminder, i) => (
          <Reminder
            id={reminder.id}
            text={reminder.reminder}
            handleComplete={handleComplete}
            key={i}
            no={i}/>
        )) : null }
      </div>
      <br />
      <NewReminderForm addReminder={handleAdd} style={{alignSelf: 'flex-end'}} />
    </StyledReminderList >

  )
}

export default ReminderList;