const { Router } = require('express');
const router = Router();

const { getNotes, getNote, getNotesTournament } = require('../controllers/notes_controller');

router.route('/')
    .get(getNotes)

router.route('/:category/:tournament')
    .get(getNotesTournament)

router.route('/:category/:tournament/:id')
    .get(getNote)

module.exports = router;