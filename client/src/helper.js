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

export function addTask( {taskText, category, hex_color} ) {
  const body = {
    task: taskText,
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
