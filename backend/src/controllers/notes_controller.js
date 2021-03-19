const noteCtrl = {};

const NoteModel = require('../models/Note');

noteCtrl.getNotes = async (req, res) => {
    const notes = await NoteModel.find();
    res.json(notes);
}

noteCtrl.getNotesTournament = async (req, res) => {
    const notes = await NoteModel.find(req.params);
    res.json(notes);
}

noteCtrl.getNote = async (req, res) => {
    const note = await NoteModel.findById(req.params.id);
    res.json(note)
}

module.exports = noteCtrl;