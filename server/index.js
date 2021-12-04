const express = require('express');
const app = express();

const { client } = require('../db/config.js');
const habit = require('./models/habitModel.js');
const task = require('./models/taskModel.js');
const reminder = require('./models/reminderModel.js');

// -- Middleware ----------------------------------------------------------------------
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(express.urlencoded( {extended: true} ));

// -- Routes --------------------------------------------------------------------------
app.get('/habits', (req, res) => {
  const queryString = `SELECT * FROM habits`;

  client.query(queryString, (err, habits) => {
    if (err) {
      console.error(err);
    }
      console.log('Received back: ', habits);
      res.status(200).send(habits);
  });
});

app.post('/habits', (req, res) => {
  const queryString = `INSERT INTO habits (habit, date, hex_color) VALUES(?, ?, ?)`;
  const queryArgs = [req.body.habit, req.body.date, req.body.hex_color];

  return client.query(queryString, queryArgs, (err) => {
    if (err) {
      console.error(err);
    } else {
      res.sendStatus(201);
    }
  });
});

app.put('/habits', (req, res) => {
  const queryString = `UPDATE habits SET habit = ${req.body.updateText} WHERE habit = ${req.body.habit}`;

  return client.query(queryString, (err) => {
    if (err) {
      console.error(err);
    } else {
      res.sendStatus(202);
    }
  });
});

app.delete('/habits', (req, res) => {
  const queryString = `DELETE FROM habits WHERE habit=(?)`;
  const queryArg = [req.body.habit]

  return client.query(queryString, queryArg, (err) => {
    if (err) {
      console.error(err);
    } else {
      res.sendStatus(204);
    }
  });
});

app.get('/tasks', (req, res) => {
  const queryString = `SELECT * FROM tasks WHERE completed = 0`;

  client.query(queryString, (err, tasks) => {
    if (err) {
      console.error(err);
    }
      console.log('Received back: ', tasks);
      res.status(200).send(tasks);
  });
});

app.post('/tasks', (req, res) => {
  const queryString = `INSERT INTO tasks (task, category, hex_color) VALUES(?, ?, ?)`;
  const queryArgs = [req.body.task, req.body.category, req.body.hex_color];

  return client.query(queryString, queryArgs, (err) => {
    if (err) {
      console.error(err);
    } else {
      res.sendStatus(201);
    }
  });
});

app.put('/tasks', (req, res) => {
  const queryString = `UPDATE tasks SET task = ${req.body.updateText} WHERE task = ${req.body.taskText}`;

  return client.query(queryString, (err) => {
    if (err) {
      console.error(err);
    } else {
      res.sendStatus(202);
    }
  });
});

app.delete('/tasks', (req, res) => {
  const queryString = `DELETE FROM tasks WHERE task=(?)`;
  const queryArg = [req.body.task]

  return client.query(queryString, queryArg, (err) => {
    if (err) {
      console.error(err);
    } else {
      res.sendStatus(204);
    }
  });
});

app.get('/reminders', (req, res) => {
  const queryString = `SELECT * FROM reminders`;

  client.query(queryString, (err, reminders) => {
    if (err) {
      console.error(err);
    }
      console.log('Received back: ', reminders);
      res.status(200).send(reminders);
  });
});

app.post('/reminders', (req, res) => {
  const queryString = `INSERT INTO reminders (reminder, day, time, location, priority, details, hex_color) VALUES(?, ?, ?, ?, ?, ?, ?)`;
  const queryArgs = [req.body.reminder, req.body.day, req.body.time, req.body.location, req.body.priority, req.body.details, req.body.hex_color];

  return client.query(queryString, queryArgs, (err) => {
    if (err) {
      console.error(err);
    } else {
      res.sendStatus(201);
    }
  });
});

app.put('/reminders', (req, res) => {
  const queryString = `UPDATE reminders SET reminder = ${req.body.updateText} WHERE reminder = ${req.body.reminder}`;

  return client.query(queryString, (err) => {
    if (err) {
      console.error(err);
    } else {
      res.sendStatus(202);
    }
  });
});

app.delete('/reminders', (req, res) => {
  const queryString = `DELETE FROM reminders WHERE reminder=(?)`;
  const queryArg = [req.body.reminder]

  return client.query(queryString, queryArg, (err) => {
    if (err) {
      console.error(err);
    } else {
      res.sendStatus(204);
    }
  });
});

// ------------------------------------------------------------------------------------
app.listen(8080, (err) => {
  if (err) {
    throw new Error(err);
  } else {
    console.log('Listening on port 8080 🐠');
  }
});