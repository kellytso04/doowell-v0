const sql = require('mysql');
const client = require('../../db/config.js');

// habit: {id, habit, date, completed, hex_color}
module.exports = {
  fetch: () => {
    const queryString = `SELECT * FROM habits`;

    return client.query(queryString)
      .then( ({habits}) => {
        console.log('Received back: ', habits);

        return habits;
      })
      .catch( (err) => {
        console.error(err);
        console.error('Error in model');
      });
  },

  create: ({habit, date, hex_color}) => {
    const queryString = `INSERT INTO habits (habit, date, hex_color) VALUES(?, ?, ?)`;
    const queryArgs = [habit, date, hex_color];

    return client.query(queryString, queryArgs)
      .catch( (err) => {
        console.error(err);
        console.error('Error in model');
      });
  },

  edit: (habitObject) => {
    const queryString = `UPDATE habits SET habit = ? WHERE habit = ${habitObject.habit}`;

    return client.query(queryString)
      .catch( (err) => {
        console.error(err);
        console.error('Error in model');
      });
  },

  delete: ({habit}) => {
    const queryString = `DELETE FROM habits WHERE habit = ${habit}`;

    return client.query(queryString)
      .catch( (err) => {
        console.error(err);
        console.error('Error in model');
      });
  }
}