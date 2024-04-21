const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');

const Story = require('../models/Story');

module.exports = router;

router.post('/', bodyParser.json(), (req, res) => {
    Story.create(req.body)
        .then((story) => res.json({msg: 'New story added'}))
        .catch((err) => res.status(400).json({error: 'Error'}));
});
router.get('/', (req, res) => {
    Story.find()
        .then((story) => res.json(story))
        .catch((err) => res.status(404).json({noitemfound: 'No stories yet'}));
});
router.get('/:id', (req, res) => {
    Story.findById(req.params.id)
        .then((story) => res.json(story))
        .catch((err) => res.status(404).json({noitemfound: 'No such story'}));
});