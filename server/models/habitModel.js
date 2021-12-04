const { client } = require('../../db/config.js');
const mysql = require('mysql2');

// habit: {id, habit, date, completed, hex_color}
module.exports = {
  fetch: () => {
    const queryString = `SELECT * FROM habits`;

    return client.query(queryString, (err, habits) => {
      if (err) {
        console.error(err);
      }
        return habits;
    });
  },

  create: ({habit, date, hex_color}) => {
    const queryString = `INSERT INTO habits (habit, date, hex_color) VALUES(?, ?, ?)`;
    const queryArgs = [habit, date, hex_color];

    return client.query(queryString, queryArgs, (err) => {
      if (err) {
        console.error(err);
        console.error('Error in model');
      }
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