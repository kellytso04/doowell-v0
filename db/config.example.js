const mysql = require('mysql');

const client = mysql.createConnection({
  host: 'yourhost',
  user: 'yourusername',
  password: 'yourpassword'
});

client.connect((err) => {
  if (err) {
    throw new Error(err);
  } else {
    console.log('Connected to the database 🐠');
  }
});