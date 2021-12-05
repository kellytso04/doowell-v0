import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { AppContainer, GroupAContainer, GroupBContainer, TaskReminderContainer, HabitContainer, Footer } from '../styles/app.styled.js';
import NamePrompt from './welcome/NamePrompt.jsx';
import Dashboard from './welcome/Dashboard.jsx';
import TaskList from './tasks/TaskList.jsx';
import ReminderList from './reminders/ReminderList.jsx';
import HabitList from './habits/HabitList.jsx';
import Notes from './notes/Notes.jsx';

const App = () => {
  const [ name, setName ] = useState('Kelly');

  return (
    <div className='appParent'>
      <AppContainer >
        <GroupAContainer >
          { name.length ? <Dashboard name={name} /> : <NamePrompt setName={setName} /> }
          <TaskReminderContainer>
            <br />
            { name.length ? <TaskList /> : null }
            <br />
            <br />
            { name.length ? <ReminderList /> : null }
          </TaskReminderContainer>
        </ GroupAContainer>
        <br />
        <br />
        <GroupBContainer >
          { name.length ? <HabitList /> : null }
          <br />
          <br />
          { name.length ? <Notes /> : null }
        </ GroupBContainer>
        <br />
      </AppContainer>
      <footer className='footer'>
        <a href='https://github.com/kellytso04/doowell' target='_blank' rel='noopener noreferrer' className='repo-link'>View on GitHub</a>
      </footer>
    </div>
  )
}

ReactDOM.render(< App />, document.getElementById('app'));