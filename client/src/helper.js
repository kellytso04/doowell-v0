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
  })
}

export function addReminder(reminderText, hex_color) {
  const body = {
    reminderText: reminderText,
    hex_color: hex_color
  }
  return axios.post('/reminders', body)
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