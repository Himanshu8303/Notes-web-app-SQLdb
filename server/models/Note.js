// models/Note.js
const db = require('../config/db');

// Function to get all notes
exports.getAllNotes = (callback) => {
  const query = "SELECT * FROM notes";
  db.query(query, (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
};

// Function to add a new note
exports.addNote = (title, content, callback) => {
  const query = "INSERT INTO notes (title, content) VALUES (?, ?)";
  db.query(query, [title, content], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
};

// Function to delete a note by ID
exports.deleteNote = (id, callback) => {
  const query = "DELETE FROM notes WHERE id = ?";
  db.query(query, [id], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
};
