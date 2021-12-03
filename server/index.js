const express = require('express');
const app = express();

// -- Middleware ----------------------------------------------------------------------
app.use(express.static(__dirname + '/client/dist'));
app.use(express.json());
app.use(express.urlencoded( {extended: true} ));

// -- Routes --------------------------------------------------------------------------
// TODO: List out all the routes your users need


// ------------------------------------------------------------------------------------
app.listen(8080, (err) => {
  if (err) {
    throw new Error(err);
  } else {
    console.log('Listening on port 8080 🐠');
  }
});