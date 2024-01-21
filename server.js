// server.js
const express = require('express');
require('dotenv').config();
const app = express();
const api = require('./api');
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(api);

// error handling
app.use(function (err, req, res, next) {

  const message = err.raw?.message || err.message || err.sqlMessage || null;
  return res.status(500).send({ message: message });

});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
