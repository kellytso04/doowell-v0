import axios from 'axios';

export function fetchTasks() {
  return axios.get('/tasks')
  .then( (tasks) => {
    return tasks;
  })
  .catch( (err) => {
    console.error(err);
  })
}

export function addTask( {taskText, category, hex_color = 'd5b8db'} ) {
  const body = {
    taskText: taskText,
    category: category,
    hex_color: hex_color
  }
  return axios.post('/tasks', body)
    .catch( (err) => {
      console.error(err);
    });
}

export function updateTask(taskText, updateText) {
  const body = {
    taskText: taskText,
    updateText: updateText
  }

  return axios.put('/tasks', body)
    .catch( (err) => {
      console.error(err);
    })
}

export function deleteTask(taskText) {
  const config = {
    method: 'delete',
    url: '/tasks',
    headers: {
      'Content-Type': 'application/json'
    },
    data: { 'task': taskText }
  };

  return axios(config)
    .catch( (err) => {
      console.error(err);
    });
}

export function fetchReminders() {
  return axios.get('/reminders')
    .then( (reminders) => {
      return reminders;
    })
    .catch( (err) => {
      console.error(err);
    });
}

export function addReminder(reminderText) {
  return axios.post('/reminders', {reminder: reminderText})
    .catch( (err) => {
      console.error(err);
    });
}

export function updateReminder(reminderText, updateText) {
  const body = {
    reminderText: reminderText,
    updateText: updateText
  }

  return axios.put('/reminders', body)
    .catch( (err) => {
      console.error(err);
    })
}

export function deleteReminder(reminderText) {
  const config = {
    method: 'delete',
    url: '/reminders',
    headers: {
      'Content-Type': 'application/json'
    },
    data: { 'reminder': reminderText }
  };

  return axios(config)
    .catch( (err) => {
      console.error(err);
    });
}

export function completeReminder(reminderText) {
  const body = {
    reminderText: reminderText
  }

  return axios.put('/reminders/complete', body)
    .catch( (err) => {
      console.error(err);
    })
}

export function fetchHabits() {
  return axios.get('/tracked_habits')
    .then( (habits) => {
      return habits;
    })
    .catch( (err) => {
      console.error(err);
    });
}

export function getHabitCount() {
  return axios.get('/tracked_habits/count')
    .then( ( {data} ) => {
      const count = data['COUNT(*)'];
      return count;
    })
    .catch( (err) => {
      console.error(err);
    });
}

export function addHabit(habit) {
  return axios.post('/tracked_habits', { habit: habit })
    .catch( (err) => {
      console.error(err);
    });
}

export function editHabit(habitText, updateText) {
  // TODO: This needs to replace ALL occurrences of `habitText` with `updateText`
  const habitObject = {
    habitText: habitText,
    updateText: updateText
  }

  return axios.post('/habits', habitObject)
    .catch( (err) => {
      console.error(err);
    });
}

export function completeHabit() {

}

export function deleteHabit() {

}