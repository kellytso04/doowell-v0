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

export function updateTask(taskID, updateText) {
  const body = {
    taskID: taskID,
    updateText: updateText
  }

  return axios.put('/tasks', body)
    .catch( (err) => {
      console.error(err);
    })
}

export function completeTask(taskID) {
  return axios.put('/tasks/complete', {taskID: taskID})
    .catch( (err) => {
      console.error(err);
    })
}

export function deleteTask(taskID) {
  const config = {
    method: 'delete',
    url: '/tasks',
    headers: {
      'Content-Type': 'application/json'
    },
    data: { 'taskID': taskID }
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

export function updateReminder(reminderID, updateText) {
  const body = {
    reminderID: reminderID,
    updateText: updateText
  }

  return axios.put('/reminders', body)
    .catch( (err) => {
      console.error(err);
    })
}

export function deleteReminder(reminderID) {
  const config = {
    method: 'delete',
    url: '/reminders',
    headers: {
      'Content-Type': 'application/json'
    },
    data: { 'reminderID': reminderID }
  };

  return axios(config)
    .catch( (err) => {
      console.error(err);
    });
}

export function completeReminder(reminderID) {
  return axios.put('/reminders/complete', {reminderID: reminderID})
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

export function completeHabit(habitObject) {
  return axios.post('/habits', habitObject)
    .catch( (err) => {
      console.error(err);
    });
}

export function deleteHabit(text) {
  const config = {
    method: 'delete',
    url: '/tracked_habits',
    headers: {
      'Content-Type': 'application/json'
    },
    data: { 'habit': text }
  };

  return axios(config)
    .catch( (err) => {
      console.error(err);
    });
}

export function fetchNotes() {
  return axios.get('/notes')
    .then( (notes) => {
      return notes;
    })
    .catch( (err) => {
      console.error(err);
    });
}

export function postNotes(notes) {
  return axios.post('/notes', { notes: notes })
    .catch( (err) => {
      console.error(err);
    });
}

export function editNotes(notes) {
  return axios.put('/notes', {notes: notes})
    .catch( (err) => {
      console.error(err);
    });
}

export function fetchIncompleteTasks() {
  return axios.get('tasks/incomplete')
    .then( (incompleteTasks) => {
      return incompleteTasks;
    })
    .catch( (err) => {
      console.error(err);
    });
}

export function fetchIncompleteReminders() {
  return axios.get('reminders/incomplete')
    .then( (incompleteReminders) => {
      return incompleteReminders;
    })
    .catch( (err) => {
      console.error(err);
    });
}