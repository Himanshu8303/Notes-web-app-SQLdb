// controllers/notesController.js
const Note = require('../models/Note');

exports.getNotes = (req, res) => {
  Note.getAllNotes((err, notes) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(notes);
  });
};

exports.addNote = (req, res) => {
  const { title, content } = req.body;
  Note.addNote(title, content, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Note added successfully" });
  });
};

exports.deleteNote = (req, res) => {
  const { id } = req.params;
  Note.deleteNote(id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Note deleted successfully" });
  });
};
