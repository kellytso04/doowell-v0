import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchHabits, addHabit } from '../helper.js';
import Habit from './Habit.jsx';
import NewHabitForm from './NewHabitForm.jsx';

const HabitList = () => {
  const [ habits, setHabits ] = useState([]);
  const [ habitCount, setHabitCount ] = useState('');

  useEffect(() => {
    fetchHabits()
      .then( ({data}) => {
        setHabitCount(data.length);
        setHabits(data);
      })
      .catch( (err) => {
        console.error(err);
      })
  }, []);

  const handleAdd = (habit) => {
    if (habitCount > 5) {
      alert('You\'ve reached the maximum number of tracked habits');
    } else {
      setHabitCount(habitCount + 1);
      addHabit(habit)
        .then( () => {
          fetchHabits()
            .then( ({data}) => {
              setHabits(data);
            })
            .catch( (err) => {
              console.error(err);
            })
        })
        .catch( (err) => {
          console.error(err);
        })
    }
  }

  // TODO: Handle editing habit

  // TODO: Handle deleting habit

  return (
    <div className='habits'>
      <ul className='habit-list'>
        { habits.length ? habits.map( (habit, i) => (
          <Habit text={habit.habit} key={i} no={i} />
        )) : null }
      </ul>
      <br />
      { habitCount < 6 ? <NewHabitForm handleAdd={handleAdd} />
      : <div>You're at the maximum number of habits. Untrack one to add another</div> }
    </div>
  )
}

export default HabitList;