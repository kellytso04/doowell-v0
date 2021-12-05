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
      res.sendStatus(500);
    }
      res.status(200).send(habits);
  });
});

app.post('/habits', (req, res) => {
  const queryString = `INSERT INTO habits (habit, date, hex_color) VALUES(?, ?, ?)`;
  const queryArgs = [req.body.habit, req.body.date, req.body.hex_color];

  return client.query(queryString, queryArgs, (err) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });
});

app.put('/habits', (req, res) => {
  const queryString = `UPDATE habits SET habit=${req.body.updateText} WHERE habit=${req.body.habitText}`;

  return client.query(queryString, (err) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
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
      res.sendStatus(500);
    } else {
      res.sendStatus(204);
    }
  });
});

app.get('/tracked_habits', (req, res) => {
  const queryString = `SELECT * FROM tracked_habits`;

  client.query(queryString, (err, tracked_habits) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.status(200).send(tracked_habits);
    }
  });
});

app.get('/tracked_habits/count', (req, res) => {
  const queryString = `SELECT COUNT(*) FROM tracked_habits`;

  return client.query(queryString, (err, count) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.status(200).send(count[0]);
    }
  });
});

app.post('/tracked_habits', (req, res) => {
  const queryString = `INSERT INTO tracked_habits (habit) VALUES(?)`;
  const queryArgs = [req.body.habit];

  return client.query(queryString, queryArgs, (err) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });
});

app.put('/tracked_habits', (req, res) => {

});

app.delete('/tracked_habits', (req, res) => {
  const queryString = `DELETE FROM tracked_habits WHERE habit=(?)`;
  const queryArg = [req.body.habit]

  return client.query(queryString, queryArg, (err) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
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
      res.sendStatus(500);
    }
      res.status(200).send(tasks);
  });
});

app.get('/tasks/incomplete', (req, res) => {
  const queryString = `SELECT * FROM tasks WHERE completed = 0`;

  return client.query(queryString, (err, incompleteTasks) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.status(200).send(incompleteTasks);
    }
  });
});

app.post('/tasks', (req, res) => {
  const queryString = `INSERT INTO tasks (task, category, hex_color) VALUES(?, ?, ?)`;
  const queryArgs = [req.body.taskText, req.body.category, req.body.hex_color];

  return client.query(queryString, queryArgs, (err) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
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
      res.sendStatus(500);
    } else {
      res.sendStatus(202);
    }
  });
});

app.put('/tasks/complete', (req, res) => {
  const queryString = `UPDATE tasks SET completed = 1 WHERE task = (?)`;
  const queryArgs = [ req.body.taskText ];

  return client.query(queryString, queryArgs, (err) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(202);
    }
  });
})

app.delete('/tasks', (req, res) => {
  const queryString = `DELETE FROM tasks WHERE task=(?)`;
  const queryArg = [req.body.task]

  return client.query(queryString, queryArg, (err) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(204);
    }
  });
});

app.get('/reminders', (req, res) => {
  const queryString = `SELECT * FROM reminders WHERE completed=0`;

  client.query(queryString, (err, reminders) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    }
      res.status(200).send(reminders);
  });
});

app.get('/reminders/incomplete', (req, res) => {
  const queryString = `SELECT * FROM reminders WHERE completed = 0`;

  return client.query(queryString, (err, incompleteReminders) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.status(200).send(incompleteReminders);
    }
  });
});

app.post('/reminders', (req, res) => {
  const queryString = `INSERT INTO reminders (reminder) VALUES(?)`;
  const queryArgs = [req.body.reminder];

  return client.query(queryString, queryArgs, (err) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
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
      res.sendStatus(500);
    } else {
      res.sendStatus(202);
    }
  });
});

app.put('/reminders/complete', (req, res) => {
  const queryString = `UPDATE reminders SET completed = 1 WHERE reminder = (?)`;
  const queryArgs = [ req.body.reminderText ];

  return client.query(queryString, queryArgs, (err) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(202);
    }
  });
})

app.delete('/reminders', (req, res) => {
  const queryString = `DELETE FROM reminders WHERE reminder=(?)`;
  const queryArg = [req.body.reminder]

  return client.query(queryString, queryArg, (err) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(204);
    }
  });
});

app.get('/notes', (req, res) => {
  const queryString = `SELECT * FROM notes`;

  client.query(queryString, (err, notes) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.status(200).send(notes[0]);
    }
  });
});

app.post('/notes', (req, res) => {
  const queryString = `INSERT INTO notes (notes) values(?)`;
  const queryArgs = [ req.body.notes ];

  client.query(queryString, queryArgs, (err) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });
});

app.put('/notes', (req, res) => {
  const queryString = `UPDATE notes SET notes = (?)`;
  const queryArgs = [ req.body.notes ];

  client.query(queryString, queryArgs, (err) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
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