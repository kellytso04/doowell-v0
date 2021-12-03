const express = require('express');
const app = express();
const habit = require('./models/habitModel.js');
const task = require('./models/taskModel.js');
const reminder = require('./models/reminderModel.js');

// -- Middleware ----------------------------------------------------------------------
app.use(express.static(__dirname + '/client/dist'));
app.use(express.json());
app.use(express.urlencoded( {extended: true} ));

// -- Routes --------------------------------------------------------------------------
app.get('/habits', (req, res) => {
  console.log('GET DIS BREAD');
  habit.fetch()
    .then( (habits) => {
      console.log(habits);
      res.status(200).send(habits);
    })
    .catch( (err) => {
      console.error(err);
      console.error('Error fetching habits');
    })
});

app.post('/habits', (req, res) => {
  console.log('REQ.BODY: ', req.body);
  habit.create(req.body)
    .then( () => {
      res.send(201);
    })
    .catch( (err) => {
      console.error(err);
      console.error('Error creating new habit');
    })
});

app.put('/habits', (req, res) => {

});

app.delete('/habits', (req, res) => {

});

app.get('/tasks', (req, res) => {
  res.send(200);
});

app.post('/tasks', (req, res) => {

});

app.put('/tasks', (req, res) => {

});

app.delete('/tasks', (req, res) => {

});

app.get('/reminders', (req, res) => {

});

app.post('/reminders', (req, res) => {

});

app.put('/reminders', (req, res) => {

});

app.delete('/reminders', (req, res) => {

});

// ------------------------------------------------------------------------------------
app.listen(8080, (err) => {
  if (err) {
    throw new Error(err);
  } else {
    console.log('Listening on port 8080 🐠');
  }
});