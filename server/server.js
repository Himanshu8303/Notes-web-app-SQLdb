// server.js or index.js
const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

// Middleware
app.use(cors());
app.use(express.json());  // For parsing application/json

// Set up MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root', // Your MySQL password
  database: 'notes_app'
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

// GET /notes - Retrieve all notes
app.get('/notes', (req, res) => {
  const query = 'SELECT * FROM notes';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).send('Database error');
    }
    res.json(results);  // Send the results as JSON
  });
});

// POST /notes - Add a new note
app.post('/notes', (req, res) => {
  const { title, content } = req.body;
  const query = 'INSERT INTO notes (title, content) VALUES (?, ?)';
  db.query(query, [title, content], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).send('Database error');
    }
    res.status(201).json({ id: result.insertId, title, content });
  });
});

// DELETE /notes/:id - Delete a note by id
app.delete('/notes/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM notes WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).send('Database error');
    }
    res.status(204).send();  // No content
  });
});

// Start the server
app.listen(4000, () => {
  console.log('Backend server running on http://localhost:4000');
});
