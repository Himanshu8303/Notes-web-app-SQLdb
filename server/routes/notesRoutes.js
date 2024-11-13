const express = require('express');
const { getNotes, addNote, deleteNote } = require('../controllers/notesController');
const router = express.Router();

router.get('/notes', getNotes);
router.post('/notes', addNote);
router.delete('/notes/:id', deleteNote);

module.exports = router;
