import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { AppContainer, ComponentContainer, GroupAContainer, GroupBContainer, TaskReminderContainer, HabitContainer, Footer } from '../styles/app.styled.js';
import NamePrompt from './welcome/NamePrompt.jsx';
import Dashboard from './welcome/Dashboard.jsx';
import TaskList from './tasks/TaskList.jsx';
import ReminderList from './reminders/ReminderList.jsx';
import HabitList from './habits/HabitList.jsx';
import Notes from './notes/Notes.jsx';

const App = () => {
  const [ name, setName ] = useState('Kelly');
  // TODO: Refactor so that Dashboard has taskNumber and reminderNumber

  const [ tasks, setTasks ] = useState([]);
  const [ reminders, setReminders ] = useState([]);
  // const [ date, setDate ] = useState('');

  // TODO: Give Dashboard name, taskNumber, reminderNumber, and date
  // TODO: Give TaskList and ReminderList their props
  // TODO: On mount, fetch tasks/reminders and get today's date

  return (
    <div className='appParent'>
      <AppContainer >
        <GroupAContainer >
          { name.length ? <Dashboard name={name} /> : <NamePrompt setName={setName} /> }
          <br />
          { name.length ? <Notes /> : null }
        </ GroupAContainer>
        <GroupBContainer >
          <TaskReminderContainer >
            <br />
            { name.length ? <TaskList /> : null }
            <br />
            { name.length ? <ReminderList /> : null }
          </ TaskReminderContainer>
          <br />
          { name.length ? <HabitList /> : null }
        </ GroupBContainer>
      </AppContainer>
      <footer className='footer' style={{alignItems: 'center'}}>
        <p><a href='https://github.com/kellytso04/doowell' target='_blank' rel='noopener noreferrer' className='repo-link'>View <b>Doowell</b> on GitHub</a></p>
      </footer>
    </div>
  )
}

ReactDOM.render(< App />, document.getElementById('app'));