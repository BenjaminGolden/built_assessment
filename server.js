// server.js
const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Import the pool from db.js
const pool = require('./db');

// Define routes here
// Example route using the database pool
// app.get('/data', async (req, res) => {
//   try {
//     const data = await pool.query('SELECT * FROM your_table');
//     res.json(data.rows);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
